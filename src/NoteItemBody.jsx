import React from 'react'

const NoteItemBody = ({title,body,createdAt}) => {
  return (
    <div>
        <h3 className="note-item-title">{title}</h3>
        <span className='note-item-date'>{createdAt}</span>
        <p className='note-item-text'>{body}</p>
    </div>
  )
}

export default NoteItemBody