import Main from '../template/Main'
import React from 'react'

export default props =>
<Main 
    icon="home"
    title="Inicio"
    subtitle="Em desenvolvimento...">
    <div className="display-4">Bem Vindo!</div>
    <hr/>
    <p className="mb-0">
        Sistema para exemplificar Construção de um cadastro desenvolvido em React.
    </p>
        <table className="table mt-4">
            <thead>
                <tr>
                    <th><a href="/turma">Ano / Turmas</a></th>
                    {/* <th>Materias</th>
                    <th>Professores</th>
                    <th>Avaliações</th> */}
                </tr>
            </thead>
        </table>
</Main>