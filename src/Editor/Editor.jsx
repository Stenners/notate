import React, { useState } from 'react'
import Editor from 'react-simple-code-editor'
import styled from 'styled-components'
import SplitPane from 'react-split-pane'
import { highlight, languages } from 'prismjs'

const EditorView = () => {
  const [code, updateCode] = useState('<div>ship</div>')

  return (
    <SplitPane>
      <NoteList>Files</NoteList>
      <EditorWindow
        value={code}
        onValueChange={code => updateCode(code)}
        highlight={code => highlight(code, languages.html)}
        padding={20}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
        }}
      />
    </SplitPane>
  )
}

const NoteList = styled.div`
  padding: 1rem;
  min-width: 3rem;
`

const EditorWindow = styled(Editor)`
  width: 100%;
  height: 99vh;
  background-color: #fafafa;
  border-left: 1px solid #dddddd;
`

export default EditorView
