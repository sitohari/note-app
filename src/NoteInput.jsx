import React, { Component } from 'react';

class NoteInput extends Component {
    constructor(props){
        super(props);
          // inisialisasi state
            this.state = {
                title: '',
                body: '',
                createdAt : '',
            }
            this.onTitleChangeEventHandler = this.onNameChangeEventHandler.bind(this);
            this.onBodyChangeEventHandler = this.onTagChangeEventHandler.bind(this);
            this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    onTitleChangeEventHandler(event){
        this.setState(()=>{
            return{
                title: event.target.value,
            }
        })
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
    }


    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <label htmlFor="Masukkan Title"></label>
                <input type="text" placeholder='Masukkan Judul' value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <label htmlFor="Masukkan isi"></label>
                <input type="text" placeholder='Masukkan Isi' value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                <button type="submit">Tambah +</button>
            </form>
        );
    }
}

export default NoteInput;