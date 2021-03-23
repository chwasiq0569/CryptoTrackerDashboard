import React, { useEffect } from 'react'
import styles from './CryptoList.module.css';
// import Image from 'next/image';



export default function CryptoList({ currencyList, setCoin, coin}){
    const [selectedCoin, setSelectedCoin] = React.useState(coin);

    React.useEffect(() => {
        window.scrollTo(0, 700)
        setSelectedCoin(coin)
    }, [coin])

    const userToClass = (coin, activeClass, nonActiveClass) => {
        var userClass = "";
        // console.log(selectedCountry);
        if (coin.id === selectedCoin.id) {
          userClass = activeClass
        } else {
          userClass = nonActiveClass
        }
        return userClass;
    }

    return (
        <div className={styles.outerContainer}>
          <div className={styles.currencyListContainer}>
                {
                    currencyList.map(coin => (
                        <div key={coin.id} onClick={() => setCoin(coin)} className={userToClass(coin, styles.activeindividualCurrency, styles.individualCurrency)}>
                        <div className={styles.leftSide}>
                            <div className={styles.iconContainer}>
                                <img src={coin?.image} alt={coin.name} width="100%" height="100%" />
                            </div>
                            <p className={userToClass(coin, styles.activecurrencyName, styles.currencyName)}>
                                 {coin.symbol}
                            </p>  
                        </div>
                        <div className={styles.rightSide}>
                            <p className={userToClass(coin, styles.activePrice, styles.price)}>${coin.current_price}</p>
                            {
                                coin.price_change_percentage_24h < 0 ? <p className={userToClass(coin, styles.activepercentageRed, styles.percentageRed)}>{coin.price_change_percentage_24h.toFixed(2)}%</p> : <p className={userToClass(coin, styles.percentageGreen, styles.activepercentageGreen)}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                            }
                        </div>
                    </div>
                    ))
                }
          </div>
            <div className={styles.coinAdd}>
                <div className={styles.leftSide}>
                    <div className={styles.coinBtn}>
                        <p>+</p>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <p className={styles.price}>ADD COIN</p>
                </div>
            </div>
        </div>
    )
}