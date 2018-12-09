import React from 'react'
import marina from '../img/marina.jpg'
import alef from '../img/alef.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    fab,
    faTwitter,
    faFacebook,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'

library.add(
    fab,
    faTwitter,
    faInstagram,
    faFacebook
)


const Home = () => (
    <div>
        {/* ABOUT */}
        <section className="team">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>NOSSA EQUIPE</h1>
                        <hr className="star-dark mb-5"></hr>
                    </div>
                </div>
                <div className="row text-center">

                    <div className="col">
                        <img className="img-rounded" src={alef} className="rounded-circle z-depth-1"
                            alt="Álef Duarte" />
                        <div className="team-member">
                            <h4>Álef Duarte</h4>
                            <h5><strong>Graduando em Engenharia da Computação</strong></h5>
                            <p>Programação Front-end e Back-end</p>
                        </div>
                        <ul className={"list-unstyled list-inline text-center"}>
                            <li className={"list-inline-item"}>
                                <a className="btn-floating btn-fb mx-1">
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        size="1x"
                                        title="Twitter"
                                        color="#5db4c0" /></a>
                            </li>
                            <li className={"list-inline-item"}>
                                <a className="btn-floating btn-fb mx-1">
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        size="1x"
                                        title="Facebook"
                                        color="#5db4c0" /></a>
                            </li>
                            <li className={"list-inline-item"}>
                                <a className="btn-floating btn-fb mx-1">
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        size="1x"
                                        title="Instagram"
                                        color="#5db4c0" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <img className="img-rounded" src={marina} className="rounded-circle z-depth-1"
                            alt="Marina Batista" />
                        <div className="team-member">
                            <h4>Marina Batista</h4>
                            <h5><strong>Graduanda em Engenharia da Computação</strong></h5>
                            <p>Modelagem e Implementação do Banco de Dados<br></br>Programação Front-end</p>
                        </div>
                        <ul className={"list-unstyled list-inline text-center"}>
                            <li className={"list-inline-item"}>
                                <a className="btn-floating btn-fb mx-1">
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        size="1x"
                                        title="Twitter"
                                        color="#5db4c0" /></a>
                            </li>
                            <li className={"list-inline-item"}>
                                <a className="btn-floating btn-fb mx-1">
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        size="1x"
                                        title="Facebook"
                                        color="#5db4c0" /></a>
                            </li>
                            <li className={"list-inline-item"}>
                                <a className="btn-floating btn-fb mx-1">
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        size="1x"
                                        title="Instagram"
                                        color="#5db4c0" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

export default Home
