import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import logo from '../../../assets/logo.png'
import user from '../../../assets/01.jpg'

function Header() {
    const [popup, setpopup] = useState(false)

    return (
        <header className='bg-header py-2'>
            <Container>
                <Row className='border-bottom'>
                    <Col className='d-flex justify-content-center align-items-center gap-2'>
                        <Link className='btn bg-btn d-flex align-items-center gap-1' to={'panel'}>Dashbord <i className="ri-dashboard-fill"></i></Link>
                        <Link className='btn bg-btn d-flex align-items-center gap-1' to={'adduser'}>AddContect <i className="ri-user-add-line"></i></Link>
                    </Col>
                    <Col sm='3' className='d-flex flex-column align-items-center'>
                        <img src={logo} className='hw-logo' alt="" /><span className='ff-logo fs-6 mx-2 fw-bold'>Telephone Book</span>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center position-relative w-100'>
                        <button className='btn d-flex justify-content-center align-items-center px-3 gap-2' onClick={() => setpopup(!popup)}>
                            <img src={user} className='hw-user rounded-2 me-2' alt="" /><span className='fs-6 text-light'>alirg</span><i className="ri-arrow-down-s-line text-light mt-1"></i>
                        </button>
                        {
                            popup ? <div className='bg-dark p-2 rounded-bottom d-flex flex-column justify-content-center align-items-center gap-2 position-absolute top-100 w-popup'>
                                <Link onClick={() => setpopup(false)} className='text-decoration-none d-flex align-items-center gap-1 btn-dark w-100 justify-content-center p-2 rounded-2' to={'/trush'}>Trush<i className="ri-delete-bin-2-line"></i></Link>
                                <button className='btn btn-danger fs-popup w-100'>Logout<i className="ri-logout-circle-r-line"></i></button>
                            </div> : null
                        }

                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header