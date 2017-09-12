import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';

export default () => (
  <Background>
    <Header />
  </Background>
) 

const Background = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    background: blue;
`
