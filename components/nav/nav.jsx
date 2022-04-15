import React from 'react'
import { Link } from 'react-scroll'

import styles from './nav.module.scss'

export default function Nav() {
  const animDuration = 800
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <Link
            offset={-85}
            activeClass={styles.active}
            spy={true}
            smooth={true}
            duration={animDuration}
            to='about'
          >
            {'<About>'}
          </Link>
          <Link
            activeClass={styles.active}
            offset={-85}
            spy={true}
            smooth={true}
            duration={animDuration}
            to='projects'
          >
            {'<Projects>'}
          </Link>
          <Link
            activeClass={styles.active}
            offset={-85}
            spy={true}
            smooth={true}
            duration={animDuration}
            to='skills'
          >
            {'<Skills>'}
          </Link>
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
