import React, { useState } from 'react';
import styled from 'styled-components';
import { Accordion } from 'react-bootstrap';
import SectionBuilder from './components/SectionBuilder';
import chapters from './chapters';

import './styles.scss';

const AppWrapper = styled.div`
  margin: 1rem 1.5rem;
`;

const ColorLink = styled.a`
  color: ${({ color }) => color};
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: ${({ color }) => color};
  }
  text-decoration: none;
`;
const P5_URL = 'https://www.p5js.org/';
const REACT_URL = 'https://www.reactjs.org/';

const App = () => {
  const [loadSection, setLoadSection] = useState([]);
  return (
    <AppWrapper>
      <section>
        <h2>The Nature of Code</h2>
        <p>
          <cite>Simulating natural systems with processing</cite> by Daniel
          Shiffman
        </p>
        <p>
          Summary of the books examples using{' '}
          <ColorLink color="#ed225d" href={P5_URL} target="_blank">
            P5js
          </ColorLink>{' '}
          wrapped in{' '}
          <ColorLink color="#61dafb" href={REACT_URL} target="_blank">
            React
          </ColorLink>
        </p>
      </section>
      <Accordion>
        {chapters.map((chapter) => (
          <React.Fragment key={chapter.number}>
            <SectionBuilder
              number={chapter.number}
              title={chapter.title}
              section={
                <Accordion>
                  {chapter.sections.map((section) => {
                    const handleActiveKey = (activeKey) => {
                      if (activeKey === section.number) {
                        setLoadSection(section.component);
                      }
                      if (activeKey === null) {
                        setLoadSection([]);
                      }
                    };
                    return (
                      <React.Fragment key={section.number}>
                        {loadSection ? (
                          <SectionBuilder
                            number={section.number}
                            title={section.title}
                            section={loadSection}
                            currentActiveKey={handleActiveKey}
                          />
                        ) : (
                          <div></div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </Accordion>
              }
            />
          </React.Fragment>
        ))}
      </Accordion>
    </AppWrapper>
  );
};

export default App;
