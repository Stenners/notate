import React, { Component } from 'react'
import SplitPane from 'react-split-pane'
import NoteList from '../NoteList'
import Code from '../Code'
import Toolbar from '../Toolbar'
import firebaseContext from '../firebase'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import './Editor.css'

class EditorView extends Component {
  static contextType = firebaseContext

  constructor(props, context) {
    super(props, context)
    this.state = {
      isNew: false,
      currentDoc: undefined,
      noteList: [],
      selectedNote: { title: '', content: '' },
      editMode: false,
    }
    this.fb = context
  }

  componentDidMount = async () => {
    const { db } = this.fb
    const { user } = this.props
    const curPath = db
      .collection('users')
      .doc(user.uid)
      .collection('notes')

    const notes = await curPath.get()
    const noteList = []
    notes.docs.map((doc, i) =>
      noteList.push({ ...doc.data(), id: doc.id, index: i })
    )
    this.setState({ noteList })
  }

  viewMode = () => {
    this.setState({ editMode: !this.state.editMode })
  }

  newNote = () => {
    const newArr = Array.from(this.state.noteList)
    const newNote = {
      content: '# Untitled',
      title: '# Untitled',
      index: newArr.length,
    }
    newArr.push(newNote)
    this.setState({
      noteList: newArr,
      isNew: true,
      selectedNote: newNote,
      editMode: true,
    })
  }

  selectedNote = note => {
    const { db } = this.fb
    const { user } = this.props
    const curDoc = db
      .collection('users')
      .doc(user.uid)
      .collection('notes')
      .doc(note.id)

    this.setState({ selectedNote: note, currentDoc: curDoc })
  }

  deleteNote = () => {
    this.state.currentDoc.delete()
    const noteIndex = this.state.selectedNote.index
    const newArr = Array.from(this.state.noteList)
    newArr.splice(noteIndex, 1)
    newArr.map((item, i) => (item.index = i))
    console.log(newArr)

    this.setState({
      currentDoc: undefined,
      noteList: newArr,
      selectedNote: 0,
    })
  }

  updateNoteData = (content, i) => {
    const newArr = Array.from(this.state.noteList)
    newArr[i].content = content
    newArr[i].title = content.split('\n')[0]
    this.setState({ noteList: newArr, isNew: false })
  }

  saveNote = code => {
    const { db } = this.fb
    const { user } = this.props
    const curPath = db
      .collection('users')
      .doc(user.uid)
      .collection('notes')

    if (this.state.isNew) {
      curPath
        .doc()
        .set({
          title: 'Untitled',
          content: code,
        })
        .then(() => {
          const id = curPath.doc().id
          console.log('Document successfully written!', id)
          this.updateNoteData(code, this.state.selectedNote.index)
        })
        .catch(error => {
          console.error('Error writing document: ', error)
        })
    } else {
      curPath
        .doc(this.state.selectedNote.id)
        .set({
          title: code.split('\n')[0],
          content: code,
        })
        .then(() => {
          console.log('Document successfully updated!')
          this.updateNoteData(code, this.state.selectedNote.index)
        })
        .catch(error => {
          console.error('Error writing document: ', error)
        })
    }
  }

  render() {
    const { editMode } = this.state
    return (
      <SplitPane split="vertical" defaultSize={300}>
        <NoteList
          selectNote={this.selectedNote}
          selectedNote={this.state.selectedNote.index}
          notes={this.state.noteList}
          newNote={this.newNote}
        />
        <ViewWrapper>
          <Toolbar viewMode={this.viewMode} deleteNote={this.deleteNote} />
          {editMode && (
            <Code
              saveNote={this.saveNote}
              selectedNote={this.state.selectedNote}
            />
          )}
          {!editMode && (
            <ReactMarkdown source={this.state.selectedNote.content} />
          )}
        </ViewWrapper>
      </SplitPane>
    )
  }
}

const ViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default EditorView
