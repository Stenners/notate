import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const NoteList = ({ notes, newNote, selectNote, selectedNote }) => {
  return (
    <>
      <Wrapper>
        {/* <SearchBar /> */}
        <Button onClick={newNote} icon="la-plus" />
      </Wrapper>
      <List>
        <Ul>
          {notes.map((item, i) => (
            <Item
              onClick={() => selectNote(item)}
              key={item.id}
              selected={i === selectedNote}
            >
              {item.title.split('#')[1] || item.title}
            </Item>
          ))}
        </Ul>
      </List>
    </>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
`

const List = styled.div`
  margin-top: 1.2rem;
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`

const Item = styled.li`
  width: 100%;
  cursor: pointer;
  background-color: ${props => (props.selected ? props.theme.notelist.note.selected : 'transparent')};
  margin: 0;
  padding: 0.4rem 1.2rem;
`

// const SearchBar = styled.input`
//   width: 80%;
//   line-height: 1.2rem;
// `

export default NoteList
