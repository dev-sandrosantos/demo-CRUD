import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import AnoTurmaCrud from '../components/user/turmas/AnoTurmaCrud'

import Home from '../components/home/Home'
import AlunosCrud from '../components/user/alunos/AlunosCrud'
import ProfsCrud from '../components/user/profs/ProfsCrud'

export default props =>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/aluno' component={AlunosCrud}/>
        <Route path='/prof' component={ProfsCrud}/>
        <Route path='/turma' component={AnoTurmaCrud}/>
        <Redirect from='*' to='/'/>
    </Switch>
 
