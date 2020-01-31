import React from 'react'
import styled from 'styled-components'

const NoteList = ({ newNote }) => {
  return (
    <Wrapper>
      <SearchBar/>
      <button onClick={newNote} ><i className="las la-plus"></i></button>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  padding: 1rem;
`

const SearchBar = styled.input`
  width: 100%;
  line-height: 1.2rem;
`

export default NoteList;