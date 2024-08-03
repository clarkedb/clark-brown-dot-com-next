export default function NotFound() {
  return (
    <section className="flex w-full flex-col gap-5">
      <h1 className="text-xl font-medium tracking-tighter md:text-2xl">
        Oh no! This page does not exist.
      </h1>
      <text className="mx-auto mt-40 text-8xl font-extrabold text-neutral-700 dark:text-neutral-300">
        404
      </text>
    </section>
  )
}
