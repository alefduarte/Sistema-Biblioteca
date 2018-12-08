import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    fab,
    faTwitterSquare,
    faFacebookSquare,
    faLinkedin,
    faGooglePlusSquare
} from '@fortawesome/free-brands-svg-icons'

library.add(
    fab,
    faTwitterSquare,
    faLinkedin,
    faFacebookSquare,
    faGooglePlusSquare
)


const Footer = () => (
    <footer className={'page-footer font-small special-color-dark pt-4'}>
        <div className={"container"}>
            <ul className={"list-unstyled list-inline text-center"}>
                <li className={"list-inline-item"}>
                    <a className="btn-floating btn-fb mx-1">
                        <FontAwesomeIcon
                            icon={faTwitterSquare}
                            size="3x"
                            title="Twitter"
                            color="#ffffff" /></a>
                </li>
                <li className={"list-inline-item"}>
                    <a className="btn-floating btn-fb mx-1">
                        <FontAwesomeIcon
                            icon={faFacebookSquare}
                            size="3x"
                            title="Facebook"
                            color="#ffffff" /></a>
                </li>
                <li className={"list-inline-item"}>
                    <a className="btn-floating btn-fb mx-1">
                        <FontAwesomeIcon
                            icon={faGooglePlusSquare}
                            size="3x"
                            title="Google Plus"
                            color="#ffffff" /></a>
                </li>
                <li className={"list-inline-item"}>
                    <a className="btn-floating btn-fb mx-1">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            size="3x"
                            title="Linkedin"
                            color="#ffffff" /></a>
                </li>
            </ul>
        </div>
        <div className="container">
            <ul className="foote_bottom_ul_amrc">
                <div className="link">
                    <Link to="/home" ><strong>Home</strong></Link></div>
                <div className="link">
                    <Link to="/about" ><strong>Equipe</strong></Link></div>
            </ul>

            <div className={"footer-copyright text-center py-3"}>
                <strong>Copyright &copy; {(new Date().getFullYear())} | Heidegger Books!</strong>
            </div>
        </div>
    </footer>
);

export default Footer;