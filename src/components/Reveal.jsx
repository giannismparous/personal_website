import { useReveal } from '../hooks/useReveal'

export default function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  style,
  ...props
}) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
