import React from 'react'
import Note from './Note.jsx'
import CreateNote from './CreateNote.jsx'

const Notes = () => {
  return (
    <div className='notes'>
      <Note />
      <CreateNote />
    </div>
  )
}

export default Notes