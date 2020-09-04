import React from 'react'

export default props =>{

    const list = props.list

    return (
        <table className="table mt-04">
            <thead>
                <tr>
                    <th>Matricula</th>
                    <th>Nome</th>
                    <th>Serie</th>
                    <th>Turma</th>
                    <th>Turno</th>
                    <th>Acões</th>
                </tr>
            </thead>
            <tbody>
                {list.map(user => {
                    return(
                        <tr key={user.id}>
                        <td>{user.matricula}</td>
                        <td>{user.name}</td>
                        <td>{user.serie}</td>
                        <td>{user.turma}</td>
                        <td>{user.turno}</td>
                        <td>
                        <button className="btn btn-warning ml-2 mb-1"
                            onClick={e => props.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2 mb-1"
                            onClick={e => props.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                        </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}