import React from 'react'
import logo2 from '../img/logo2.png'
import author from '../img/author.png'
import book from '../img/book.png'
import publisher from '../img/publisher.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faBook,
    faPenFancy,
    faStore
} from '@fortawesome/free-solid-svg-icons'

library.add(
    fab,
    faBook,
    faPenFancy,
    faStore
)

const Home = () => (
    <div>
        {/* HEADER */}
        <header className="masthead bg-primary text-white text-center">
            <div className={'container'}>
                <img className="img-fluid col-md-6 col-lg-4 d-block mx-auto" src={logo2} alt="Heidegger Books"></img>
                <h1 className="text-uppercase mb-0">Heidegger Books</h1>
                <hr className="star-light"></hr>
                <h2 className="font-weight-light mb-0">Sua fonte de conhecimento</h2>
            </div>
        </header>
        {/* LINKS */}
        <section className="portfolio">
            <div className="container">
                <h2 className="text-center text-uppercase text-secondary mb-0">Ações</h2>
                <hr className="star-dark mb-5"></hr>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <Link className="portfolio-item d-block mx-auto" to="/author" >
                            <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                <h1>Autores</h1>
                                    <FontAwesomeIcon
                                        icon={faPenFancy} 
                                        size="4x"
                                        title="Autores"
                                        spin/>
                                </div>
                            </div>
                            <img className="img-fluid" src={author} alt=""></img>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Link className="portfolio-item d-block mx-auto" to="/book" >
                            <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                <h1>Livros</h1>
                                    <FontAwesomeIcon
                                        icon={faBook} 
                                        size="4x"
                                        title="Livros"
                                        spin/>
                                </div>
                            </div>
                            <img className="img-fluid" src={book} alt=""></img>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <Link className="portfolio-item d-block mx-auto" to="/publisher" >
                            <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                <h1>Editoras</h1>
                                    <FontAwesomeIcon
                                        icon={faStore} 
                                        size="4x"
                                        title="Editoras"
                                        spin/>
                                </div>
                            </div>
                            <img className="img-fluid" src={publisher} alt=""></img>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

export default Home
