import { AnimationOnScroll } from 'react-animation-on-scroll'

import styles from './about.module.scss'

export default function About() {
  return (
    <section id='about' className={styles.container}>
      <div style={{ marginRight: '7rem' }}>
        <AnimationOnScroll
          animatePreScroll
          animateIn='animate__fadeInUp'
          animateOut='animate__fadeOut'
        >
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
            Hi there! I am Andres Alcocer. I am a passionate introverted
            frontend developer who enjoys crafting delightful user experiences
            for the web. Every now and then I like to clone the frontend of my
            favorite web/mobile applications. I pay close attention to details
            such as animations, ux flow, and design layout to build a coherent
            and functional frontend web experience.
            <br />
            <br />
            Ever since I wrote my first line of code back in College I knew I
            wanted to become a software developer. With code I can turn an idea
            into something tangible and I think that is powerful in itself. Not
            only can I materialize ideas but I can also solve real world
            problems and make the world a better place. I’ve always been
            fascinated by how code can transform the world we live in.
          </p>
          <p className='code-tag' style={{ textAlign: 'right' }}>
            {'</about me>'}
          </p>
        </AnimationOnScroll>
      </div>
    </section>
  )
}
