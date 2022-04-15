import React from 'react'
import { Link } from 'react-scroll'

export default function Nav() {
  return (
    <nav>
      <div>
        <div>
          <Link>Home</Link>
          <Link>Projects</Link>
          <Link>Skills</Link>
        </div>
        <div></div>
      </div>
    </nav>
  )
}
