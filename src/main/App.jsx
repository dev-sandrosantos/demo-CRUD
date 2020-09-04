import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {BrowserRouter} from 'react-router-dom'
import { NotificationContainer} from 'react-notifications'

import Routers from '../main/Routers'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from  '../components/template/Footer'

export default props =>
<BrowserRouter>
    <div className="app">
        <Logo/>
        <Nav/>
        <Routers/>
        <NotificationContainer />
        <Footer/>
    </div>
</BrowserRouter>