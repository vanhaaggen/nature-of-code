import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import SyntaxHighlighterWrapper from '../../../components/SyntaxHighlightWrapper';
import GenericWrapper from '../../../components/GenericWrapper';

const RandomWalkTendToRight = () => {
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
        p5.strokeWeight(5);
        p5.point(this.x, this.y);
      }

      step() {
        const r = p5.random(1);
        if (r < 0.4) {
          this.x += 3;
          this.randomColor();
        } else if (r < 0.6) {
          this.x -= 3;
          this.randomColor();
        } else if (r < 0.8) {
          this.y += 3;
          this.randomColor();
        } else {
          this.y -= 3;
          this.randomColor();
        }
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
          const r = p5.random(1);
        if (r < 0.4) {
          this.x += 3;
          this.randomColor();
        } else if (r < 0.6) {
          this.x -= 3;
          this.randomColor();
        } else if (r < 0.8) {
          this.y += 3;
          this.randomColor();
        } else {
          this.y -= 3;
          this.randomColor();
        }
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

const RandomWalk50PercentDesviation = () => {
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
        p5.strokeWeight(2);
        p5.point(this.x, this.y);
      }

      step() {
        const choice = p5.floor(p5.random(10));
        if (choice < 5) {
          const r = p5.random(1);
          if (r < 0.5) {
            this.x += this.x - p5.mouseX + 3;
            this.y += this.y - p5.mouseY + 3;
          } else {
            this.x -= this.x - p5.mouseX + 3;
            this.y -= this.y - p5.mouseY + 3;
          }
          this.randomColor();
        } else if (choice < 6) {
          this.x += 3;
          this.randomColor();
        } else if (choice < 7) {
          this.x -= 3;
          this.randomColor();
        } else if (choice < 8) {
          this.y += 3;
          this.randomColor();
        } else {
          this.y -= 3;
          this.randomColor();
        }
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
  const RandomWalk50PercentDesviation = () => {
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
          this.color = '#{color}';
        }
  
        render() {
          p5.stroke(this.color);
          p5.strokeWeight(2);
          p5.point(this.x, this.y);
        }
  
        step() {
          const choice = p5.floor(p5.random(10));
          if (choice < 5) {
            const r = p5.random(1);
            if (r < 0.5) {
              this.x += this.x - p5.mouseX + 3;
              this.y += this.y - p5.mouseY + 3;
            } else {
              this.x -= this.x - p5.mouseX + 3;
              this.y -= this.y - p5.mouseY + 3;
            }
            this.randomColor();
          } else if (choice < 6) {
            this.x += 3;
            this.randomColor();
          } else if (choice < 7) {
            this.x -= 3;
            this.randomColor();
          } else if (choice < 8) {
            this.y += 3;
            this.randomColor();
          } else {
            this.y -= 3;
            this.randomColor();
          }
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
  `;
  return (
    <GenericWrapper>
      <ReactP5Wrapper sketch={sketch} />
      <SyntaxHighlighterWrapper>{codeString}</SyntaxHighlighterWrapper>
    </GenericWrapper>
  );
};

const RandomWalks = () => {
  return (
    <>
      <div>
        <h5 className="border-bottom">
          Random Walk with tendency to the right
        </h5>
        <RandomWalkTendToRight />
      </div>
      <div>
        <h5 className="border-bottom">Random Walk 50% desviation</h5>
        <RandomWalk50PercentDesviation />
      </div>
    </>
  );
};
export default RandomWalks;
