import react from "react";
import './HeaderStyle.css'

// 1h para fazer o header

export default function Header(){
    return(
        <header>
            <nav className={`navbar navbar-expand-sm`}>
                <div className={`container`}>
                    <a href="#" className={`navbar-brand linkHeaderColor`}>
                        <h1><strong>SPDI</strong></h1>
                    </a>
                    <button className={`navbar-toggler`} type={`button`} data-bs-toggle={`collapse`} data-bs-target={`.nav-main`} >
                        <i className={`fa-solid fa-bars text-primary`}></i>
                    </button>
                    <div className={`collapse navbar-collapse nav-main`}>
                        <ul className={`navbar-nav`}> 
                            <li className={`nav-item`}>
                                <a href="" className={`nav-link linkHeaderColor`}>
                                    Opção 1
                                </a>
                            </li>
                            <li className={`nav-item`}>
                                <a href="" className={`nav-link linkHeaderColor`}>
                                    Opção 2
                                </a>
                            </li>
                            <li className={`nav-item`}>
                                <a href="" className={`nav-link linkHeaderColor`}>
                                    Opção 3
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={`collapse navbar-collapse nav-main`}>
                        <ul className={`navbar-nav ms-auto`}>
                            <li className={`nav-item`}>
                                <a href="" className={`nav-link me-auto linkHeaderColor`}>Login</a>
                            </li>
                            <li className={`nav-item`}>
                                <a href="" className={`nav-link btn btn-primary text-white`}>Sign up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}