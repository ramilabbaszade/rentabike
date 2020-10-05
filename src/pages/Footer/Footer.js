import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-in container">
                <div className="footer__copyright">
                 © Velorent 2020 - Bütün haqqlar qorunur
                    </div>
                <div className="footer__social">
                    <Link to="/">
                        <i className="fas fa-envelope"></i>
                    </Link>
                    <Link to="/">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="/">
                        <i className="fab fa-facebook-square"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
