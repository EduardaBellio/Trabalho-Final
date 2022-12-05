import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem Vindos a minha loja!
        </h1>

        <p className={styles.description}>
         Aqui vendemos todos os tipos de produtos e para todos os tipos de usuarios
        </p>
        
      <a href="http://localhost:3000/produto" className={styles.card}>Produtos</a>
        
      </main>
    </div>
  )
}
