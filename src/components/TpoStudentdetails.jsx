import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from './Header'
import Tponavbottom from './Tponavbottom'

export const TpoStudentdetails = () => {

    const [stddetails, setstddetails] = useState([])

    async function getdetails(){
        const data = await axios.get("/")
    }

    useEffect(()=>{
        getdetails();
    },[])

    return (

        <div>
            <Header path="/tpo" />
            <Tponavbottom />
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Branch</th>
                        <th scope="col">CGPA</th>
                        <th scope="col">Resume</th>                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
