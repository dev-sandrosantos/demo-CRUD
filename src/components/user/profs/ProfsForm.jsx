import React from 'react'

export default props => 

<div className="form">
<div className="row">
    <div className="col-12 col-md-6">
        <div className="form-group">
            <label>Nome do Profersor(a)</label>
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
            <input type="text" className="form-control"
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
            <label>CPF</label>
            <input type="text" className="form-control"
                name="cpf" 
                value={props.cpf}
                autoComplete="off"
                onKeyPress={props.handleEnterPress}
                onChange={e => props.updateField(e)}
                placeholder="CPF" />
        </div>
    </div>
</div>
<div className="row">
<div className="col-12 col-md-6">
        <div className="form-goup">
            <label>Diciplina</label>
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
            <label>Série</label>
            <input type="text" className="form-control"
                name="serie" 
                value={props.serie}
                autoComplete="off"
                onKeyPress={props.handleEnterPress}
                onChange={e => props.updateField(e)}
                placeholder="Série" />
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
    <div className="col-12 col-md-6">
        <div className="form-goup">
            <label>PIS/PASEP</label>
            <input type="text" className="form-control"
                name="pispasep" 
                value={props.pispasep}
                autoComplete="off"
                onKeyPress={props.handleEnterPress}
                onChange={e => props.updateField(e)}
                placeholder="PIS/PASEP" />
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
