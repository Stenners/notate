import React, { useState, useCallback, useEffect } from 'react'
import Editor from 'react-simple-code-editor'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import { highlight, languages } from 'prismjs'

const Code = ({ saveNote, selectedNote }) => {
  const [code, updateCode] = useState(' ')

  const delayedQuery = useCallback(
    debounce(q => saveNote(q), 1000),
    []
  )

  useEffect(() => {
    updateCode(selectedNote.content)
  }, [selectedNote])

  return (
    <EditorWindow
      value={code}
      onValueChange={code => {
        updateCode(code)
        delayedQuery(code)
      }}
      highlight={code => highlight(code, languages.md)}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 15,
      }}
    />
  )
}

const EditorWindow = styled(Editor)`
  width: 100%;
  height: 99vh;
  margin-top: 1rem;
  background-color: #fafafa;
`

export default Code
