import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import allyLight from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light';
import styled from 'styled-components';

SyntaxHighlighter.registerLanguage('javascript', js);

const TextSize = styled.div`
  font-size: 0.6rem;
`;

const SyntaxHighlighterWrapper = ({ children }) => {
  return (
    <TextSize>
      <SyntaxHighlighter wrapLongLines style={allyLight}>
        {children}
      </SyntaxHighlighter>
    </TextSize>
  );
};

export default SyntaxHighlighterWrapper;
