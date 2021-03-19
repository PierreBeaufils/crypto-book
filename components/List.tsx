import * as React from 'react'
import Image from 'next/image'
import { useTable, useSortBy, useFilters } from 'react-table';
import ListItem from './ListItem'
import { Crypto } from '../interfaces'
import styles from '../styles/list.module.scss'

type Props = {
  data: Crypto[]
}

const List = ({ data }: Props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Rank',
        accessor: 'rank', // accessor is the "key" in the data
      },
      {
        Header: 'Name',
        Cell: ({ row }) => (
          <div className={styles.name}>
            <span>
              <Image
                src={row.original.logo_url}
                alt="logo"
                width={20}
                height={20}
                onClick={()=>console.log(row)}
                />
              </span>
            <div>
              <h4>{row.original.name}</h4>
              <p>{row.original.currency}</p>
            </div>
          </div>
        ),
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Market Cap',
        accessor: 'market_cap',
      },
      {
        Header: 'Volume (24h)',
        accessor: '1d.volume',
      },
      {
        Header: 'Circulating Supply',
        accessor: 'circulating_supply',
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
    <table {...getTableProps()} className={styles.cryptoList}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={styles.tableHeader}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr className={styles.cryptoItem} {...row.getRowProps()} >
                {row.cells.map((cell) => (
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
  )
}

export default List
