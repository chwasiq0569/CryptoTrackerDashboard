import styles from './CryptoList.module.css';
import Image from 'next/image';

// const Icon = require('../../../assets/bitcoin_PNG48.png);

export default function CryptoList({ currencyList }){
    console.log("CURRENCY LIST: ", currencyList)
    return (
        <div className={styles.outerContainer}>
          <div className={styles.currencyListContainer}>
                {
                    currencyList.map(coin => (
                        <div className={styles.individualCurrency}>
                        <div className={styles.leftSide}>
                            <div className={styles.iconContainer}>
                                <img src={coin?.image} alt={coin.name} width="100%" height="100%" />
                            </div>
                            <p className={styles.currencyName}>
                                 {coin.symbol}
                            </p>  
                        </div>
                        <div className={styles.rightSide}>
                            <p className={styles.price}>${coin.current_price}</p>
                            {
                                coin.price_change_percentage_24h < 0 ? <p className={styles.percentageRed}>{coin.price_change_percentage_24h.toFixed(2)}%</p> : <p className={styles.percentageGreen}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                            }
                        </div>
                    </div>
                    ))
                }
        
            {/* <div className={styles.individualCurrency}>
                <div className={styles.leftSide}>
                    <div className={styles.iconContainer}>
                        <Image src="/bitcoin_PNG48.png" alt="me" width="100%" height="100%" />
                    </div>
                    <p className={styles.currencyName}>
                         BTC
                    </p>  
                </div>
                <div className={styles.rightSide}>
                    <p className={styles.price}>$287.09</p>
                    <p className={styles.percentage}>3.44%</p>
                </div>
            </div>
            <div className={styles.individualCurrency}>
                <div className={styles.leftSide}>
                    <div className={styles.iconContainer}>
                        <Image src="/bitcoin_PNG48.png" alt="me" width="100%" height="100%" />
                    </div>
                    <p className={styles.currencyName}>
                         BTC
                    </p>  
                </div>
                <div className={styles.rightSide}>
                    <p className={styles.price}>$287.09</p>
                    <p className={styles.percentage}>3.44%</p>
                </div>
            </div>
            <div className={styles.individualCurrency}>
                <div className={styles.leftSide}>
                    <div className={styles.iconContainer}>
                        <Image src="/bitcoin_PNG48.png" alt="me" width="100%" height="100%" />
                    </div>
                    <p className={styles.currencyName}>
                         BTC
                    </p>  
                </div>
                <div className={styles.rightSide}>
                    <p className={styles.price}>$287.09</p>
                    <p className={styles.percentage}>3.44%</p>
                </div>
            </div>
            <div className={styles.individualCurrency}>
                <div className={styles.leftSide}>
                    <div className={styles.iconContainer}>
                        <Image src="/bitcoin_PNG48.png" alt="me" width="100%" height="100%" />
                    </div>
                    <p className={styles.currencyName}>
                         BTC
                    </p>  
                </div>
                <div className={styles.rightSide}>
                    <p className={styles.price}>$287.09</p>
                    <p className={styles.percentage}>3.44%</p>
                </div>
            </div>
            <div className={styles.individualCurrency}>
                <div className={styles.leftSide}>
                    <div className={styles.iconContainer}>
                        <Image src="/bitcoin_PNG48.png" alt="me" width="100%" height="100%" />
                    </div>
                    <p className={styles.currencyName}>
                         BTC
                    </p>  
                </div>
                <div className={styles.rightSide}>
                    <p className={styles.price}>$287.09</p>
                    <p className={styles.percentage}>3.44%</p>
                </div>
            </div>
            <div className={styles.individualCurrency}>
                <div className={styles.leftSide}>
                    <div className={styles.iconContainer}>
                        <Image src="/bitcoin_PNG48.png" alt="me" width="100%" height="100%" />
                    </div>
                    <p className={styles.currencyName}>
                         BTC
                    </p>  
                </div>
                <div className={styles.rightSide}>
                    <p className={styles.price}>$287.09</p>
                    <p className={styles.percentage}>3.44%</p>
                </div>
            </div>
            <div className={styles.individualCurrency}>
                <div className={styles.leftSide}>
                    <div className={styles.iconContainer}>
                        <Image src="/bitcoin_PNG48.png" alt="me" width="100%" height="100%" />
                    </div>
                    <p className={styles.currencyName}>
                         BTC
                    </p>  
                </div>
                <div className={styles.rightSide}>
                    <p className={styles.price}>$287.09</p>
                    <p className={styles.percentage}>3.44%</p>
                </div>
            </div>
            <div className={styles.individualCurrency}>
                <div className={styles.leftSide}>
                    <div className={styles.iconContainer}>
                        <Image src="/bitcoin_PNG48.png" alt="me" width="100%" height="100%" />
                    </div>
                    <p className={styles.currencyName}>
                         BTC
                    </p>  
                </div>
                <div className={styles.rightSide}>
                    <p className={styles.price}>$287.09</p>
                    <p className={styles.percentage}>3.44%</p>
                </div>
            </div>
            <div className={styles.individualCurrency}>
                <div className={styles.leftSide}>
                    <div className={styles.iconContainer}>
                        <Image src="/bitcoin_PNG48.png" alt="me" width="100%" height="100%" />
                    </div>
                    <p className={styles.currencyName}>
                         BTC
                    </p>  
                </div>
                <div className={styles.rightSide}>
                    <p className={styles.price}>$287.09</p>
                    <p className={styles.percentage}>3.44%</p>
                </div>
            </div>
            <div className={styles.individualCurrency}>
                <div className={styles.leftSide}>
                    <div className={styles.iconContainer}>
                        <Image src="/bitcoin_PNG48.png" alt="me" width="100%" height="100%" />
                    </div>
                    <p className={styles.currencyName}>
                         BTC
                    </p>  
                </div>
                <div className={styles.rightSide}>
                    <p className={styles.price}>$287.09</p>
                    <p className={styles.percentage}>3.44%</p>
                </div>
            </div> */}
          </div>
            <div className={styles.individualCurrency}>
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