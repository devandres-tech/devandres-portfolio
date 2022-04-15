import React from 'react'
import { Link } from 'react-scroll'

import styles from './nav.module.scss'

export default function Nav() {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <Link>{'<Home>'}</Link>
          <Link>{'<Projects>'}</Link>
          <Link>{'<skills>'}</Link>
        </div>
        <div className={styles.rightContent}>
          <a href='https://github.com/devandres-tech'>
            <span className='fa-brands fa-github' />
          </a>
          <a href='https://www.linkedin.com/in/andres-io/'>
            <span className='fa-brands fa-linkedin-in' />
          </a>
          <a href='https://twitter.com/devandres_tech'>
            <span className='fa-brands fa-twitter' />
          </a>
        </div>
      </div>
    </nav>
  )
}
