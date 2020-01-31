import React, { useState } from 'react'
import Editor from 'react-simple-code-editor'
import styled from 'styled-components'
import SplitPane from 'react-split-pane'
import NoteList from '../NoteList'
import { highlight, languages } from 'prismjs'
import './Editor.css'

const EditorView = () => {
  const [code, updateCode] = useState('')
  const newTemplate = '# Untitled'

  const newNote = () => {
    updateCode(newTemplate)
  }

  return (
    <SplitPane split="vertical" defaultSize={300}>
      <NoteList newNote={newNote} />
      <EditorWindow
        value={code}
        onValueChange={code => updateCode(code)}
        highlight={code => highlight(code, languages.md)}
        padding={30}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 15,
        }}
      />
    </SplitPane>
  )
}

const EditorWindow = styled(Editor)`
  width: 100%;
  height: 99vh;
  background-color: #fafafa;
`

export default EditorView
