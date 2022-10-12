import React from 'react'
import './Header.css'
import amazonLogo from './../assets/amazon.png'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='navbar'>
        <img src={amazonLogo} alt='amazon' />
        <div className='search-bar'>
            <input type="text" />
            <SearchIcon className="search" style={{color: '#fff', background: 'yellow'}} />
        </div>
    </div>
  )
}

export default Header