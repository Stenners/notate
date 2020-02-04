import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const Toolbar = ({ viewMode, deleteNote, toggleMenu }) => {
  return (
    <ToolbarWrapper>
      <Button onClick={toggleMenu} icon="la-bars" />
      <Button onClick={viewMode} icon="la-edit" />
      <Button icon="la-tags" />
      <Button onClick={deleteNote} icon="la-trash-alt" />
    </ToolbarWrapper>
  )
}

const ToolbarWrapper = styled.div`
  display: flex;
  font-size: 15px;
  margin: 0 -1.2rem;
  padding: 1rem;
`

export default Toolbar
