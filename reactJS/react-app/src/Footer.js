import React from 'react'

export const Footer = ({length}) => {
    const today = new Date()
  return (
    <footer>
<p>{length} List {length ===1 ?"Item":"Items"}</p>

    </footer>
  )
}
