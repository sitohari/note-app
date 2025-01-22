import React from 'react'
import NoteItemBody from './NoteItemBody'
import ButtonDelete from './ButtonDelete'



function NoteItem({title, body, createdAt, id , onDelete}) {
  return (
    <div className="note-item">
        <NoteItemBody title={title} body={body} createdAt={createdAt} />
        <ButtonDelete id={id} onDelete={onDelete}/>
    </div>
  )
}

export default NoteItem