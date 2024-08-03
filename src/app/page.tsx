import { Icon } from '@/components/icon'
import { Social } from '@/components/social'
import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <div>
        <h1 className="mb-8 text-2xl font-medium tracking-tighter">hello, I&apos;m Clark 👋</h1>
        <p>I am a Problem Solver. I design and build solutions for hard problems.</p>
      </div>
      <div className="my-4 flex flex-col gap-2">
        <p>
          Senior Software Engineer at Neighbor. Applied Math and Computer Science graduate.
          Experienced developer with various langages and technologies with a love of problem
          solving.
        </p>
        <p>
          I am driven by team environments where we tackle challenging issues. I love creating and
          building, and I&apos;m a big a fan of whiteboards.
        </p>
      </div>
      <div className="w-100 underline">
        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-1 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        >
          <Icon icon="download" height="1em" width="1em" />
          Download my resume
        </Link>
      </div>
      <div className="mt-5 flex flex-row gap-3">
        <Social label="github" icon="github" url="https://github.com/clarkedb" />
        <Social
          label="linkedin"
          icon="linkedin"
          url="https://www.linkedin.com/in/clark-ed-brown/"
        />
        <Social label="x" icon="twitter" url="https://x.com/MetaphorComplex" />
        <Social label="email" icon="mail" url="mailto:clark@clark-brown.com" />
      </div>
    </section>
  )
}
