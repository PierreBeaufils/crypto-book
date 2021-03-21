import * as React from 'react'
import styles from '../styles/list.module.scss'

type CurrencyItemProps = {
  item: any
}

const CurrencyItem = ({ item }: CurrencyItemProps) => (
  <div className={styles.currencyItem}>
    <h2>{item.name}</h2>
    <p>Currency: {item.currency}</p>
    <p>status: {item.status}</p>
    <p>Price: ${parseFloat(item.price).toFixed(2)}</p>
    <p>market Cap: {new Intl.NumberFormat().format(item.market_cap)}</p>
  </div>
)

export default CurrencyItem
