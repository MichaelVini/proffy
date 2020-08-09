import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import './style.css';


interface PageHeaderProps {
    title: string;
    //Ponto de interrogação indica que o propriedade não pe obrigatória
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="" />
                </Link>
                <img src={logoImg} alt="" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {/* Caso exista um props.description então ele será exibido.
                - Com o operador AND a segunda ação só será executada caso a 
                primeira seja verdadeira. */} 
                {props.description && <p>{props.description}</p>}
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;