import React, { useContext } from 'react'
import { Revert } from '../Ui/Cart/Cart'
import { Container, Row } from 'react-bootstrap'

function TrushContact() {

  return (
    <Container >

      <Row className='d-flex gap-1 p-1'>
        <Revert />
      </Row>
    </Container >
  )
}

export default TrushContact