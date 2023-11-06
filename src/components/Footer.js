import React from 'react'
import { Container } from 'react-bootstrap'


function Footer() {
  return (
    <div>
            <footer className="bg-dark text-light">
      <Container className="text-center py-3">
        <p>&copy; {new Date().getFullYear()} Your Contact List</p>
      </Container>
    </footer>
    </div>
  )
}

export default Footer