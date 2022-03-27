import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from './Header'
import Tponavbottom from './Tponavbottom'

export const TpoStudentdetails = () => {

    const [stddetails, setstddetails] = useState([])
    let i=1;
    async function getdetails() {
        const res = await axios.get("/getstudentstpo")
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
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Branch</th>
                        <th scope="col">CGPA</th>
                        <th scope="col">Resume</th>
                    </tr>
                </thead>
                <tbody>
                    {stddetails.map((std) => (
                        <tr>
                            <th scope="row">{i++}</th>
                            <td>{std.name}</td>
                            <td>{std.email}</td>
                            <td>{std.email}</td>
                            <td>{std.cgpa}</td>
                            <td><button className='btn btn-primary' onClick={() => window.open(`../../Photos/Files/sresume/${std.resumename}`)}>View Resume</button></td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
