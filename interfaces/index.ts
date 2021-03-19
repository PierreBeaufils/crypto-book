// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type Crypto = {
  id: string
  currency: string
  symbol: string
  name: string
  logo_url: string
  status: string
  price: string
  price_date: string
  price_timestamp: string
  circulating_supply: string
  max_supply: string
  market_cap: string
  num_exchanges: string
  num_pairs: string
  num_pairs_unmapped: string
  first_candle: string
  first_trade: string
  first_order_book: string
  rank: string
  rank_delta: string
  high: string
  high_timestamp: string
  "1d": any
  "30d": any
}
