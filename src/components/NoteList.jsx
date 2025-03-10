import React from 'react';
import NoteItem from './NoteItem';

function NoteList({notes, onDelete}) {
  return (
    <div className='note-list'>
        {
          notes.length > 0 ?(
            notes.map((note) => (
              <NoteItem 
              key={note.id} 
              {...note} 
              onDelete={onDelete}
              id={note.id}
              />
          ))
          ) : (
            <p>Tidak ada catatan</p>
          )
        }
    </div>
  );
}

export default NoteList;
