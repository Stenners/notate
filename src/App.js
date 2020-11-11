import React from 'react';
import { Router } from "@reach/router";
import PrivateRoute from './components/PrivateRoute'
import { AuthProvider } from "./contexts/auth";
import EditorView from './components/EditorView'
import styled, { ThemeProvider } from 'styled-components'
import './themes/resizer.css'
import theme from './themes/light'

import './themes/typography.css'

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Wrapper>
          {/* <AppBar /> */}
          <Router>
            <PrivateRoute as={EditorView} path="/" />
          </Router>
        </Wrapper>
      </ThemeProvider>
    </AuthProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  color: ${props => props.theme.fg};
  background-color: ${props => props.theme.bg};
`

export default App;
