import Head from 'next/head'

import Nav from '../components/nav/nav'
import About from '../components/about/about'
import Projects from '../components/projects/projects'
import Skills from '../components/skills/skills'

export default function Home() {
  return (
    <>
      <Head>
        <title>Andres Alcocer | Frontend Developer</title>
        <meta
          name='description'
          content='Andres Alcocer. A passionate frontend developer who specializes in React and who enjoys building intuitive, dynamic, and responsive user interfaces'
        />
        <meta
          name='keywords'
          content='Andres Alcocer, React, HTML, CSS, SASS, JavaScript, TypeScript'
        />
        <meta
          property='og:title'
          content='Andres Alcocer - A passionate React frontend developer'
        />
        {/* <meta property='og:image' content='/images/logo-orange.png' /> */}
        <meta property='og:image:width' content='500' />
        <meta property='og:image:height' content='500' />
        <meta
          property='og:description'
          content='Andres Alcocer - React frontend developer'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>
      <Nav />
      <main>
        <About />
        <Projects />
        <Skills />
      </main>
    </>
  )
}
