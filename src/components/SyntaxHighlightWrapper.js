import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import allyLight from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light';

SyntaxHighlighter.registerLanguage('javascript', js);

const SyntaxHighlighterWrapper = ({ children }) => {
  return (
    <SyntaxHighlighter wrapLongLines style={allyLight}>
      {children}
    </SyntaxHighlighter>
  );
};

export default SyntaxHighlighterWrapper;
