import React from 'react';
import styles from './Search.module.css';
import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg';

const Search = () => {
  return (
    <div>
        <form className={styles.wrapper}> 
            <input type="text" className={styles.search}/>
            <div>
                <button  className={styles.searchBtn} type='submit'>
                  <SearchIcon/>
                </button>
            </div>
        </form>
    </div>
  )
}

export default Search