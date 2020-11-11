import React, { useState, useEffect } from 'react'
import Editor from 'react-simple-code-editor'
import styled from 'styled-components'
import useDebouncedCallback from '../../utils/useDebounce'
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markdown';

const Code = ({ saveNote, selectedNote }) => {
  const [code, updateCode] = useState(selectedNote?.content || ' ')

  useEffect(() => {
    if (selectedNote?.content) {
      updateCode(selectedNote.content)
    }
  }, [selectedNote])

  const handler = useDebouncedCallback(() => {
    saveNote(selectedNote);
  }, 2000)

  return (
    <EditorWindow
      value={code}
      onValueChange={code => {
        updateCode(code)
        selectedNote.content = code;
        handler(selectedNote)
      }}
      highlight={code => highlight(code, languages.md)}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
      }}
    />
  )
}

const EditorWindow = styled(Editor)`
  width: 100%;
  height: 99vh;
  margin-top: 1rem;
`

export default Code
