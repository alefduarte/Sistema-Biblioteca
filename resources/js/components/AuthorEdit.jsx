import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    }

    // handle change
    handleChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios
            .put(`/authors/${this.props.match.params.id}`, {
                name: this.state.name
            })
            .then((response) => {
                console.log('successfully edited the author', response.data.author);
                // set state
                this.props.history.push('/author');
            }).catch((error) => {
                console.log('Errors:', error.response.data)
            });
    }

    // get all authors from backend
    getAuthors() {
        axios.get(`/authors/${this.props.match.params.id}/edit`).then((
            response
        ) =>
            this.setState({
                authors: response.data.author,
                name: response.data.author.name
            })
        ).catch((error) => {
            console.log('Errors:', error.response)
        });
    }
    // lifecycle method
    componentWillMount() {
        this.getAuthors();
    }

    render() {
        console.log(this.props.match.params.id);
        console.log(this.state.nome);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header text-center">Editar Autor</div>
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
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Atualizar Autor
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
