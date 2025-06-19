import clsx from 'clsx'
import { useEffect } from 'react'

export function Prose({ children, className }) {
  useEffect(() => {
    // Add copy functionality to all code blocks
    const addCopyButtons = () => {
      const codeBlocks = document.querySelectorAll(
        '.prose pre:not([data-enhanced])'
      )

      codeBlocks.forEach((pre) => {
        pre.setAttribute('data-enhanced', 'true')

        // Create wrapper with proper theme-aware styling
        const wrapper = document.createElement('div')
        wrapper.className =
          'code-block-container group relative my-6 rounded-xl overflow-hidden bg-white border border-zinc-200 shadow-sm dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-none'

        // Create header with reduced size
        const header = document.createElement('div')
        header.className =
          'flex items-center justify-between px-4 py-2.5 bg-zinc-50 border-b border-zinc-200 dark:bg-zinc-800/50 dark:border-zinc-700'

        // Create dots and language label with smaller elements
        const leftSection = document.createElement('div')
        leftSection.className = 'flex items-center space-x-2.5'
        leftSection.innerHTML = `
          <div class="flex space-x-1">
            <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          </div>
          <div class="text-xs font-mono text-zinc-600 dark:text-zinc-400">
            ${getLanguageFromCode(pre) || 'text'}
          </div>
        `

        // Create smaller copy button
        const copyButton = document.createElement('button')
        copyButton.className =
          'copy-btn flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 hover:text-zinc-900 border border-zinc-300 hover:border-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-zinc-300 dark:hover:text-white dark:border-zinc-600 dark:hover:border-zinc-500'
        copyButton.innerHTML = `
          <svg class="w-3.5 h-3.5 copy-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
            <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
          </svg>
          <span class="copy-text">Copy</span>
        `

        // Add copy functionality
        copyButton.addEventListener('click', async () => {
          const code = pre.querySelector('code')
          const text = code ? code.textContent : pre.textContent

          try {
            await navigator.clipboard.writeText(text)
            copyButton.innerHTML = `
              <svg class="w-3.5 h-3.5 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-green-600 dark:text-green-400">Copied!</span>
            `
            setTimeout(() => {
              copyButton.innerHTML = `
                <svg class="w-3.5 h-3.5 copy-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                  <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
                <span class="copy-text">Copy</span>
              `
            }, 2000)
          } catch (err) {
            console.error('Failed to copy:', err)
          }
        })

        header.appendChild(leftSection)
        header.appendChild(copyButton)

        // Style the pre element with reduced padding
        pre.className =
          'p-4 overflow-x-auto text-sm leading-6 m-0 bg-white dark:bg-zinc-900'
        pre.style.border = 'none'
        pre.style.outline = 'none'
        pre.style.boxShadow = 'none'
        pre.style.textDecoration = 'none'
        pre.style.borderRadius = '0'

        const code = pre.querySelector('code')
        if (code) {
          // Keep existing classes and add font styling
          code.className = clsx(code.className, 'font-mono')
          code.style.border = 'none'
          code.style.outline = 'none'
          code.style.boxShadow = 'none'
          code.style.textDecoration = 'none'
          code.style.background = 'transparent'

          // Remove any unwanted styling from all nested elements
          const allTokens = code.querySelectorAll('*')
          allTokens.forEach((token) => {
            token.style.border = 'none'
            token.style.outline = 'none'
            token.style.boxShadow = 'none'
            token.style.textDecoration = 'none'
            token.style.background = 'transparent'
          })
        }

        // Wrap everything
        pre.parentNode.insertBefore(wrapper, pre)
        wrapper.appendChild(header)
        wrapper.appendChild(pre)
      })
    }

    const getLanguageFromCode = (pre) => {
      const code = pre.querySelector('code')
      if (code && code.className) {
        const match = code.className.match(/language-(\w+)/)
        return match ? match[1] : null
      }
      return null
    }

    // Run on mount and when children change
    const timer = setTimeout(addCopyButtons, 100)
    return () => clearTimeout(timer)
  }, [children])

  return (
    <div
      className={clsx(
        className,
        'prose-lg prose max-w-none dark:prose-invert',
        // Enhanced typography
        'prose-headings:scroll-mt-24 prose-headings:font-semibold',
        'prose-h1:text-3xl prose-h1:font-bold prose-h1:tracking-tight',
        'prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-2xl prose-h2:font-semibold prose-h2:tracking-tight',
        'prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:tracking-tight',
        'prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-lg prose-h4:font-semibold prose-h4:tracking-tight',
        // Enhanced paragraph styling
        'prose-p:leading-7 prose-p:text-zinc-600 dark:prose-p:text-zinc-400',
        // Enhanced list styling
        'prose-li:text-zinc-600 dark:prose-li:text-zinc-400',
        'prose-ol:list-decimal prose-ul:list-disc',
        // Enhanced link styling
        'prose-a:font-semibold prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-teal-400',
        // Enhanced strong/bold styling
        'prose-strong:font-semibold prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100',
        // Enhanced inline code styling
        'prose-code:px-2 prose-code:py-1 prose-code:text-sm prose-code:font-semibold',
        'prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800/50',
        'prose-code:text-zinc-800 dark:prose-code:text-zinc-200',
        'prose-code:rounded-md prose-code:border prose-code:border-zinc-200 dark:prose-code:border-zinc-700',
        'prose-code:before:content-none prose-code:after:content-none',
        // Enhanced blockquote styling
        'prose-blockquote:border-l-4 prose-blockquote:border-teal-500 prose-blockquote:pl-6',
        'prose-blockquote:italic prose-blockquote:text-zinc-700 dark:prose-blockquote:text-zinc-300',
        // Enhanced hr styling
        'prose-hr:my-12 prose-hr:border-zinc-200 dark:prose-hr:border-zinc-700',
        // Enhanced table styling
        'prose-table:text-sm prose-thead:border-b prose-thead:border-zinc-200 dark:prose-thead:border-zinc-700',
        'prose-th:font-semibold prose-th:text-zinc-900 dark:prose-th:text-zinc-100',
        'prose-td:text-zinc-600 dark:prose-td:text-zinc-400',
        // Ensure no prose styles interfere with our enhanced code blocks
        '[&_.code-block-container]:not-prose'
      )}
    >
      {children}
    </div>
  )
}
