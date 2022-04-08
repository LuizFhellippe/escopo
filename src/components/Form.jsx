import react from "react";
import './FormStyle.css'
//50 min

export default function Form(){
    return (
        <div className={`container bg-white p-4 rounded shadow-lg`}>
            <fieldset>
                <legend className={`d-flex legendStyle`}><strong>Agende sua consulta</strong></legend>
                <div className={`row`}>
                    <div className={`col-md-6`}>
                        <label className={`form-label d-flex labelStyle`}>Especialidade</label>
                        <select className={`form-control`}>
                            <option>Emagrecimento</option>
                            <option>Teste</option>
                            <option>Teste 2</option>
                        </select>
                        <div className={`mt-4 d-flex justify-content-start`}>
                            <button className={`shadow-lg rounded btn btn-primary px-5 me-4`}><i className={`fa-solid fa-wifi`}></i> Online</button>
                            <button className={`shadow-lg rounded btn btn-white px-5 ms-4`}><i className={`fa-solid fa-user-group`}></i> Presencial</button>
                        </div>
                    </div>
                    <div className={`col-md-6`}>
                        <label className={`form-label d-flex labelStyle`}>Localização:</label>
                        <select className={`form-control`}>
                            <option>São Paulo - SP</option>
                            <option>Goiânia - GO</option>
                            <option>Conceição do Araguaia - PA</option>
                        </select>
                        <div className={`d-flex justify-content-end`}>
                            <button className={`shadow-lg btn btn-danger mt-4 px-5 py-2`}>Pesquisar</button>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    )
}