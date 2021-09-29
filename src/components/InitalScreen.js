import React, { useContext } from 'react'
import { SearchContext } from '../helpers/context/SearchContext'
import Cards from './hero/Cards'
import Footer from './hero/Footer'
import Navbar from './nav/Navbar'

const InitalScreen = () => {
    // const {search} = useContext(SearchContext);
    return (
        <div>
            <Navbar/>
            <Cards/>
            
            <Footer/>
        </div>
    )
}

export default InitalScreen
