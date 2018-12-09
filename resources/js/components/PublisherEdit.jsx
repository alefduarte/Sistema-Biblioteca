import React, { Component } from 'react';

export default class PublisherEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            publishers: []
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
            .put(`/publishers/${this.props.match.params.id}`, {
                name: this.state.name
            })
            .then((response) => {
                console.log('successfully edited the publisher', response.data.publisher);
                // set state
                this.props.history.push('/publisher');
            }).catch((error) => {
                console.log('Errors:', error.response.data)
            });
    }

    // get all publishers from backend
    getPublishers() {
        axios.get(`/publishers/${this.props.match.params.id}/edit`).then((
            response
        ) =>
            this.setState({
                publishers: response.data.publisher,
                name: response.data.publisher.name
            })
        ).catch((error) => {
            console.log('Errors:', error.response)
        });
    }
    // lifecycle method
    componentWillMount() {
        this.getPublishers();
    }

    render() {
        console.log(this.props.match.params.id);
        console.log(this.state.nome);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header text-center">Alterar Editora</div>
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
                                        Atualizar Editora
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
