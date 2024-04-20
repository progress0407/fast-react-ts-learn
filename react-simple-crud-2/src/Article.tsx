import React from 'react'

interface OwnProps {
  title: string,
  body: string
}


const Article: React.FC<OwnProps> = ({ title, body }) => {
  return (
    <article>
      <h2>{title}</h2>
      {body}
    </article>
  )
}

export default Article
