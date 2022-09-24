import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeScreen from './homeScreen'

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeScreen></HomeScreen>
    </div>
  )
}
