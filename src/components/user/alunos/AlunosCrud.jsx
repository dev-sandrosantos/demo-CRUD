import React from 'react'
import Main from '../../template/Main'
import axios from 'axios'
import AlunosForm from './AlunosForm'
import AlunosTable from './AlunosTable'
import { format } from 'date-fns'

import { NotificationManager } from 'react-notifications'



const headerProps = {
    icon: 'users',
    title: 'Alunos',
    subtitle:
        'Alunos.: Incluir, Listar, Alterar, Excluir'
}

const baseUrl = "http://localhost:3001/users"
const today = format(Date.now(), 'dd/MM/yyyy')
const initialState = {
    user: {
        matricula: '', name: '', nascimento: '', endereco: '',
        serie: '', turma: '', filiacao1: "", filiacao2: '',
        mais: '', turno: "", dcadastro: today
    },
    list: []
}

export default class UserCrud extends React.Component {
    
    constructor() {
        super()

        this.state = { ...initialState }

        this.clear = this.clear.bind(this)
        this.save = this.save.bind(this)
        this.getUpdatedList = this.getUpdatedList.bind(this)
        this.updateField = this.updateField.bind(this)
        this.load = this.load.bind(this)
        this.remove = this.remove.bind(this)
        this.handleEnterPress = this.handleEnterPress.bind(this)}

    async componentDidMount(){
        await axios.get(baseUrl).then(response => {
            this.setState({ list: response.data})
        })
    }
    handleEnterPress(event) {
        if (event.key === 'Enter') {
            this.save()
        }
    }
    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        if (user.name === "" || user.matricula === "" || user.nascimento === ""|| 
            user.endereco === "" || user.serie === "" || user.turma === "" || user.filiacao2 === "") {
            NotificationManager.warning('Dados não preenchido', 'Preencha os campos')
        } else {
            axios[method](url, user).then(response => {
                    const list = this.getUpdatedList(response.data)
                    this.setState({ user: initialState.user, list })
                    if (method === 'post')
                        NotificationManager.success('Usuário criado com sucesso', 'Criar Usuário')
                    else
                        NotificationManager.success('Usuário alterado com sucesso', 'Editar Usuário')
                })
        }
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) 
            list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    load(user){this.setState({user})}

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`)
            .then(response => {
                const list = this.getUpdatedList(user, false)
                this.setState({ list })
                NotificationManager.success('Usuário excluído com sucesso', 'Excluir Usuário')
            })
    }
    
    render() {
        return (
            <Main {...headerProps}>
                <AlunosForm 
                    name={this.state.user.name}
                    nascimento={this.state.user.nascimento}
                    matricula={this.state.user.matricula}
                    endereco={this.state.user.endereco}
                    serie={this.state.user.serie}
                    turma={this.state.user.turma}
                    turno={this.state.user.turno}
                    filiacao1={this.state.user.filiacao1}
                    filiacao2={this.state.user.filiacao2}
                    mais={this.state.user.mais}
                    clear={this.clear}
                    save={this.save}
                    updateField={this.updateField}
                    handleEnterPress={this.handleEnterPress} />
                <AlunosTable list={this.state.list}
                load={this.load}
                remove={this.remove} />
            </Main>
        )
    }
}