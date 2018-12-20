import React, { Component } from 'react';

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            sellingPrice: '',
            loanPrice: '',
            ISBN: '',
            stock: '',
            publisher_id: '',
            author_id: '',
            books: []
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle change
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios
            .put(`/books/${this.props.match.params.id}`, {
                title: this.state.title,
                sellingPrice: this.state.sellingPrice,
                loanPrice: this.state.loanPrice,
                ISBN: this.state.ISBN,
                stock: this.state.stock,
                publisher_id: this.state.publisher_id,
                author_id: this.state.author_id
            })
            .then(response => {
                console.log('successfully edited the book', response.data.book);
                // set state
                this.props.history.push('/book');
            }).catch((error) => {
                console.log('Errors:', error.response.data)
            });
    }

    // get all books from backend
    getBooks() {
        axios.get(`/books/${this.props.match.params.id}/edit`).then((
            response
        ) =>
            this.setState({
                books: response.data.book,
                title: response.data.book.title,
                sellingPrice: response.data.book.sellingPrice,
                loanPrice: response.data.book.loanPrice,
                ISBN: response.data.book.ISBN,
                stock: response.data.book.stock,
                publisher_id: response.data.book.publisher_id,
                author_id: response.data.book.author_id
            })
        ).catch((error) => {
            console.log('Errors:', error.response.data)
        });
    }
    // lifecycle method
    componentWillMount() {
        this.getBooks();
    }

    handleUpdate(id) {
        axios.put(`/books/${id}`).then(response => {
            this.getBooks();
        });
    }

    render() {
        console.log(this.props.match.params.id);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header text-center">Livros</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label className="text-left">Título<span className="text-danger">*</span></label>
                                        <input
                                            onChange={this.handleChange}
                                            value={this.state.title}
                                            type="text"
                                            name="title"
                                            className="form-control"
                                            rows="1"
                                            placeholder="nome do livro"
                                            required
                                        />
                                        <label className="text-left">Preço de Venda<span className="text-danger">*</span></label>
                                        <input
                                            onChange={this.handleChange}
                                            value={this.state.sellingPrice}
                                            className="form-control"
                                            type="number"
                                            name="sellingPrice"
                                            rows="1"
                                            placeholder="Apenas números"
                                            required
                                        />
                                        <label className="text-left">Preço de Empréstimo<span className="text-danger">*</span></label>
                                        <input
                                            onChange={this.handleChange}
                                            value={this.state.loanPrice}
                                            className="form-control"
                                            type="number"
                                            name="loanPrice"
                                            rows="1"
                                            placeholder="Apenas números"
                                            required
                                        />
                                        <label className="text-left">ISBN<span className="text-danger">*</span></label>
                                        <input
                                            onChange={this.handleChange}
                                            value={this.state.ISBN}
                                            className="form-control"
                                            type="number"
                                            name="ISBN"
                                            rows="1"
                                            placeholder="ISBN"
                                            required
                                        />
                                        <label className="text-left">Quantidade em Estoque<span className="text-danger">*</span></label>
                                        <input
                                            onChange={this.handleChange}
                                            value={this.state.stock}
                                            className="form-control"
                                            type="number"
                                            name="stock"
                                            rows="1"
                                            placeholder="Quantidade"
                                            required
                                        />
                                        <label className="text-left">Editora<span className="text-danger">*</span></label>
                                        <input
                                            onChange={this.handleChange}
                                            value={this.state.publisher_id}
                                            className="form-control"
                                            type="number"
                                            name="publisher_id"
                                            rows="1"
                                            placeholder="ID Editora"
                                            required
                                        />
                                        <label className="text-left">Autor<span className="text-danger">*</span></label>
                                        <input
                                            onChange={this.handleChange}
                                            value={this.state.author_id}
                                            className="form-control"
                                            type="number"
                                            name="author_id"
                                            rows="1"
                                            placeholder="ID Autor"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Atualizar Livro
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
