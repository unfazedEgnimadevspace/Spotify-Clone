import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search'
import { Avatar } from '@mui/material';
import { useDataValueLayer } from '../ContextApi/DataLayer';
import { useEffect } from 'react';
const Header = ({spotify}) => {
    const [{user}, dispatch] = useDataValueLayer();
  return (
    <div className='header'>
      <div className='header__left'>
        <SearchIcon />
        <input type="text" placeholder='Search for artist, songs, podcasts' />
      </div>

      <div className='header__right'>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
         <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header