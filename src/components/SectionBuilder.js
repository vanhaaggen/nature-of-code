import React, { useEffect, useContext } from 'react';

import { Accordion, AccordionContext } from 'react-bootstrap';

const ContextAwareToggle = ({ children, onChange }) => {
  const { activeEventKey } = useContext(AccordionContext);
  useEffect(() => {
    onChange(activeEventKey);
  }, [activeEventKey]);
  return <>{children}</>;
};

const SectionBuilder = ({
  number,
  title,
  section,
  currentActiveKey = () => {}
}) => {
  return (
    <Accordion.Item eventKey={number}>
      <Accordion.Header>
        <ContextAwareToggle onChange={currentActiveKey}>
          {title}
        </ContextAwareToggle>
      </Accordion.Header>
      <Accordion.Body>{section}</Accordion.Body>
    </Accordion.Item>
  );
};

export default SectionBuilder;
