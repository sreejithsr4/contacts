import React from 'react'
import { Link } from 'react-router-dom'

function ContactCard({item}) {
  return (
    <div>
<Link to={`view/${item.mobile}`}>
            <div className="card text-white bg-primary mb-3" style={{width:'18rem'}}>
      <div className="card-body">
        <img style={{height:'300px', width:'100%'}} src={item.profile} alt="" />
        <h4 className="card-title">{item.name}</h4>
      </div>
    </div>
</Link>
    </div>
  )
}

export default ContactCard