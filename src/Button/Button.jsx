import React from 'react'
import styled from 'styled-components'

const Button = ({ onClick, icon, selected = false }) => {
  return (
    <StyledButton onClick={onClick}>
      <i className={`las ${icon}`}></i>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  font-size: 18px;
  font-weight: 600;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  padding: 0.1rem 0.6rem;
  color: #7c4dff;
  appearance: none;
  cursor: pointer;
`

export default Button
