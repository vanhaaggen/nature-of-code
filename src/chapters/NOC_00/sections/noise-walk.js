import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import GenericWrapper from '../../../components/GenericWrapper';
import SyntaxHighlighterWrapper from '../../../components/SyntaxHighlightWrapper';

const NoiseWalker = () => {
  const sketch = (p5) => {};
  const codeString = ``;
  return (
    <GenericWrapper>
      <ReactP5Wrapper sketch={sketch} />
      <SyntaxHighlighterWrapper>{codeString}</SyntaxHighlighterWrapper>
    </GenericWrapper>
  );
};

export default NoiseWalker;
