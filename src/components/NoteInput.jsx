import React, { Component } from 'react';

class NoteInput extends Component {
    constructor(props){
        super(props);
            this.state = {
                title: '',
                body: '',
                createdAt : '',
                maxTitleLength: 50,
                archived :false,
            }
            this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
            this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
            this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    onTitleChangeEventHandler(event) {
        const maxTitleLength = this.state.maxTitleLength;
        const inputValue = event.target.value;

        this.setState({
            title: inputValue.length > maxTitleLength
                ? inputValue.slice(0, maxTitleLength)
                : inputValue,
            });
    }

    onBodyChangeEventHandler(event){
        this.setState(()=>{
            return{
                body: event.target.value,
            }
        })
    }
    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({
            title: '',
            body: '',
        });
    }


    render() {
        const remainingCharacters = this.state.maxTitleLength - this.state.title.length;

        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <label>Masukkan Judul</label>
                <input 
                    type="text" 
                    placeholder='Masukkan Judul' 
                    value={this.state.title} 
                    onChange={this.onTitleChangeEventHandler}
                />
                {this.state.title.length > 0 && (
                    <p className={remainingCharacters < 10 ? 'red' : ''}>
                        Sisa karakter: {remainingCharacters}
                    </p>
                )}
                <label>Masukkan Isi</label>
                <input 
                    type="text" 
                    placeholder='Masukkan Isi' 
                    value={this.state.body} 
                    onChange={this.onBodyChangeEventHandler}
                />
                <button type="submit">Tambah +</button>
            </form>
        );
    }
}

export default NoteInput;