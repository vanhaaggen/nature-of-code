import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

const RandomWalkTraditional = () => {
  const sketch = (p5) => {
    let walker;

    class Walker {
      constructor() {
        this.x = p5.width / 2;
        this.y = p5.height / 2;
        this.color = 0;
      }

      r() {
        let r = p5.random(255); // r is a random number between 0 - 255
        let g = p5.random(100, 200); // g is a random number betwen 100 - 200
        let b = p5.random(100); // b is a random number between 0 - 100
        let a = p5.random(200, 255); // a is a random number between 200 - 255
        this.color = { r, g, b, a };
      }

      render() {
        p5.stroke(this.color.r, this.color.g, this.color.b);
        p5.strokeWeight(10);
        p5.point(this.x, this.y);
      }

      step() {
        const choice = p5.floor(p5.random(4));
        if (choice === 0) {
          this.x += 3;
          this.r();
        } else if (choice == 1) {
          this.x -= 3;
          this.r();
        } else if (choice == 2) {
          this.y += 3;
          this.r();
        } else {
          this.y -= 3;
          this.r();
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
  return <ReactP5Wrapper sketch={sketch} />;
};

export default RandomWalkTraditional;
