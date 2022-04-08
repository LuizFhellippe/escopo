import react from 'react';
import './TopoStyle.css'
import './HeaderStyle.css'
import ImageWolman from '../images/image 1.png'
// 20 min

export default function Topo(){
    return (
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-md-6 align-self-center linkHeaderColor`}>
                    <h1 className={`display-4`}><strong>Aenan viverra naque id elit dictum semper.</strong></h1>
                    <p className={`paragrafoSize`}>Aenan viverra naque id elit dictum semper. Maecenas dapibus quam a suscipt congue.</p>
                    <div className={`d-flex justify-content-center`}>
                        <button className={`btn btn-primary px-4 mx-2`}>Botão 1</button>
                        <button className={`btn btn-primary px-4 mx-2`}>Botão 2</button>
                    </div>
                </div>
                <div className={`col-md-6 d-none d-md-block`}>
                    <img src={ImageWolman} className={`img-fluid`}/>
                </div>
            </div>
        </div>
    )
}