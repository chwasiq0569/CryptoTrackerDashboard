import styles from './CurrencyInfo.module.css';
import Image from 'next/image';

export default function CryptoList(){
    return(
        <div className={styles.currencyInfo__Wrapper}>
                <div className={styles.CurrencyInfo}>
                        <div className={styles.CurrencyInfo__leftSide}>
                                BTC
                        </div>
                        <div className={styles.CurrencyInfo__rightSide}>
                                <div className={styles.imageContainer}>
                                    <Image src="/bitcoin_PNG48.png" alt="me" width="100%" height="100%" />
                                </div>
                        </div>
                </div>
                <div className={styles.infoGrid}>
                    <div className={styles.infoGrid_row}>
                        <div className={styles.gridBox}>
                            <p className={styles.gridBoxHead}>MARKET VALUE</p>
                            <p className={styles.gridBoxSecondary}>$131.16</p>
                        </div>
                        <div className={styles.gridBox}>
                            <p className={styles.gridBoxHead}>HOLDINGS</p>
                            <p className={styles.gridBoxSecondary}>$131.16</p>
                        </div>
                    </div>
                    <div className={styles.infoGrid_row}>
                        <div className={styles.gridBox}>
                            <p className={styles.gridBoxHead}>MARKET VALUE</p>
                            <p className={styles.gridBoxSecondary}>$131.16</p>
                        </div>
                        <div className={styles.gridBox}>
                            <p className={styles.gridBoxHead}>HOLDINGS</p>
                            <p className={styles.gridBoxSecondary}>$131.16</p>
                        </div>
                    </div>
                    <div className={styles.infoGrid_row}>
                        <div className={styles.gridBox}>
                            <p className={styles.gridBoxHead}>MARKET VALUE</p>
                            <p className={styles.gridBoxSecondary}>$131.16</p>
                        </div>
                        <div className={styles.gridBox}>
                            <p className={styles.gridBoxHead}>HOLDINGS</p>
                            <p className={styles.gridBoxSecondary}>$131.16</p>
                        </div>
                    </div>
                </div>

        </div>
    )
}