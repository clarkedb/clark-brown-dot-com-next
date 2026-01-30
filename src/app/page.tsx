import { Icon } from '@/components/icon'
import { Social } from '@/components/social'

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="mb-8 text-2xl font-medium tracking-tighter">hello, I&apos;m Clark 👋</h1>
        <p className="prose prose-neutral dark:prose-invert">
          I am a Problem Solver. I design and build solutions for hard problems.
        </p>
      </div>
      <div className="my-4 flex flex-col gap-2">
        <p className="prose prose-neutral dark:prose-invert">
          Senior Software Engineer with experience designing and operating high-impact systems in
          production. Applied Math and Computer Science graduate. Experienced developer with various
          languages and technologies with a love of problem solving.
        </p>
        <p className="prose prose-neutral dark:prose-invert">
          I am driven by team environments where we tackle challenging issues. I love creating and
          building, and I&apos;m a big a fan of whiteboards.
        </p>
      </div>
      <div className="w-100 underline">
        <a
          href="/resume"
          target="_blank"
          rel="noopener"
          className="flex flex-row items-center gap-1 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        >
          <Icon icon="download" height="1em" width="1em" />
          Download my resume
        </a>
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
    </main>
  )
}
