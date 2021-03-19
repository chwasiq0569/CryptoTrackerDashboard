import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CryptoList from './components/cryptoList/CryptoList';
import CurrencyInfo from './components/currencyInfo/CurrencyInfo';

export default function Home({ result }) {
  console.log(result)
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.leftSide}>
          <CryptoList currencyList={result} />
        </div>
        <div className={styles.middleSection}>
          Middle
        </div>
        <div className={styles.rightSide}>
          <CurrencyInfo />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
  const result = await response.json();
  return {
    props: {
      result
    }
  }
}
