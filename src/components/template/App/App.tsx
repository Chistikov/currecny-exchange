import React from 'react';

import Header from '../Header/Header'
import ContentContainer from '../ContentContainer/ContentContainer'

import { StyledApp } from './styled'

function App() {
  return (
    <StyledApp>
      <Header/>
      <ContentContainer/>
    </StyledApp>
  );
}
export default App;
