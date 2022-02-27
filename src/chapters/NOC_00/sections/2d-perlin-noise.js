import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import GenericWrapper from '../../../components/GenericWrapper';
import SyntaxHighlighterWrapper from '../../../components/SyntaxHighlightWrapper';

const TwoDPerlinNoise = () => {
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(640, 360);
      p5.background(150);
    };

    p5.draw = () => {
      // Tell p5 we will work with pixels
      p5.loadPixels();
      let xoff = 0.0;

      // Updating pixels with perlin noise
      for (let x = 0; x < p5.width; x++) {
        let yoff = 0.0;

        for (let y = 0; y < p5.height; y++) {
          // Calculating brightness value for noise
          let bright = p5.map(p5.noise(xoff, yoff), 0, 1, 0, 255);
          p5.set(x, y, p5.floor(bright));
          yoff += 0.01; // Incrementing y-offset perlins noise
        }
        xoff += 0.01; // Incrementing x-offset perlins noise
      }

      p5.updatePixels();
    };
  };

  const codeString = `
    
    `;
  return (
    <GenericWrapper>
      <ReactP5Wrapper sketch={sketch} />
      <SyntaxHighlighterWrapper>{codeString}</SyntaxHighlighterWrapper>
    </GenericWrapper>
  );
};

export default TwoDPerlinNoise;
