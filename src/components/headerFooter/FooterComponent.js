import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';


function Footer() {
    return(
        <footer className="site-footer">
            <div className="container-fluid bg-dark text-light footer-content" style={{ width: '100%' }}>
                <div className="footer-links    ">
                    <Link><a className="list-inline-item" href="home">home</a></Link>
                    <a className="list-inline-item" href="home">home</a>
                    <a className="list-inline-item" href="home">home</a>
                    <a className="list-inline-item" href="home">home</a>
                    <a className="list-inline-item" href="home">home</a>
                    <a className="list-inline-item" href="home">home</a>

                </div>
            </div>
        </footer>
    )
}

export default Footer;