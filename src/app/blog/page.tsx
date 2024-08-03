import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { getBlogPosts } from '@/db/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A blog about technology and mathematics',
}

export default function BlogPage() {
  const allBlogs = getBlogPosts()

  // TODO: make this dynamic
  const views = 0

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">read the blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="mb-4 flex flex-col space-y-1"
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full flex-col">
              <p className="tracking-tight text-neutral-900 dark:text-neutral-100">
                {post.metadata.title}
              </p>
              <Suspense fallback={<p className="h-6" />}>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {`${views.toLocaleString()} views`}
                </p>
              </Suspense>
            </div>
          </Link>
        ))}
    </section>
  )
}
