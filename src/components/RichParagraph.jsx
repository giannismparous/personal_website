export default function RichParagraph({ parts, className }) {
  if (!parts?.length) {
    return null
  }

  return (
    <p className={className}>
      {parts.map((part, index) => {
        if (part.link) {
          const isHash = part.link.href.startsWith('#')
          return (
            <a
              key={index}
              className="profile-inline-link"
              href={part.link.href}
              target={isHash ? undefined : '_blank'}
              rel={isHash ? undefined : 'noopener noreferrer'}
            >
              {part.link.label}
            </a>
          )
        }

        if (part.lang) {
          return (
            <span key={index} lang={part.lang}>
              {part.text}
            </span>
          )
        }

        return <span key={index}>{part.text}</span>
      })}
    </p>
  )
}
