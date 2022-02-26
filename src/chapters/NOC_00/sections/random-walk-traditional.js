import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import SyntaxHighlighterWrapper from '../../../components/SyntaxHighlightWrapper';
import GenericWrapper from '../../../components/GenericWrapper';

const RandomWalkTraditional = () => {
  const sketch = (p5) => {
    let walker;
    class Walker {
      constructor() {
        this.x = p5.width / 2;
        this.y = p5.height / 2;
        this.color = 0;
      }

      randomColor() {
        let color = p5.floor(p5.random() * 16777215).toString(16);
        this.color = `#${color}`;
      }

      render() {
        p5.stroke(this.color);
        p5.strokeWeight(10);
        p5.point(this.x, this.y);
      }

      step() {
        const choice = p5.floor(p5.random(4));
        if (choice === 0) {
          this.x += 3;
        } else if (choice == 1) {
          this.x -= 3;
        } else if (choice == 2) {
          this.y += 3;
        } else {
          this.y -= 3;
        }
        this.randomColor();
        this.x = p5.constrain(this.x, 0, p5.width - 1);
        this.y = p5.constrain(this.y, 0, p5.height - 1);
      }
    }

    p5.setup = () => {
      p5.createCanvas(640, 360);
      walker = new Walker();
      p5.background('#e7f1ff');
    };

    p5.draw = () => {
      walker.step();
      walker.render();
    };
  };

  const codeString = `
  const RandomWalkTraditional = () => {
    const sketch = (p5) => {
      let walker;
      class Walker {
        constructor() {
          this.x = p5.width / 2;
          this.y = p5.height / 2;
          this.color = 0;
        }
  
        randomColor() {
          let color = p5.floor(p5.random() * 16777215).toString(16);
          this.color = color;
        }
  
        render() {
          p5.stroke(this.color.r, this.color.g, this.color.b, this.color.a);
          p5.strokeWeight(10);
          p5.point(this.x, this.y);
        }
  
        step() {
          const choice = p5.floor(p5.random(4));
          if (choice === 0) {
            this.x += 3;
          } else if (choice == 1) {
            this.x -= 3;
          } else if (choice == 2) {
            this.y += 3;
          } else {
            this.y -= 3;
          }
          this.randomColor();
          this.x = p5.constrain(this.x, 0, p5.width - 1);
          this.y = p5.constrain(this.y, 0, p5.height - 1);
        }
      }
  
      p5.setup = () => {
        p5.createCanvas(640, 360);
        walker = new Walker();
        p5.background(127);
      };
  
      p5.draw = () => {
        walker.step();
        walker.render();
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

export default RandomWalkTraditional;
