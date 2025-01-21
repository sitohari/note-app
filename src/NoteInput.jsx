import React, { Component } from 'react';

class NoteInput extends Component {
    constructor(props){
        super(props);
          // inisialisasi state
            this.state = {
                title: '',
                body: '',
                createdAt : '',
                maxTitleLength: 50,
            }
            this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
            this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
            this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    onTitleChangeEventHandler(event) {
        const maxTitleLength = this.state.maxTitleLength;
        const inputValue = event.target.value;
        // Validasi panjang judul
        if (inputValue.length <= maxTitleLength) {
            this.setState({
                title: inputValue,
            });
        }
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
        // Reset input setelah submit
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
                <input type="text" placeholder='Masukkan Judul' value={this.state.title} onChange={this.onTitleChangeEventHandler} maxLength={50}/>
                {this.state.title.length > 0 && (
                    <p className={remainingCharacters < 10 ? 'red' : ''}>
                        Sisa karakter: {remainingCharacters}
                    </p>
                )}
                <label>Masukkan Isi</label>
                <input type="text" placeholder='Masukkan Isi' value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                <button type="submit">Tambah +</button>
            </form>
        );
    }
}

export default NoteInput;