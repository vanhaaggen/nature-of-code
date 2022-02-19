import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import SectionBuilder from './components/SectionBuilder';
import chapters from './chapters';

import './styles.scss';
const App = () => {
  const [loadSection, setLoadSection] = useState(null);
  return (
    <>
      {chapters.map((chapter) => (
        <React.Fragment key={chapter.number}>
          <SectionBuilder
            number={chapter.number}
            title={chapter.title}
            section={chapter.sections.map((section) => {
              const handleActiveKey = (activeKey) => {
                if (activeKey === section.number) {
                  setLoadSection([section.component]);
                } else {
                  setLoadSection([]);
                }
              };
              return (
                <React.Fragment key={section.number}>
                  <SectionBuilder
                    number={section.number}
                    title={section.title}
                    section={loadSection}
                    currentActiveKey={handleActiveKey}
                  />
                </React.Fragment>
              );
            })}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default App;
