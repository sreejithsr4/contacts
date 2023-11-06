import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

function Singleview() {
    const [allData,setallData]=useState([])
    const {mobile}=useParams()
    const fetchallData = async ()=>{
        const result=await axios.get('/db.json')
        setallData(result.data.contacts)
    }
    useEffect(()=>{
        fetchallData()

    },[])
    const singleData=allData.find(i=>i.mobile==mobile)

    console.log(singleData);

  return (
    <div> 

        {singleData&&
        <Row className='p-5'>
            <Col>
           <div> <img style={{height:'400px', width:'100%'}} src={singleData.profile} alt="" /></div>
            </Col>
            <Col>
            <h1>{singleData.name}</h1>
            <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action href="#link1">
        <strong>Email </strong>: {singleData.email}
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" >
        <strong>Mobile :</strong> {singleData.mobile}
      </ListGroup.Item>
      <ListGroup.Item >
        <strong>Location :</strong>{singleData.location}
      </ListGroup.Item>
    </ListGroup>
            </Col>

        </Row>

        }
    </div>
  )
}

export default Singleview