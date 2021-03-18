import styles from './CryptoList.module.css';
import Image from 'next/image';

// const Icon = require('../../../assets/bitcoin_PNG48.png);

export default function CryptoList(){
    return (
        <div className={styles.outerContainer}>
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