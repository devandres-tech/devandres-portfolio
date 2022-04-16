import styles from './projects.module.scss'

export default function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <p className='code-tag'>{'<projects>'}</p>

      <div className={styles.boxes}>
        <a className={styles.box} href=''>
          <h3>Netflix Clone </h3>
          <i className='fa fa-hand-rock-o'></i>
          <p>This is some content for the box</p>
        </a>

        <a className={styles.box} href=''>
          <h3>Football Stats</h3>
          <i className='fa fa-hand-paper-o'></i>
          <p>This is some content for the box</p>
        </a>

        <a className={styles.box} href=''>
          <h3>Spotify Clone</h3>
          <i className='fa fa-hand-spock-o'></i>
          <p>This is some content for the box</p>
        </a>
      </div>
      <p style={{ textAlign: 'right' }} className='code-tag'>
        {'</projects>'}
      </p>
    </section>
  )
}
