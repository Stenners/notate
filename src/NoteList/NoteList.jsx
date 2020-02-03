import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const NoteList = ({ notes, newNote, selectedNote }) => {
  console.log('rerender')
  return (
    <Wrapper>
      <SearchBar />
      <Button onClick={newNote} icon="la-plus" />
      <div>
        <ul>
          {notes.map(item => (
            <li onClick={() => selectedNote(item)} key={item.id}>
              {item.title.split('#')[1] || item.title}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
`

const SearchBar = styled.input`
  width: 80%;
  line-height: 1.2rem;
`

export default NoteList
