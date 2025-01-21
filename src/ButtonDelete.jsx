import React from 'react'

export default function ButtonDelete({id, onDelete}) {
  return (
    <button className="note-item-delete" onClick={() => onDelete(id)}>Remove</button>
  )
}
