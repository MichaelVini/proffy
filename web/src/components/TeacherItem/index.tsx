import React from 'react';
import './style.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem = () => {
    return (
        <div>
            <article className="teacher-item">
                <header>
                    <img src="https://avatars3.githubusercontent.com/u/60121384?s=460&u=75230395be54b1296911e80310b3bd5102cd4e7c&v=4" alt="Michael Vinicius" />
                    <div>
                        <strong>Michael Vinicius</strong>
                        <span>Química</span>
                    </div>
                </header>
                <p>
                    Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>
                <footer>
                    <p>
                        Preço/hora
                    <strong>R$ 100,00</strong>
                    </p>
                    <button type='button'>
                        <img src={whatsappIcon} alt="Whatsapp" />
                     Entrar em contato
                    </button>
                </footer>
            </article>
            <article className="teacher-item">
                <header>
                    <img src="https://avatars3.githubusercontent.com/u/47605309?s=460&u=ff0fce4351ffedf03e3cd06f95de17b94ed0b2fd&v=4" alt="Michael Vinicius" />
                    <div>
                        <strong>Matheus Gomes</strong>
                        <span>Química</span>
                    </div>
                </header>
                <p>
                    Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>
                <footer>
                    <p>
                        Preço/hora
                    <strong>R$ 100,00</strong>
                    </p>
                    <button type='button'>
                        <img src={whatsappIcon} alt="Whatsapp" />
                     Entrar em contato
                </button>
                </footer>
            </article>
            <article className="teacher-item">
                <header>
                    <img src="https://avatars3.githubusercontent.com/u/38293875?s=460&u=fb6ee9ebe7e2346c2af9303a1a8f37b5f37c779a&v=4" alt="Michael Vinicius" />
                    <div>
                        <strong>Daniel Salis</strong>
                        <span>Química</span>
                    </div>
                </header>
                <p>
                    Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                </p>
                <footer>
                    <p>
                        Preço/hora
                    <strong>R$ 100,00</strong>
                    </p>
                    <button type='button'>
                        <img src={whatsappIcon} alt="Whatsapp" />
                     Entrar em contato
                </button>
                </footer>
            </article>
        </div>
    );
}

export default TeacherItem;