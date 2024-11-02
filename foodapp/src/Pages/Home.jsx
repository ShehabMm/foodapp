import React from 'react'
import Nav from '../Components/Nav';
import Search from '../Components/Search';
import Foodlist from '../Components/Foodlist';
import { useState } from 'react';


function Home() {
    const [fooddata, setfooddata] = useState([])
    return (
        <div>

            <Nav />
            <Search fooddata={fooddata} setfooddata={setfooddata} />
            <Foodlist fooddata={fooddata} />


        </div>
    )
}

export default Home