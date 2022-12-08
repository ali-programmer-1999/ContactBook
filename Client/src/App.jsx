import React, { useState, useEffect } from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import ContextState from './Components/Context/ContextState'
import axios from 'axios'
// component Page
import Panel from './Components/Page/Panel'
import AddUser from './Components/Page/AddUser'
import Header from './Components/Ui/Headar/Header'
import EditContact from './Components/Page/EditContact'
import TrushContact from './Components/Page/TrushContact'
import { ToastContainer, toast } from 'react-toastify';


const initfilter = {
  name: '',
  number: '',
  username: '',
  email: '',
}

function App() {
  const [Data, setData] = useState([])
  const [Trush, setTrush] = useState([])
  // filter input state
  const [filterData, setfilterData] = useState(initfilter)


  // get data from db
  const loadData = async () => {
    const respones = await axios.get('http://localhost:5000/api/get')
    setData(respones.data)
  }

  // trush page handler get data form db
  const loadDataTrush = async () => {
    const respones = await axios.get('http://localhost:5000/api/trush')
    setTrush(respones.data)
  }

  // remove handler
  const removeHandler = (id) => {
    const newtrush = Data.filter(item => item.id === id)
    const { fullname, email, username, telephonumber, age, gender, phonenumber, telegram_id, instagram_id, facebook_id } = newtrush[0]
    axios.post('http://localhost:5000/api/trush/post', { fullname, email, username, telephonumber, age, gender, phonenumber, telegram_id, instagram_id, facebook_id }).catch((err) => toast.error(`Save data field : ${err}`))
    const newData = Data.filter(item => item.id !== id)
    setData(newData)
    axios.delete(`http://localhost:5000/api/remove/${id}`)
    toast.success(`Remove and send to Trush`)
  }

  // delete from trush
  const DeleteTrush = (id) => {
    axios.delete(`http://localhost:5000/api/trushremove/${id}`)
    toast.success(`Remove from Trush`)
  }

  useEffect(() => {
    loadData()
    loadDataTrush()
    const namefilter = Data.filter(item => item.fullname === filterData.name)
    const numberfilter = Data.filter(item => item.phonenumber === filterData.number)
    const userfilter = Data.filter(item => item.username === filterData.username)
    const emailfilter = Data.filter(item => item.email === filterData.email)
    setData(namefilter)
  }, [])

  console.log(Data)

  return (
    <div className="App">
      <ContextState.Provider value={{ Data, Trush, removeHandler, DeleteTrush, filterData, setfilterData }}>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to={'/panel'} />} />
          <Route path='/panel' element={<Panel />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='/trush' element={<TrushContact />} />
          <Route path='/panel/:id' element={<EditContact />} />
        </Routes>
      </ContextState.Provider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="light"
      />
    </div>
  )
}

export default App
