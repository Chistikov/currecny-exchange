import React from 'react';

import Header from 'components/template/Header/Header'
import ContentContainer from 'components/template/ContentContainer/ContentContainer'

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
