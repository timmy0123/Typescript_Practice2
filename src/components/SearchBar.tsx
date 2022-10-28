import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';


const SearchBar = () =>{
    const [searchTerm,setsearchTerm] = useState<string>('')
    const navigate = useNavigate()
    const handlesubmit =(e:React.FormEvent) =>{
        e.preventDefault();
        if(searchTerm){
            navigate(`/search/${searchTerm}`)
            setsearchTerm('')
        }
    }
    return(
        <Paper
        component="form"
        onSubmit={(e) => handlesubmit(e)}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl:2,
            boxShadow: 'none',
            mr: {sm: 5}
        }}
    >
        <input className='search-bar' placeholder='Search...' value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)} />
        <IconButton type='submit' sx={{
            p:'10px', color: 'red'
        }}>
            <Search />
        </IconButton>
    </Paper>
)}

export default SearchBar