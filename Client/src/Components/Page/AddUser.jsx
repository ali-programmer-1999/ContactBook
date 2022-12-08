import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap'
import addimg from '../../assets/Addimg.png'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast } from 'react-toastify';


const initialstate = {
  fullname: '',
  username: '',
  email: '',
  phonenumber: 0,
  telephonumber: 0,
  age: 0,
  gender: '',
  telegram_id: '--',
  facebook_id: '--',
  instagram_id: '--'
}

function AddUser() {
  const history = useNavigate()
  const [state, setstate] = useState(initialstate)

  const { fullname, email, username, telephonumber, age, gender, phonenumber, telegram_id, instagram_id, facebook_id } = state

  const stateHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/post', { fullname, email, username, telephonumber, age, gender, phonenumber, telegram_id, instagram_id, facebook_id }).then(() => {
      setstate(initialstate)
    }).catch((err) => toast.error(`Save data field : ${err}`))
    toast.success(`Save data success`)
    setTimeout(() => {
      history('/panel')
    }, 2500);
  }

  return (
    <>
      <Container>
        <Row>

          <Col sm='5' className='d-flex align-items-center'><img src={addimg} className='w-100' alt="" /></Col>
          <Col sm='7' className='d-flex justify-content-center flex-column align-items-center user-select-none'>
            <h2 className='text-center'>Add User</h2>
            <Form className='hw-from bg-header rounded-3 p-3 d-flex flex-column gap-3 ff-cart' onSubmit={stateHandler}>
              <FormGroup className='d-flex justify-content-between align-items-center gap-3'>
                <div className='w-100'>
                  <label>FullName</label>
                  <input onChange={(e) => { setstate({ ...state, fullname: e.target.value }) }} type="text" placeholder='Enter fullName' name='fullname' className='form-control w-100' />
                </div>
                <div className='w-100'>
                  <label>UserName</label>
                  <input onChange={(e) => { setstate({ ...state, username: e.target.value }) }} type="text" placeholder='Enter userName' name='username' className=' form-control w-100' />
                </div>
              </FormGroup>
              <FormGroup>
                <label>Email</label>
                <input onChange={(e) => { setstate({ ...state, email: e.target.value }) }} type="email" placeholder='Enter Email' name='email' className=' form-control' />
              </FormGroup>
              <FormGroup className='d-flex justify-content-between align-items-center gap-3'>
                <div className='w-100'>
                  <label>Phone Number</label>
                  <input onChange={(e) => { setstate({ ...state, phonenumber: e.target.value }) }} type="number" placeholder='Enter Phone Number' name='phonenumber' className=' form-control' />
                </div>
                <div className='w-100'>
                  <label>Telephone Number</label>
                  <input onChange={(e) => { setstate({ ...state, telephonumber: e.target.value }) }} type="number" name='telephonumber' placeholder='Enter Telephone Number' className=' form-control' />
                </div>
              </FormGroup>
              <FormGroup className='d-flex justify-content-evenly my-1 align-items-end gap-3 border-bottom pb-2'>
                <div className='w-25'>
                  <label>Age</label>
                  <input onChange={(e) => { setstate({ ...state, age: e.target.value }) }} name='age' type="number" placeholder='Enter Age' className=' form-control' />
                </div>
                <div className='d-flex justify-content-start my-2 align-items-center gap-3'>
                  <label className='fs-6 text-light'>Gender :</label>
                  <div className="form-check d-flex align-items-center">
                    <input onChange={(e) => { setstate({ ...state, gender: e.target.value }) }} type="radio" className="form-check-input" name="gender" value="woman" />
                    <label className="form-check-label" >Woman</label>
                  </div>
                  <div className="form-check d-flex align-items-center">
                    <input onChange={(e) => { setstate({ ...state, gender: e.target.value }) }} type="radio" className="form-check-input" name="gender" value="man" />
                    <label className="form-check-label" >Man</label>
                  </div>
                  <div className="form-check d-flex align-items-center" >
                    <input onChange={(e) => { setstate({ ...state, gender: e.target.value }) }} type="radio" className="form-check-input" name="gender" value="other" />
                    <label className="form-check-label">Other</label>
                  </div>
                </div>
              </FormGroup>
              <FormGroup className='d-flex gap-2'>
                <div className=' position-relative'>
                  <i className="ri-instagram-fill text-danger position-absolute fs-5 mx-2"></i>
                  <input onChange={(e) => { setstate({ ...state, instagram_id: e.target.value }) }} type="text" placeholder='Instagram ID' name='instagram_id' className=' form-control ps-5' />
                </div>
                <div className=' position-relative'>
                  <i className="ri-telegram-fill text-info position-absolute fs-5 mx-2"></i>
                  <input onChange={(e) => { setstate({ ...state, telegram_id: e.target.value }) }} type="text" placeholder='Telegram ID' name='telegram_id' className=' form-control ps-5' />
                </div>
                <div className=' position-relative'>
                  <i className="ri-facebook-circle-fill text-facebook position-absolute fs-5 mx-2"></i>
                  <input onChange={(e) => { setstate({ ...state, facebook_id: e.target.value }) }} type="text" placeholder='FaceBook ID' name='facebook_id' className=' form-control ps-5' />
                </div>
              </FormGroup>
              <input type='submit' className='btn bg-btn fs-6 fw-bold' value='Send' />
            </Form>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default AddUser