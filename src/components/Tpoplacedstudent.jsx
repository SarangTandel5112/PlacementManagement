import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from './Header'
import Tponavbottom from './Tponavbottom'

export default function Tpoplacedstudent() {

    const [stddetails, setstddetails] = useState([])
    let i=1;
    async function getdetails() {
        const res = await axios.get("/getjobofferedtpo")
        setstddetails(res.data)        
    }

    useEffect(() => {
        getdetails();
    }, [])


    return (
        <div>
            <Header path="/tpo" />
            <Tponavbottom />
        </div>
    )
}
