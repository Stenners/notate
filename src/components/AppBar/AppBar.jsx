import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const AppBar = () => {
  return (
    <Wrapper>
      <SectionButton icon="la-bars" />
      <SectionButton icon="la-bars" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 99vh;
  width: 50px;
`

const SectionButton = styled(Button)``

export default AppBar
