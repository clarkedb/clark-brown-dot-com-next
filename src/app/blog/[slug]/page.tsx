import type { Metadata } from 'next'
import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx'
import { getBlogPosts } from '@/db/blog'
import { unstable_noStore as noStore } from 'next/cache'

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata | undefined> {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://clark-brown.com'
  const post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  const { title, publishedAt: publishedTime, summary: description, image } = post.metadata

  // TODO: build og image stuff
  const ogImage = image ? `${siteURL}${image}` : `${siteURL}/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${siteURL}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

function formatDate(date: string) {
  noStore()
  const currentDate = new Date().getTime()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  const targetDate = new Date(date).getTime()
  const timeDifference = Math.abs(currentDate - targetDate)
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  const fullDate = new Date(date).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (daysAgo < 1) {
    return 'Today'
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7)
    return `${fullDate} (${weeksAgo}w ago)`
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30)
    return `${fullDate} (${monthsAgo}mo ago)`
  } else {
    const yearsAgo = Math.floor(daysAgo / 365)
    return `${fullDate} (${yearsAgo}y ago)`
  }
}

type BlogPostProps = {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://clark-brown.com'
  const post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // TODO: fetch this and update this
  const views = 0

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${siteURL}${post.metadata.image}`
              : `${siteURL}/og?title=${post.metadata.title}`,
            url: `${siteURL}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Clark Brown',
            },
          }),
        }}
      />
      <h1 className="title max-w-[650px] text-2xl font-medium tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-neutral-600 dark:text-neutral-400">
            {`${views.toLocaleString()} views`}
          </p>
        </Suspense>
      </div>
      <article className="prose prose-neutral prose-quoteless dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
