import Image from 'next/image'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import styles from './about.module.scss'

export default function About() {
  return (
    <section id='about' className={styles.container}>
      <div style={{ marginRight: '7rem' }}>
        <AnimationOnScroll animatePreScroll animateIn='animate__fadeInUp'>
          <p className='code-tag'>{'<developer>'}</p>
          <h1>
            Andres <br /> Alcocer
          </h1>
          <p className='code-tag' style={{ textAlign: 'right' }}>
            {'</developer>'}
          </p>
        </AnimationOnScroll>
      </div>
      <div>
        <AnimationOnScroll animatePreScroll animateIn='animate__fadeInUp'>
          <p className='code-tag'>{'<about me>'}</p>
          <p style={{ lineHeight: '1.2' }}>
            I am a frontend developer primarily experienced with React. I enjoy
            the craft of building intuitive, dynamic, and responsive user
            interfaces. I strive to provide the best possible user experience by
            creating beautiful UI components.
          </p>
          <p className='code-tag' style={{ textAlign: 'right' }}>
            {'</about me>'}
          </p>
        </AnimationOnScroll>
      </div>
    </section>
  )
}
