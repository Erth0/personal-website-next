import Head from 'next/head'
import { useRouter } from 'next/router'

import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}) {
  let router = useRouter()

  if (isRssFeed) {
    return children
  }

  return (
    <>
      <Head>
        <title>{`${meta.title} - Eluert Mukja`}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-3xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition hover:shadow-lg hover:shadow-zinc-800/10 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
            )}
            <article>
              <header className="flex flex-col border-b border-zinc-100 pb-10 dark:border-zinc-700/40">
                <div className="flex items-center gap-6">
                  <time
                    dateTime={meta.date}
                    className="flex items-center text-sm font-medium text-zinc-500 dark:text-zinc-400"
                  >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                    <span className="ml-3">{formatDate(meta.date)}</span>
                  </time>
                  <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-700" />
                  <div className="flex items-center text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    {Math.ceil(children.toString().length / 1000)} min read
                  </div>
                </div>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
                  {meta.title}
                </h1>
                {meta.description && (
                  <p className="mt-6 text-xl leading-8 text-zinc-600 dark:text-zinc-400">
                    {meta.description.replace(/\s+/g, ' ').trim()}
                  </p>
                )}
              </header>

              <div className="mt-12">
                <Prose>{children}</Prose>
              </div>

              {/* Article footer */}
              <footer className="mt-16 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600">
                      <span className="text-sm font-semibold text-white">
                        EM
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {meta.author}
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Published on {formatDate(meta.date)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: meta.title,
                            text: meta.description,
                            url: window.location.href,
                          })
                        } else {
                          navigator.clipboard.writeText(window.location.href)
                        }
                      }}
                      className="rounded-full bg-zinc-100 p-2 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
                      title="Share article"
                    >
                      <svg
                        className="h-5 w-5 text-zinc-600 dark:text-zinc-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
