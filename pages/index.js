import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title> Ninja List | Home </title>
      <meta name="keywords" content='ninjas' />
    </Head>
 <div>
   <h1 className={styles.titles}>Homepage</h1>
   <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero officiis atque recusandae quidem libero odit veniam cupiditate adipisci voluptatibus rerum minima, reprehenderit id eum velit, hic veritatis possimus consequatur harum!</p>
   <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam quasi facilis odio quidem voluptates ex nam nisi! Iusto repellendus totam pariatur non tempore inventore. Voluptatibus iure consequuntur qui necessitatibus.</p>

    <Link href='/' className={styles.btn}> See Ninja Lists</Link>
 </div>
 </>
  )
}
