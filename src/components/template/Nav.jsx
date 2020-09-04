import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
<aside className="menu-area">
    <nav className="menu">
        <Link to="/">Inicio</Link>
        <Link to="/aluno">Cadastra Aluno</Link>
        <Link to="/prof">Cadastra Proferssor</Link>
    </nav>
</aside>