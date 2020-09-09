import React from 'react'
import MaskedInput from 'react-maskedinput'

export default props => 

<div className="form">
<div className="row">
    <div className="col-12 col-md-6">
        <div className="form-group">
            <label>Nome do Aluno</label>
            <input type="text" 
                name="name" className="form-control"
                value={props.name}
                autoComplete="off"
                onKeyPress={props.handleEnterPress}
                onChange={e => props.updateField(e)}
                placeholder="Digite o nome." />
        </div>
    </div>                   
    <div className="col-6 col-md-2">
        <div className="form-goup">
            <label>Nascimento</label>
            <MaskedInput mask='11/11/1111' 
                className="form-control"
                name="nascimento" 
                value={props.nascimento}
                autoComplete="off"
                onKeyPress={props.handleEnterPress}
                onChange={e => props.updateField(e)}
                placeholder="dd/mm/aaaa" />
        </div>
    </div>
    <div className="col-6 col-md-2">
        <div className="form-goup">
            <label>Nº Matricula</label>
            <input type="text" className="form-control"
                name="matricula" 
                value={props.matricula}
                autoComplete="off"
                onKeyPress={props.handleEnterPress}
                onChange={e => props.updateField(e)}
                placeholder="Matricula Nº" />
        </div>
    </div>
</div>
<div className="row">
<div className="col-12 col-md-6">
        <div className="form-goup">
            <label>Endereço</label>
            <input type="text" className="form-control"
                name="endereco" 
                value={props.endereco}
                autoComplete="off"
                onKeyPress={props.handleEnterPress}
                onChange={e => props.updateField(e)}
                placeholder="Endereço" />
        </div>
    </div>
    <div className="col-4 col-md-2">
        <div className="form-goup">
            <label>Série</label>
            <select type="text" className="form-control"
                name="serie" 
                value={props.serie}
                onKeyPress={props.handleEnterPress}
                onChange={e => props.updateField(e)}>
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
    <div className="col-4 col-md-2">
        <div className="form-goup">
            <label>Turma</label>
            <input type="text" className="form-control"
                name="turma" 
                value={props.turma}
                autoComplete="off"
                onKeyPress={props.handleEnterPress}
                onChange={e => props.updateField(e)}
                placeholder="Turma" />
        </div>
    </div>
    <div className="col-4 col-md-2">
        <div className="form-goup">
            <label>Turno</label>
            <select type="text" className="form-control"
                name="turno" onChange={e => props.updateField(e)} value={props.turno}>
                <option value="">Selecionar</option>
                <option value="Manhã">Manhã</option>
                <option value="Tarde">Tarde</option>
                <option value="Noite">Noite</option>
            </select>
        </div>
    </div>
    
    <div className="col-12 col-md-6">
        <div className="form-goup">
            <label>Pai</label>
            <input type="text" className="form-control"
                name="filiacao1" 
                value={props.filiacao1}
                autoComplete="off"
                onKeyPress={props.handleEnterPress}
                onChange={e => props.updateField(e)}
                placeholder="Responsavel" />
        </div>
    </div>
    <div className="col-12 col-md-6">
        <div className="form-goup">
            <label>Mãe</label>
            <input type="text" className="form-control"
                name="filiacao2" 
                value={props.filiacao2}
                autoComplete="off"
                onKeyPress={props.handleEnterPress}
                onChange={e => props.updateField(e)}
                placeholder="Responsavel" />
        </div>
    </div>
    <div className="col-12 col-md-12">
        <div className="form-goup">
            <label>Obs.:</label>
            <input type="text" className="form-control"
                name="mais" 
                value={props.mais}
                autoComplete="off"
                onChange={e => props.updateField(e)}
                placeholder="Observações caso haja necessario." />
        </div>
    </div>
</div>
<hr/>
<div className="row">
    <div className="col-12 d-flex justify-content-end">
        <button className="btn btn-primary mb-2" onClick={props.save}>
            Salvar
        </button>
        <button className="btn btn-secondary ml-2 mb-2" onClick={props.clear}>
            Cancelar
        </button>
    </div>
</div>
</div>
