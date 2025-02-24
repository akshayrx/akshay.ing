import React from 'react'

type SectionTitleProps = {
    title: string
}

function SectionTitle(props : SectionTitleProps) {
  return (
    <h2 className="mb-5 text-lg font-semi-bold">{props.title}</h2>
  )
}

export default SectionTitle