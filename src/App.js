import React from 'react';
import { Router } from "@reach/router";
import PrivateRoute from './PrivateRoute'
import Editor from './Editor'
import styled, { ThemeProvider } from 'styled-components'
import firebaseContext, { fb } from './firebase'
import theme from './themes/dark'
import './themes/typography.css'

const App = () => {
  return (
    <firebaseContext.Provider value={fb}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          {/* <AppBar /> */}
          <Router>
            <PrivateRoute as={Editor} path="/" />
          </Router>
        </Wrapper>
      </ThemeProvider>
    </firebaseContext.Provider>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  color: ${props => props.theme.fg};
  background-color: ${props => props.theme.bg};
`

export default App;
