import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import GenericWrapper from '../../../components/GenericWrapper';
import SyntaxHighlighterWrapper from '../../../components/SyntaxHighlightWrapper';

const Gaussian = () => {
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(640, 360);
      p5.background('#e7f1ff');
    };
    p5.draw = () => {
      let xloc = p5.randomGaussian();
      // randomGaussian returns a mean of 0 and a standard deviation of 1.
      const standardDeviation = 60;
      const mean = p5.width / 2; // Define mean value (middle of screen along the x-axis)
      xloc = xloc * standardDeviation + mean; // Scale the gaussian random number by standard deviation and mean.

      p5.fill(0, 10);
      p5.noStroke();
      p5.ellipse(xloc, p5.height / 2, 16, 16);
    };
  };
  const codeString = `
  const Gaussian = () => {
    const sketch = (p5) => {
      p5.setup = () => {
        p5.createCanvas(640, 360);
        p5.background('#e7f1ff');
      };
      p5.draw = () => {
        let xloc = p5.randomGaussian();
        // randomGaussian returns a mean of 0 and a standard deviation of 1.
        const standardDeviation = 60;
        const mean = p5.width / 2; // Define mean value (middle of screen along the x-axis)
        xloc = xloc * standardDeviation + mean; // Scale the gaussian random number by standard deviation and mean.

        p5.fill(0, 10);
        p5.noStroke();
        p5.ellipse(xloc, p5.height / 2, 16, 16);
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

const GaussianColor = () => {
  const sketch = (p5) => {
    let color = p5.color(242, 26, 139);
    p5.setup = () => {
      p5.createCanvas(640, 360);
      p5.background('#e7f1ff');
    };
    p5.draw = () => {
      let xloc = p5.randomGaussian();
      const rColor = p5.floor(p5.random(255));
      const standardDeviation = 60;
      const mean = p5.width / 2;
      xloc = xloc * standardDeviation + mean;

      color.setRed(rColor);
      p5.fill(color);
      p5.noStroke();
      p5.ellipse(xloc, p5.height / 2, 16, 16);
    };
  };
  const codeString = `
  const GaussianColor = () => {
    const sketch = (p5) => {
      let color = p5.color(242, 26, 139);
      p5.setup = () => {
        p5.createCanvas(640, 360);
        p5.background('#e7f1ff');
      };
      p5.draw = () => {
        let xloc = p5.randomGaussian();
        const rColor = p5.floor(p5.random(255));
        const standardDeviation = 60;
        const mean = p5.width / 2;
        xloc = xloc * standardDeviation + mean;
  
        color.setRed(rColor);
        p5.fill(color);
        p5.noStroke();
        p5.ellipse(xloc, p5.height / 2, 16, 16);
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

const GaussianRSize = () => {
  const sketch = (p5) => {
    let color = p5.color(242, 26, 139);
    let gSplatter;
    class GSplatter {
      constructor() {
        this.sd = 20;
        this.x = p5.width / 2;
        this.y = p5.heigth / 2;
        this.size = 1;
      }

      render() {
        const rColor = p5.floor(p5.random(255));
        let xloc = p5.randomGaussian();
        let yloc = p5.randomGaussian();
        xloc = xloc * this.sd + this.x;
        yloc = yloc * this.sd + this.y;

        color.setRed(rColor);
        p5.fill(color);
        p5.noStroke();
        p5.ellipse(xloc, yloc, this.size, this.size);
      }

      step() {
        const r = p5.random(1);
        const rSize = p5.floor(p5.random(4));
        // Half the time the Standart deviation is increased otherwise it decreases
        // this makes the points look like they splater to the edges.
        if (r < 0.5) {
          this.sd += 2;
          this.size += rSize;
        } else {
          this.sd -= 2;
          this.size -= rSize;
          this.x = p5.width / 2;
          this.y = p5.height / 2;
        }
      }
    }

    p5.setup = () => {
      p5.createCanvas(640, 360);
      gSplatter = new GSplatter();
      p5.background('#e7f1ff');
    };

    p5.draw = () => {
      gSplatter.step();
      gSplatter.render();
    };
  };
  const codeString = `
  const sketch = (p5) => {
    let color = p5.color(242, 26, 139);
    let gSplatter;
    class GSplatter {
      constructor() {
        this.sd = 20;
        this.x = p5.width / 2;
        this.y = p5.heigth / 2;
        this.size = 1;
      }

      render() {
        const rColor = p5.floor(p5.random(255));
        let xloc = p5.randomGaussian();
        let yloc = p5.randomGaussian();
        xloc = xloc * this.sd + this.x;
        yloc = yloc * this.sd + this.y;

        color.setRed(rColor);
        p5.fill(color);
        p5.noStroke();
        p5.ellipse(xloc, yloc, this.size, this.size);
      }

      step() {
        const r = p5.random(1);
        const rSize = p5.floor(p5.random(4));
        // Half the time the Standart deviation is increased otherwise it decreases
        // this makes the points look like they splater to the edges.
        if (r < 0.5) {
          this.sd += 2;
          this.size += rSize;
        } else {
          this.sd -= 2;
          this.size -= rSize;
          this.x = p5.width / 2;
          this.y = p5.height / 2;
        }
      }
    }

    p5.setup = () => {
      p5.createCanvas(640, 360);
      gSplatter = new GSplatter();
      p5.background('#e7f1ff');
    };

    p5.draw = () => {
      gSplatter.step();
      gSplatter.render();
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

const GaussianSplatter = () => {
  const sketch = (p5) => {
    let color = p5.color(242, 26, 139);
    let gSplatter;
    class GSplatter {
      constructor() {
        this.sd = 20;
        this.x = p5.width / 2;
        this.y = p5.heigth / 2;
        this.size = 4;
      }

      render() {
        const rColor = p5.floor(p5.random(255));
        let xloc = p5.randomGaussian();
        let yloc = p5.randomGaussian();
        xloc = xloc * this.sd + this.x;
        yloc = yloc * this.sd + this.y;

        color.setRed(rColor);
        p5.fill(color);
        p5.noStroke();
        p5.ellipse(xloc, yloc, this.size, this.size);
      }

      step() {
        const r = p5.random(1);
        // Half the time the Standart deviation is increased otherwise it decreases
        // this makes the points look like they splater to the edges.
        if (r < 0.5) {
          this.sd += 2;
        } else {
          this.sd -= 2;
          this.x = p5.width / 2;
          this.y = p5.height / 2;
        }
      }
    }

    p5.setup = () => {
      p5.createCanvas(640, 360);
      gSplatter = new GSplatter();
      p5.background('#e7f1ff');
    };

    p5.draw = () => {
      gSplatter.step();
      gSplatter.render();
    };
  };
  const codeString = `
  const GaussianSplatter = () => {
    const sketch = (p5) => {
      let color = p5.color(242, 26, 139);
      let gSplatter;
      class GSplatter {
        constructor() {
          this.sd = 20;
          this.x = p5.width / 2;
          this.y = p5.heigth / 2;
          this.size = 4;
        }
  
        render() {
          const rColor = p5.floor(p5.random(255));
          let xloc = p5.randomGaussian();
          let yloc = p5.randomGaussian();
          xloc = xloc * this.sd + this.x;
          yloc = yloc * this.sd + this.y;
  
          color.setRed(rColor);
          p5.fill(color);
          p5.noStroke();
          p5.ellipse(xloc, yloc, this.size, this.size);
        }
  
        step() {
          const r = p5.random(1);
          // Half the time the Standart deviation is increased otherwise it decreases
          // this makes the points look like they splater to the edges.
          if (r < 0.5) {
            this.sd += 2;
          } else {
            this.sd -= 2;
            this.x = p5.width / 2;
            this.y = p5.height / 2;
          }
        }
      }
  
      p5.setup = () => {
        p5.createCanvas(640, 360);
        gSplatter = new GSplatter();
        p5.background('#e7f1ff');
      };
  
      p5.draw = () => {
        gSplatter.step();
        gSplatter.render();
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

const GaussianDistribution = () => {
  const [key, setKey] = useState('normal');
  return (
    <Tabs
      id="controlled"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3">
      <Tab eventKey="normal" title="NDRN">
        <p className="border-bottom">Normal distribution of random numbers.</p>
        <Gaussian />
      </Tab>
      <Tab eventKey="palette" title="NDRN color">
        <p>NDRN color palette</p>
        <GaussianColor />
      </Tab>
      <Tab eventKey="splatter" title="NDRN splatter">
        <p>NDRN splatter effect from center to the edges</p>
        <GaussianSplatter />
      </Tab>
      <Tab eventKey="size" title="NDRN size">
        <p>NDRN unifiying splatter effect with increasing random size</p>
        <GaussianRSize />
      </Tab>
    </Tabs>
  );
};

export default GaussianDistribution;
