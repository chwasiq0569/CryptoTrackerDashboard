import styles from './CurrencyInfo.module.css';
import Image from 'next/image';

export default function CryptoList({coin}){
    return(
        <div className={styles.currencyInfo__Wrapper}>
                <div className={styles.CurrencyInfo}>
                        <div className={styles.CurrencyInfo__leftSide}>
                                {coin.name}
                        </div>
                        <div className={styles.CurrencyInfo__rightSide}>
                                <div className={styles.imageContainer}>
                                    <img src={coin.image} alt="me" width="100%" height="100%" />
                                </div>
                        </div>
                </div>
                <div className={styles.infoGrid}>
                    <div className={styles.infoGrid_row}>
                        <div className={styles.gridBox}>
                            <p className={styles.gridBoxHead}>CURRENT PRICE</p>
                            <p className={styles.gridBoxSecondary}>${coin.current_price}</p>
                        </div>
                        <div className={styles.gridBox}>
                            <p className={styles.gridBoxHead}>MARKET CAP</p>
                            <p className={styles.gridBoxSecondary}>${coin.market_cap}</p>
                        </div>
                    </div>
                    <div className={styles.infoGrid_row}>
                        <div className={styles.gridBox}>
                            <p className={styles.gridBoxHead}>ALT</p>
                            <p className={styles.gridBoxSecondary}>{coin.atl}</p>
                        </div>
                        <div className={styles.gridBox}>
                            <p className={styles.gridBoxHead}>ALT CHANGE %</p>
                            <p className={styles.gridBoxSecondary}>{coin.atl_change_percentage}%</p>
                        </div>
                    </div>
                    <div className={styles.infoGrid_row}>
                        <div className={styles.gridBox}>
                            <p className={styles.gridBoxHead}>ATH</p>
                            <p className={styles.gridBoxSecondary}>{coin.ath}</p>
                        </div>
                        <div className={styles.gridBox}>
                            <p className={styles.gridBoxHead}>ATH CHANGE %</p>
                            <p className={styles.gridBoxSecondary}>{coin.ath_change_percentage}%</p>
                        </div>
                    </div>
                </div>

        </div>
    )
}