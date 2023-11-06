import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ContactCard from '../components/ContactCard'

function Home() {
    const [contacts,setContacts]=useState([])
    const fetchData= async ()=>{
        const result=await axios.get('/db.json')
        setContacts(result.data.contacts)
        console.log(contacts);
    }
useEffect(()=>{
fetchData()
},[])

    return (
        <div>
            <h1 className='text-center mt-5'>Your Contact List</h1>

            <Row className='justify-content-center'>
                {
                    contacts.map(i=>(
                        <Col className='p-2 m-3' lg={3} md={4} sm={5}>
                        <ContactCard item={i}></ContactCard>
                        </Col>
                       
                    ))
                }
            </Row>

        </div>
    )
}

export default Home