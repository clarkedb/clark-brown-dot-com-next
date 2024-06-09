import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Talks',
  description: "Talks I've given related to mathematics and computing.",
}

export default function Talks() {
  return (
    <section className="flex flex-col items-center justify-between">
      <div className="container mx-auto">
        <h1 className="mb-8 text-3xl font-bold">Talks</h1>
        <div className="mb-8 flex flex-col gap-2">
          <p>
            A compilation of talks and lectures given by Clark Brown related to mathematics and
            computing.
          </p>
          <p>
            The material herein is licensed under a{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              className="text-blue-300 underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              CC BY 4.0 license
            </a>
            .
          </p>
        </div>

        <div className="mb-8">
          <Link href="#2023">
            <h2 className="mb-4 text-2xl font-semibold">2023</h2>
          </Link>
          <div className="mb-6">
            <h3 className="mb-2 text-xl font-semibold">
              Soggetto Cavato: 15th Century Data Encoding
            </h3>
            <p className="mb-2">
              <a
                href="https://www.youtube.com/playlist?list=PLir9neh_xab2ThykAVNQp9EPLcrUKfFZM"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Neighbor Mind Garden Lecture Series, March 2023
              </a>
              : Talk about the Soggetto Cavato (carved subject) method of embedding words into music
              from the 15th century. Included a live demonstration of the python project{' '}
              <a
                href="https://github.com/clarkedb/soggetto-cavato"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                soggetto-cavato
              </a>{' '}
              which embeds any string into a simple melody. (
              <a
                href="https://docs.google.com/presentation/d/1mXJzcWU7yf2hHMPK4b-3WecrNyzOCBvxIS_Ks0KDhwQ/edit?usp=sharing"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Slides
              </a>
              )
            </p>
          </div>
        </div>

        <div className="mb-8">
          <Link href="#2022">
            <h2 className="mb-4 text-2xl font-semibold" id="2022">
              2022
            </h2>
          </Link>
          <div className="mb-6">
            <h3 className="mb-2 text-xl font-semibold">
              The Halting Problem and Why We Can&apos;t Solve All Problems with Code
            </h3>
            <p className="mb-2">
              <a
                href="https://www.youtube.com/playlist?list=PLir9neh_xab2ThykAVNQp9EPLcrUKfFZM"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Neighbor Mind Garden Lecture Series, December 2022
              </a>
              : An overview of the Halting Problem and the proof by contradiction that shows Turing
              machines cannot solve it. Explores the consequences and applications in computing. (
              <a
                href="https://docs.google.com/presentation/d/10sZ-zzw4CGZwyJoVytGc92XkPYbah8qspW1ex88oo9o/edit?usp=sharing"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Slides
              </a>{' '}
              |
              <a
                href="https://www.youtube.com/watch?v=hD8I2F94bBA"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Video
              </a>
              )
            </p>
          </div>
        </div>

        <div className="mb-8">
          <Link href="#2021">
            <h2 className="mb-4 text-2xl font-semibold" id="2021">
              2021
            </h2>
          </Link>
          <div className="mb-6">
            <h3 className="mb-2 text-xl font-semibold">
              Testing Ruby Code Using Grift for Mocking Methods
            </h3>
            <p className="mb-2">
              <a
                href="https://www.youtube.com/playlist?list=PLir9neh_xab2ThykAVNQp9EPLcrUKfFZM"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Neighbor Mind Garden Lecture Series, November 2021
              </a>
              : A walkthrough of using the Ruby gem{' '}
              <a
                href="https://github.com/clarkedb/grift"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                grift
              </a>{' '}
              for mocking methods in the MiniTest testing framework for Ruby. This was given shortly
              after the initial release of `grift`. (
              <a
                href="https://www.youtube.com/watch?v=XHtlxiIOYnA"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Video
              </a>
              )
            </p>
          </div>
          <div className="mb-6">
            <h3 className="mb-2 text-xl font-semibold">
              Proof of Taylor&apos;s Law for Exponential Growth Models with Migration
            </h3>
            <p className="mb-2">
              <a href="https://src.byu.edu/" className="text-blue-300 underline">
                BYU Student Research Conference, February 2021
              </a>
              : Talk covering the application of the Perron-Frobenius Theorem regarding an
              exponential growth model with migration. Covers how that applies to our proof that
              Taylor&apos;s Law holds for the population samples from such a model. (
              <a
                href="https://docs.google.com/presentation/d/1uoueM3A02rgQENppYnllOUjg30g4OYEyQmCEjj0nSpw/edit?usp=sharing"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Slides
              </a>
              )
            </p>
          </div>
        </div>

        <div className="mb-8">
          <Link href="#2020">
            <h2 className="mb-4 text-2xl font-semibold" id="2020">
              2020
            </h2>
          </Link>
          <div className="mb-6">
            <h3 className="mb-2 text-xl font-semibold">How Eigenface Facial Recognition Works</h3>
            <p className="mb-2">
              <a
                href="https://www.youtube.com/playlist?list=PLir9neh_xab2ThykAVNQp9EPLcrUKfFZM"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Neighbor Mind Garden Lecture Series, October 2020
              </a>
              : Lightning talk about how eigenface facial recognition works. Explores the role of
              the Singular Value Decomposition (SVD) in the process. (
              <a
                href="https://docs.google.com/presentation/d/1GF8JN3EVszJGIfjiYegdSBbj31s0x26CZQ3P2Wgsc0o/edit?usp=sharing"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Poster
              </a>{' '}
              |
              <a
                href="https://www.youtube.com/watch?v=ic-RDiKu8dU"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Video
              </a>
              )
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-xl font-semibold">Edit Distances</h3>
            <p className="mb-2">
              <a
                href="https://www.youtube.com/playlist?list=PLir9neh_xab2ThykAVNQp9EPLcrUKfFZM"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Neighbor Mind Garden Lecture Series, August 2020
              </a>
              : Talk about edit distance algorithms and some of their use cases in software. Covers
              some of the common algorithms and the tradeoffs between different distances. (
              <a
                href="https://docs.google.com/presentation/d/1XPwKVCqZUDJiE3l9CJ02RddAfB_KbXSVjJMJSTSyHNw/edit?usp=sharing"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Slides
              </a>{' '}
              |
              <a
                href="https://www.youtube.com/watch?v=Dk5rfOD92ic"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Video
              </a>
              )
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-xl font-semibold">
              Modeling Taylor’s Law with Exponential Growth and Migration
            </h3>
            <p className="mb-2">
              <a
                href="https://src.byu.edu/"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                BYU Student Research Conference, February 2020
              </a>
              : Talk about then ongoing research into Taylor&apos;s Law with a population model that
              includes exponential growth and migration between sub-populations. Covers
              Taylor&apos;s Law and our approach for proving it holds in a population model with
              migration. (
              <a
                href="https://docs.google.com/presentation/d/1xKgulqcqiIs3orlk_v8EOzptj3gL1omeXiMZ8gAkgL0/edit?usp=sharing"
                className="text-blue-300 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Slides
              </a>
              )
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
