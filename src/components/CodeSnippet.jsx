import { useState } from 'react'
import clsx from 'clsx'

function CopyIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
      <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
    </svg>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function CodeSnippet({
  children,
  title,
  language = 'json',
  filename,
  className,
}) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div
      className={clsx(
        'dark:bg-zinc-950 group relative rounded-2xl bg-zinc-900',
        'border border-zinc-200/10 dark:border-zinc-800',
        'shadow-lg shadow-zinc-900/5 dark:shadow-none',
        'overflow-hidden',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800/50 px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
          </div>
          {(title || filename) && (
            <div className="flex items-center space-x-2 text-sm">
              {filename && (
                <span className="font-mono text-zinc-400">{filename}</span>
              )}
              {title && (
                <span className="font-medium text-zinc-300">{title}</span>
              )}
            </div>
          )}
        </div>

        <button
          onClick={copyToClipboard}
          className={clsx(
            'flex items-center space-x-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-all',
            'bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 hover:text-white',
            'border border-zinc-700/50 hover:border-zinc-600',
            'opacity-0 group-hover:opacity-100'
          )}
        >
          {copied ? (
            <>
              <CheckIcon className="h-4 w-4 text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="relative">
        <pre className="overflow-x-auto p-6 text-sm leading-6">
          <code className={`language-${language} text-zinc-100`}>
            {children}
          </code>
        </pre>

        {/* Language badge */}
        <div className="absolute top-4 right-4 rounded-md border border-zinc-700/50 bg-zinc-800/80 px-2 py-1">
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-300">
            {language}
          </span>
        </div>
      </div>
    </div>
  )
}
