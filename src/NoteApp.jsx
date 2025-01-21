import React from 'react'
import {getData} from './assets/data'
import NoteList from './NoteList'
import NoteInput from './NoteInput';

class NoteApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: getData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }
    
    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onAddNoteHandler({title, body, createdAt}){
        this.setState((prevState) =>{
            return{
                notes:[
                    ...prevState.notes,
                    { 
                        id: +new Date(), 
                        title,
                        body,
                        createdAt: new Date().toISOString(), 
                    }
                ]
            }
        })
    }
    render(){
    return (
        <div className='note-app'>
            <h1>Notes App✏️</h1>
            <h2>Tambah Catatan</h2>
            <NoteInput addNote={this.onAddNoteHandler}/>
            <h2>Daftar Notes </h2>
            <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
        </div>
        )
    }
}

export default NoteApp