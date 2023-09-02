import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photo Album | Home</title>
        <meta name="keywords" content="photos, images, pictures" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <div className={styles.text}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        </div>
        <Link href="/photos" className={styles.btn}>
          See Photos
        </Link>
      </div>
    </div>
  )
}

