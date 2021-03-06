import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTable, useSortBy, useFilters } from 'react-table';
import { Crypto } from '../interfaces'
import SearchInput from './Search'
import styles from '../styles/list.module.scss'

type Props = {
  data: Crypto[]
}

const List = ({ data }: Props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'RANK',
        accessor: 'rank', // accessor is the "key" in the data
      },
      {
        Header: 'CURRENCY',
        Cell: ({ row }: any) => (
          <div style={{cursor: 'pointer'}}>
            <Link href={`/currency/${row.original.id.toLowerCase()}`}>
              <div className={styles.name}>
                <span>
                  <Image
                    src={row.original.logo_url}
                    alt="logo"
                    width={20}
                    height={20}
                  />
                </span>
                <h4>{row.original.currency}</h4>
              </div>
            </Link>
          </div>
        ),
      },
      {
        Header: 'NAME',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'PRICE',
        Cell: ({ row }: any) => (
          <span >
            ${parseFloat(row.original.price).toFixed(2)}
          </span>
        ),
      },
      {
        Header: '1 DAY CHANGE',
        Cell: ({ row }: any) => {
          const parsedValue = row.original["1d"] ? (parseFloat(row.original["1d"].price_change_pct) * 100) : 0
          return (
            <span style={{color: parsedValue>0 ? 'green' : 'red'}}>
              {parsedValue.toFixed(2)}%
            </span>
          )
        },
      },
      {
        Header: 'MARKET CAP',
        Cell: ({ row }: any) => {
          const formattedRow = row.original.market_cap ? new Intl.NumberFormat().format(row.original.market_cap) : 0
          return formattedRow
        },
      },
      {
        Header: 'VOLUME (24H)',
        Cell: ({ row }: any) => {
          const formattedRow = row.original["1d"] ? new Intl.NumberFormat().format(row.original["1d"].volume) : 0
          return formattedRow
        },
      },
      {
        Header: 'CIRCULATING SUPPLY',
        Cell: ({ row }: any) => {
          const formattedRow = row.original.circulating_supply ? new Intl.NumberFormat().format(row.original.circulating_supply) : 0
          return formattedRow
        },
      },
    ],
    [],
  );

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // this function needs to be called for each row before getting the row props
    setFilter,
  } = useTable({
    columns,
    data,
  }, useFilters, useSortBy);

  return (
    <div className={styles.cryptoContainer}>
      <SearchInput setFilter={setFilter} />
      <table {...getTableProps()} className={styles.cryptoList}>
          <thead>
            {headerGroups.map((headerGroup: any) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={styles.tableHeader}
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? ' ????' : ' ????') : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row: any) => {
              prepareRow(row);
              return (
                <tr className={styles.cryptoItem} {...row.getRowProps()}>
                  {row.cells.map((cell: any) => (
                    <td
                      {...cell.getCellProps()}
                      className={styles.cryptoData}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  )
}

export default List
