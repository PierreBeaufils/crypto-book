import * as React from 'react'
import Image from 'next/image'
import ListItem from './ListItem'
import { Crypto } from '../interfaces'

type Props = {
  items: Crypto[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
