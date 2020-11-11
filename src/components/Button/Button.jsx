import React from 'react'
import styled from 'styled-components'

const Button = ({ onClick, icon, selected = false }) => {
  return (
    <StyledButton onClick={onClick} selected={selected}>
      <i className={`las ${icon}`}></i>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  font-size: 18px;
  font-weight: 600;
  border: ${props => props.theme.button.border};
  background-color: ${props => props.selected ? props.theme.button.bgActive : props.theme.button.bg};
  padding: 0.1rem 0.6rem;
  color: ${props => props.selected ? props.theme.button.colorActive : props.theme.button.color};
  appearance: none;
  cursor: pointer;
`

export default Button
