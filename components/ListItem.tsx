import React from 'react'
import Link from 'next/link'

import { Crypto } from '../interfaces'

type Props = {
  data: Crypto
}

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
