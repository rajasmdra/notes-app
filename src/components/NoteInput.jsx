import React from "react";
import { FiCheck } from "react-icons/fi";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            errorMessage: ''
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const maxChar = 50;
        const inputTitle = event.target.value

        if (inputTitle.length <= maxChar) {
            this.setState({
                title: inputTitle
            })
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState({
            body: event.target.value,
            errorMessage: ''
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();

        if (this.state.body.length < 10) {
            this.setState({
                errorMessage: 'Isi catatan minimal harus 10 karakter!'
            });

            return;
        }

        this.props.addNote({
            title: this.state.title,
            body: this.state.body
        })

        this.setState({
            title: '',
            body: '',
            errorMessage: ''
        })
    }

    render() {
        const remainingChars = 50 - this.state.title.length;

        return (
            <form 
                className="add-new-page__input"
                onSubmit={this.onSubmitEventHandler}
            >
                <input 
                    type="text" 
                    className="add-new-page__input__title" 
                    placeholder="Catatan rahasia"
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                    required
                />
                <textarea 
                    className="add-new-page__input__body" 
                    placeholder="Sebenarnya saya adalah..."
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                    required
                />
                <div className="add-new-page__action">
                    <button 
                        className="action"
                        type="submit"
                    >
                        <FiCheck />
                    </button>
                </div>
            </form>
        )
    }
}

export default NoteInput;