import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            authors: []
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderAuthors = this.renderAuthors.bind(this);
    }

    // handle change
    handleChange(e) {
        this.setState({
            name: e.target.value
        });
        console.log('onChange', this.state.name);
    }

    handleSubmit(e) {
        e.preventDefault();
        axios
            .post('/authors', {
                name: this.state.name
            })
            .then((response) => {
                console.log('from handle submit', response.data.author);
                // set state
                this.setState({
                    authors: [response.data.author, ...this.state.authors]
                });
                // then clear the value of textarea
                this.setState({
                    name: ''
                });
            }).catch((error) => {
                console.log('Errors:', error.response.data)
            });
    }

    // render authors
    renderAuthors() {
        console.log('Atores:', this.state.authors)
        return this.state.authors.map(author => (
            <tr key={author.id}>
                <td>{author.id}</td>
                <td>{author.name}</td>
            </tr >
        ));
    }

    // get all authors from backend
    getAuthors() {
        axios.get('/authors').then((
            response
        ) =>
            this.setState({
                authors: [...response.data.authors]
            })
        ).catch((error) => {
            console.log('Errors:', error.response.data)
        });
    }
    // lifecycle method
    componentWillMount() {
        this.getAuthors();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header text-center">Autores</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label className="text-left">Nome<span className="text-danger">*</span></label>
                                        <input
                                            onChange={this.handleChange}
                                            value={this.state.nome}
                                            type="text"
                                            name="nome"
                                            className="form-control"
                                            rows="1"
                                            placeholder="nome do autor"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Adicionar Autor
                                    </button>
                                </form>
                                <hr />
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Nome</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderAuthors()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
