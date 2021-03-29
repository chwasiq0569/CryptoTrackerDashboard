import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CryptoList from './components/cryptoList/CryptoList';
import CurrencyInfo from './components/currencyInfo/CurrencyInfo';
import DataPlot from './components/DataPlot/DataPlot';
import React, { useState } from 'react';

// var globalVariable = "";

export default function Home({ allCoins, coinHistory })  {
  const [coin, setCoin] = useState(allCoins[0]);

  console.log("COIN: ", coin)
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.leftSide}>
          <CryptoList setCoin={setCoin} coin={coin} currencyList={allCoins} />
        </div>
        <div className={styles.middleSection}>
          <DataPlot coin={coin} />
        </div>
        <div className={styles.rightSide}>
          <CurrencyInfo coin={coin} />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
  const allCoins = await response.json();
  // const [allCoinsData, coinHistoryData] = await Promise.all([
  //   fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`), 
  //   fetch(`https://api.coingecko.com/api/v3/coins/${global.globalVariable.id}/market_chart?vs_currency=usd&days=1`)
  // ]);
  // const [allCoins, coinHistory] = await Promise.all([
  //   allCoinsData.json(), 
  //   coinHistoryData.json()
  // ]);
  // return { props: { allCoins, coinHistory } };
  return {
   props:{
       allCoins
   }
  }
}
