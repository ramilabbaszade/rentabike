import React from 'react'
import BrandLogo from '../../shared/components/UIElements/BrandLogo'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-in container">
                <div className="footer-in__main">
                    <BrandLogo />
                    <div className="footer__social">
                        <Link style={{backgroundColor:'#DB4437'}} to="/">
                            <i className="fas fa-envelope"></i>
                        </Link>
                        <Link style={{backgroundColor:'#c13584'}} to="/">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link style={{backgroundColor:'#4267B2'}} to="/">
                            <i className="fab fa-facebook-square"></i>
                        </Link>
                    </div>
                </div>
                <div className="footer__copyright">
                    © Copyright 2020
                </div>
            </div>
        </div>
    )
}

export default Footer
