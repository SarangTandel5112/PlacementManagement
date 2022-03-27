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
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Job Title</th>
                        <th scope="col">CTC</th>
                        <th scope="col">Company Name</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {stddetails.map((std) => (
                        <tr>
                            <th scope="row">{i++}</th>
                            <td>{std.studentName}</td>
                            <td>{std.jobtitle}</td>
                            <td>{std.ctc}</td>
                            <td>{std.companyname}</td>
                            
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
