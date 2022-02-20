import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import GenericWrapper from '../../../components/GenericWrapper';
import SyntaxHighlighterWrapper from '../../../components/SyntaxHighlightWrapper';

const RandomDistribution = () => {
  const sketch = (p5) => {
    let randomCounts = [];
    let total = 20;

    p5.setup = () => {
      p5.createCanvas(640, 360);
      for (let i = 0; i < total; i++) {
        randomCounts[i] = 0;
      }
    };

    // const r = () => {
    //   let r = p5.floor(p5.random(100, 255)); // r is a random number between 0 - 255
    //   let g = p5.floor(p5.random(0)); // g is a random number betwen 100 - 200
    //   let b = p5.floor(p5.random(255)); // b is a random number between 0 - 100
    //   let a = p5.random(1); // a is a random number between 200 - 255
    //   return `rgba(${r},${g},${b},${a})`;
    // };

    p5.draw = () => {
      p5.background('#e7f1ff');
      let index = p5.floor(p5.random(total));
      randomCounts[index]++;

      p5.stroke('#f2248b');
      p5.strokeWeight(1);

      let w = p5.width / randomCounts.length;

      for (let x = 0; x < randomCounts.length; x++) {
        p5.fill(255);
        p5.rect(x * w, p5.height - randomCounts[x], w - 1, randomCounts[x]);
      }
    };
  };

  const codeString = `
  const RandomDistribution = () => {
    const sketch = (p5) => {
      let randomCounts = [];
      let total = 20;
  
      p5.setup = () => {
        p5.createCanvas(640, 360);
        for (let i = 0; i < total; i++) {
          randomCounts[i] = 0;
        }
      };
  
      p5.draw = () => {
        p5.background('#e7f1ff');
        let index = p5.floor(p5.random(total));
        randomCounts[index]++;
  
        p5.stroke('#f2248b');
        p5.strokeWeight(1);
  
        let w = p5.width / randomCounts.length;
  
        for (let x = 0; x < randomCounts.length; x++) {
          p5.fill(255);
          p5.rect(x * w, p5.height - randomCounts[x], w - 1, randomCounts[x]);
        }
      };
    };
  `;
  return (
    <GenericWrapper>
      <ReactP5Wrapper sketch={sketch} />
      <SyntaxHighlighterWrapper>{codeString}</SyntaxHighlighterWrapper>
    </GenericWrapper>
  );
};

export default RandomDistribution;
