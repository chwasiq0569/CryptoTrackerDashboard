import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CryptoList from './components/cryptoList/CryptoList';

export default function Home() {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.leftSide}>
          <CryptoList />
        </div>
        <div className={styles.middleSection}>
          Middle
        </div>
        <div className={styles.rightSide}>
          Right
        </div>
      </div>
    </div>
  )
}
