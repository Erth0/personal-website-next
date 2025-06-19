import clsx from 'clsx'

export function Skill({ name, className, variant = 'secondary', ...props }) {
  className = clsx(
    'inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full transition-colors print:px-2 print:py-0.5 print:text-xs',
    {
      // Primary skills - most important/strongest
      'bg-teal-600 text-white border border-teal-600 hover:bg-teal-700 print:bg-white print:text-black print:border-black':
        variant === 'primary',
      // Secondary skills - general proficiency
      'bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-100 dark:bg-teal-900/20 dark:text-teal-300 dark:border-teal-800 print:bg-white print:text-black print:border-black':
        variant === 'secondary',
    },
    className
  )

  return (
    <span className={className} {...props}>
      {name}
    </span>
  )
}
