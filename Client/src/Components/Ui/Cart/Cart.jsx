import React, { useContext } from 'react'
import { Col, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import female from '../../../assets/femaleuser.png'
import male from '../../../assets/maleuser.png'
import ContextState from '../../Context/ContextState'


export function CartUser() {
    const userhandler = useContext(ContextState)
    return (
        <>
            {userhandler.Data.map(item =>
                <Col key={item.id} sm='3' className='hw-cart rounded-3 bg-header p-3 my-1 ff-cart border-cart'>
                    <div className='d-flex align-items-center gap-2 border-bottom pb-2 ff-cart'>
                        <img className="hw-cart-img rounded-circle" src={item.gender === 'woman' ? female : male} alt="" />
                        <div className='d-flex flex-column g-1'>
                            <span> <span className='text-muted me-1'>FirstName :</span>{item.fullname}</span>
                            <span> <span className='text-muted me-1'>UserName :</span>{item.username}</span>
                            <span> <span className='text-muted me-1'>Age :</span>{item.age}</span>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex flex-column gap-2 py-2 border-bottom'>
                            <span> <span className='text-muted me-1'>Gender :</span>{item.gender}</span>
                            <span> <span className='text-muted me-1'>PhoneNumber :</span>{item.phonenumber}</span>
                            <span> <span className='text-muted me-1'>Email : </span>{item.email}</span>
                            <span> <span className='text-muted me-1'>Telephone Numebr : </span>{item.telephonumber}</span>
                        </div>
                    </div>
                    <div className='fs-5 d-flex justify-content-evenly gap-1 bg-dark rounded-2 p-1 my-1 fs-icons'>
                        <span className='text-danger d-flex flex-column align-items-center'>
                            <i className="ri-instagram-line"></i> <span> {item.telegram_id}</span>
                        </span>
                        <span className=' text-info d-flex flex-column align-items-center'>
                            <i className="ri-telegram-line"></i>
                            <span> {item.instagram_id}</span>
                        </span>
                        <span className='text-facebook d-flex flex-column align-items-center'>
                            <i className="ri-facebook-circle-fill"></i>
                            <span> {item.facebook_id}</span>
                        </span>
                    </div>
                    <ButtonGroup className='w-100 mt-2'>
                        <Link to={`/panel/:${item.id}`} className='btn bg-btn fs-6'>Edit</Link>
                        <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                    </ButtonGroup>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content bg-dark">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Are you sure you want to delete?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { userhandler.removeHandler(item.id) }} >Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            )
            }
        </>
    )
}


// Reback Cart to panel 

export function Revert() {
    const trushHandler = useContext(ContextState)
    return (
        <>
            {
                trushHandler.Trush.map(item =>
                    <Col key={item.id} sm='3' className='hw-cart rounded-3 bg-header p-3 my-1 ff-cart border-cart'>
                        <div className='d-flex align-items-center gap-2 border-bottom pb-2 ff-cart'>
                            <img className="hw-cart-img rounded-circle" src={item.gender === 'woman' ? female : male} alt="" />
                            <div className='d-flex flex-column g-1'>
                                <span> <span className='text-muted me-1'>FirstName :</span>{item.fullname}</span>
                                <span> <span className='text-muted me-1'>UserName :</span>{item.username}</span>
                                <span> <span className='text-muted me-1'>Age :</span>{item.age}</span>
                            </div>
                        </div>
                        <div>
                            <div className='d-flex flex-column gap-2 py-2 border-bottom'>
                                <span> <span className='text-muted me-1'>Gender :</span>{item.gender}</span>
                                <span> <span className='text-muted me-1'>PhoneNumber :</span>{item.phonenumber}</span>
                                <span> <span className='text-muted me-1'>Email : </span>{item.email}</span>
                                <span> <span className='text-muted me-1'>Telephone Numebr : </span>{item.telephonumber}</span>
                            </div>
                        </div>
                        <div className='fs-5 d-flex justify-content-evenly gap-1 bg-dark rounded-2 p-1 my-1 fs-icons'>
                            <span className='text-danger d-flex flex-column align-items-center'>
                                <i className="ri-instagram-line"></i> <span> {item.telegram_id}</span>
                            </span>
                            <span className=' text-info d-flex flex-column align-items-center'>
                                <i className="ri-telegram-line"></i>
                                <span> {item.instagram_id}</span>
                            </span>
                            <span className='text-facebook d-flex flex-column align-items-center'>
                                <i className="ri-facebook-circle-fill"></i>
                                <span> {item.facebook_id}</span>
                            </span>
                        </div>
                        <ButtonGroup className='w-100 mt-1'>
                            <Link className='btn w-50 bg-btn fs-6'>Revert Cart</Link>
                            <Link className='btn w-50 btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</Link>
                        </ButtonGroup>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content bg-dark">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Are you sure you want to delete?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { trushHandler.DeleteTrush(item.id) }} >Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                )
            }
        </>


    )
}
