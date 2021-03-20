import React from 'react'
import styles from '../styles/search.module.scss'

type Props = {
    setFilter: any
}

const SearchInput = ({ setFilter }: Props) => {
    const handleSearch = (e: any) => {
        const value = e.target.value || undefined;
        setFilter('name', value);
    }
    
    return (
        <div className={styles.search}>
            <label htmlFor="search">
            <input
                name="search"
                placeholder="Type a crypto ..."
                onChange={handleSearch}
                />
            <span onClick={handleSearch}>
                &#128270;
            </span>
            
            </label>
        </div>
    )
}

export default SearchInput

