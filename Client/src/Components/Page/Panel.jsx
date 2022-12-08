import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import Search from '../Ui/Search/Search'
import { CartUser } from '../Ui/Cart/Cart'
import ContextState from '../Context/ContextState'

function Panel() {
    const userData = useContext(ContextState)
    return (
        <Container className='d-flex justify-content-center flex-column w-100'>
            {/* search box  */}
            <Row>
                <Search />
            </Row>

            {/* Cart section  */}
            <Row className='d-flex gap-1 p-1'>
                {
                    userData.Data === null ? <h1>place crate contact</h1> : <CartUser />
                }
            </Row>
        </Container>
    )
}

export default Panel