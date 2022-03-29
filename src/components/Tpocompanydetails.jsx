import React from 'react'
import Header from './Header'
import Tponavbottom from './Tponavbottom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const Tpocompanydetails = () => {
    const [stddetails, setstddetails] = useState([])
    let i=1;
    async function getdetails() {
        const res = await axios.get("/getcompaniestpo")
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
                        <th scope="col">Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">CEO</th>
                        <th scope="col">HR</th>
                    </tr>
                </thead>
                <tbody>
                    {stddetails.map((std) => (
                        <tr>
                            <th scope="row">{i++}</th>
                            <td>{std.name}</td>
                            <td>{std.email}</td>
                            <td>{std.number}</td>
                            <td>{std.address}</td>
                            <td>{std.ceo}</td>
                            <td>{std.hr}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
