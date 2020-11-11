import { useAuth } from "../../contexts/auth";
import SplitPane from "react-split-pane";
import { useEffect, useState } from "react";
import NoteList from "../NoteList";
import Toolbar from "../Toolbar";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import Code from "../Code";
import { width } from "../../utils/width";

export default function EditorView() {
  const { user, firebase } = useAuth();
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(true);
  const [selectedNote, setSelectedNote] = useState();
  const [uid, setUid] = useState();

  useEffect(() => {
    const getNotes = async () => {
      const noteArr = [];
      if (firebase && user && noteArr.length === 0) {
        const db = firebase.firestore();
        const uid = user?.uid;
        setUid(uid);
        const notes = await db
          .collection("users")
          .doc(uid)
          .collection("notes")
          .get();

        notes.forEach((note) => {
          console.log("noteid", note.id);
          const newNote = { ...note.data() };
          newNote.id = note.id;
          noteArr.push(newNote);
        });

        setNotes(noteArr);
        console.log("note", noteArr);
        setSelectedNote(noteArr[0]);
      }
    };
    getNotes();
  }, [user, firebase]);

  const selectNote = (note) => setSelectedNote(note);

  const viewMode = () => {
    setEditMode(!editMode);
  };

  const newNote = () => {
    const now = new Date().toISOString();
    const newNote = {
      content: "# Untitled",
      title: "# Untitled",
      created: now,
    };
    setSelectedNote(newNote);
    setNotes([...notes, newNote]);
  };

  const deleteNote = () => {
    console.log("delete");
  };

  const toggleMenu = () => {
    console.log("toggle");
  };

  const saveNote = async (note) => {
    console.log("note", note);
    const db = firebase.firestore();
  
    const fbNote = db
      .collection("users")
      .doc(uid)
      .collection("notes")
    
    if (selectedNote.id) {
      fbNote.doc(selectedNote.id).set(note);
    } else {
      fbNote.add(note);
    }
  };

  const splitOptions = {
    defaultSize: width > 600 ? 300 : 0,
  };

  return (
    <SplitPane split="vertical" {...splitOptions}>
      <NoteList notes={notes} selectNote={selectNote} newNote={newNote} />
      <ViewWrapper>
        <Toolbar
          viewMode={viewMode}
          deleteNote={deleteNote}
          toggleMenu={toggleMenu}
        />
        {editMode && <Code saveNote={saveNote} selectedNote={selectedNote} />}
        {!editMode && <ReactMarkdown source={selectedNote.content} />}
      </ViewWrapper>
    </SplitPane>
  );
}

const ViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background
`;
