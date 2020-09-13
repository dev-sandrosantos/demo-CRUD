import React from 'react'
import axios from 'axios'
import Main from '../../template/Main'

const headerProps = {
    icon: 'university',
    title: ' Ano e Turma',
    subtitle:
        'Ano e Turma'
}

const baseUrl = "http://localhost:3001/users"
const initialState = {
    user: {serie: ''},
    list: []
}

export default class AnoTurmaCrud extends React.Component{

    constructor(){
        super()
        this.state = {...initialState}
        this.updateField = this.updateField.bind(this)
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

        updateField(event) {
            const user = { ...this.state.user }
            user[event.target.name] = event.target.value
            this.setState({ user })
        }

        renderForm(){
            return(
                <div className="form">
                    <div className="row">
                        <div className="col-1 col-md-4">
                            <div className="form-group">
                                <label>Ano</label>
                                <select type="text" className="form-control"
                                    name="serie" 
                                    value={this.state.user.serie}
                                    onKeyPress={this.handleEnterPress}
                                    onChange={e => this.updateField(e)}>
                                    <option value="">Selecionar</option>
                                    <option value="1° Ano Fundamental">1° Ano Fundamental</option>
                                    <option value="2° Ano Fundamental">2° Ano Fundamental</option>
                                    <option value="3° Ano Fundamental">3° Ano Fundamental</option>
                                    <option value="4° Ano Fundamental">4° Ano Fundamental</option>
                                    <option value="5° Ano Fundamental">5° Ano Fundamental</option>
                                    <option value="6° Ano Fundamental">6° Ano Fundamental</option>
                                    <option value="7° Ano Fundamental">7° Ano Fundamental</option>
                                    <option value="8° Ano Fundamental">8° Ano Fundamental</option>
                                    <option value="9° Ano Fundamental">9° Ano Fundamental</option>
                                    <option value="1° Ano Ensino Médio">1° Ano Ensino Médio</option>
                                    <option value="2° Ano Ensino Médio">2° Ano Ensino Médio</option>
                                    <option value="3° Ano Ensino Médio">3° Ano Ensino Médio</option>
                                    </select>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        renderTable(){
            return(
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>Matricula</th>
                            <th>Aluno</th>
                            <th>Serie</th>
                            <th>Turma</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            )
        }

        renderRows(){
            const mylist = this.state.list
            const ano = this.state.user.serie
        return mylist.filter(a => a.serie === ano).map(u => {
            return (<tr key={u.id}>
                <td>{u.matricula}</td>
                <td>{u.name}</td>
                <td>{u.serie}</td>
                <td>{u.turma}</td>
            </tr>)})
        }
    render(){
        console.log(this.mylist)
        return(
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}

