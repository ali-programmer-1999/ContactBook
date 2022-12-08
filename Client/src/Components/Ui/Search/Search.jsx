import React, { useContext } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap'
import ContextState from '../../Context/ContextState'

function Search() {
    const ContaxtFilter = useContext(ContextState)
    return (
        <Container className='bg-header my-2 rounded-2 py-3'>
            <Row>
                <Col>
                    <h2>SearchBox :</h2>
                    <Form className='d-flex justify-content-center gap-2'>
                        <FormGroup className='w-100'>
                            <label className='ms-2'>Search Name</label>
                            <input type="text" className='form-control' onChange={(e) => { ContaxtFilter.setfilterData({ name: e.target.value }) }} placeholder='Search with Name' />
                        </FormGroup>
                        <FormGroup className='w-100'>
                            <label className='ms-2'>Search Numbar</label>
                            <input type="number" className=' form-control' onChange={(e) => { ContaxtFilter.setfilterData({ number: e.target.value }) }} placeholder='Search with Number' />
                        </FormGroup>
                        <FormGroup className='w-100'>
                            <label className='ms-2'>Search UserName</label>
                            <input type="text" className=' form-control' onChange={(e) => { ContaxtFilter.setfilterData({ uesrname: e.target.value }) }} placeholder='Search with UserName' />
                        </FormGroup>
                        <FormGroup className='w-100'>
                            <label className='ms-2'>Search Email</label>
                            <input type="text" className=' form-control' onChange={(e) => { ContaxtFilter.setfilterData({ email: e.target.value }) }} placeholder='Search with Email' />
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Search