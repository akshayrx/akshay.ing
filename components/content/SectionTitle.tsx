import React from 'react'

type SectionTitleProps = {
    title: string
}

function SectionTitle(props : SectionTitleProps) {
  return (
    <h2 className="mb-5">{props.title}</h2>
  )
}

export default SectionTitle