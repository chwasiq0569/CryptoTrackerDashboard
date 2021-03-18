import styles from './CryptoList.module.css'

export default function CryptoList(){
    return (
        <div className={styles.outerContainer}>
            <div className={styles.individualCurrency}>
                <div className={styles.leftSide}>
                    <div className={styles.iconContainer}>

                    </div>
                    <div className={styles.currencyName}>
                         BTC
                    </div>  
                </div>
                <div className={styles.rightSide}>
                    <p className={styles.price}>$287.09</p>
                </div>
            </div>
        </div>
    )
}