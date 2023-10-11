import React from "react";
import Logo from "../html-css-template/imagens/logo-verde.png";
import Avatar from "../html-css-template/imagens/avatar.png";

function Header() {
    return (
        <>
            <nav>
                <div className="container">
                    <img src={Logo} alt="Logo" className="logo" />
                    <img src={Avatar} alt="Avatar" className="avatar" />
                </div>
            </nav>
        </>
    );
}

export default Header;