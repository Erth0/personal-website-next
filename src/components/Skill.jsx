import clsx from 'clsx'

export function Skill({ name, className, ...props }) {
  className = clsx(
    'inline-flex items-center px-3 py-1 mt-1 mr-2 text-sm font-medium text-white bg-teal-500 rounded-md print:border-inset uppercase',
    className
  )

  return (
    <li className={className} {...props}>
        {name}
    </li>
  )
}
