import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Publishers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            publishers: []
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderPublishers = this.renderPublishers.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
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
            .post('/publishers', {
                name: this.state.name
            })
            .then((response) => {
                console.log('from handle submit', response.data.publisher);
                // set state
                this.setState({
                    publishers: [response.data.publisher, ...this.state.publishers]
                });
                // then clear the value of textarea
                this.setState({
                    name: ''
                });
            }).catch((error) => {
                console.log('Errors:', error.response.data)
            });
    }

    // handle delete
    handleDelete(id) {
        // remove from local state
        const isNotId = publisher => publisher.id !== id;
        const updatedPublishers = this.state.publishers.filter(isNotId);
        this.setState({ publishers: updatedPublishers });
        // make delete request to the backend
        axios.delete(`/publishers/${id}`);
    }

    // render publishers
    renderPublishers() {
        console.log('Atores:', this.state.publishers)
        return this.state.publishers.map(publisher => (
            <tr key={publisher.id}>
                <td>{publisher.id}</td>
                <td>{publisher.name}</td>
                <td>
                    <Link className="btn btn-sm btn-success float-right" to={`/publisher/${publisher.id}/edit`}>
                        Edit</Link>
                    <button
                        onClick={() => this.handleDelete(publisher.id)}
                        className="btn btn-sm btn-warning float-right"
                    >
                        Delete
                    </button></td>
            </tr >
        ));
    }

    // get all publishers from backend
    getPublishers() {
        axios.get('/publishers').then((
            response
        ) =>
            this.setState({
                publishers: [...response.data.publishers]
            })
        ).catch((error) => {
            console.log('Errors:', error.response.data)
        });
    }
    // lifecycle method
    componentWillMount() {
        this.getPublishers();
    }

    handleUpdate(id) {
        axios.put(`/publishers/${id}`).then(response => {
            this.getPublishers();
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header text-center">Editoras</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label className="text-left">Nome<span className="text-danger">*</span></label>
                                        <input
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                            type="text"
                                            name="nome"
                                            className="form-control"
                                            rows="1"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Adicionar Editora
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
                                            {this.renderPublishers()}
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
