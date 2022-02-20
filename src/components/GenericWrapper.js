import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const GenericWrapper = ({ children }) => <Container>{children}</Container>;

export default GenericWrapper;
