import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import GenericWrapper from '../../../components/GenericWrapper';
import SyntaxHighlighterWrapper from '../../../components/SyntaxHighlightWrapper';

const NoiseWalker = () => {
  const sketch = (p5) => {
    let color = p5.color(242, 26, 139);
    let walker;

    p5.setup = () => {
      p5.createCanvas(640, 360);
      walker = new Walker();
      p5.background('#e7f1ff');
    };

    p5.draw = () => {
      walker.step();
      walker.render();
    };
    class Walker {
      constructor() {
        this.position = p5.createVector(p5.width / 2, p5.height / 2);
        this.noiseOffSet = p5.createVector(p5.random(1000), p5.random(1000));
      }

      render() {
        const rColor = p5.floor(p5.random(255));
        color.setRed(rColor);
        p5.stroke(color);
        p5.strokeWeight(2);
        p5.ellipse(this.position.x, this.position.y, 48, 48);
      }

      step() {
        this.position.x = p5.map(
          p5.noise(this.noiseOffSet.x),
          0,
          1,
          0,
          p5.width
        );
        this.position.y = p5.map(
          p5.noise(this.noiseOffSet.y),
          0,
          1,
          0,
          p5.height
        );
        this.noiseOffSet.add(0.01, 0.01, 0);
      }
    }
  };
  const codeString = `
  const NoiseWalker = () => {
    const sketch = (p5) => {
      let color = p5.color(242, 26, 139);
      let walker;
  
      p5.setup = () => {
        p5.createCanvas(640, 360);
        walker = new Walker();
        p5.background('#e7f1ff');
      };
  
      p5.draw = () => {
        walker.step();
        walker.render();
      };
      class Walker {
        constructor() {
          this.position = p5.createVector(p5.width / 2, p5.height / 2);
          this.noiseOffSet = p5.createVector(p5.random(1000), p5.random(1000));
        }
  
        render() {
          const rColor = p5.floor(p5.random(255));
          color.setRed(rColor);
          p5.stroke(color);
          p5.strokeWeight(2);
          p5.ellipse(this.position.x, this.position.y, 48, 48);
        }
  
        step() {
          this.position.x = p5.map(
            p5.noise(this.noiseOffSet.x),0,1,0,p5.width);
          this.position.y = p5.map(
            p5.noise(this.noiseOffSet.y),0,1,0,p5.height);
          this.noiseOffSet.add(0.01, 0.01, 0);
        }
      }
    };
  `;
  return (
    <GenericWrapper>
      <ReactP5Wrapper sketch={sketch} />
      <SyntaxHighlighterWrapper>{codeString}</SyntaxHighlighterWrapper>
    </GenericWrapper>
  );
};

export default NoiseWalker;
