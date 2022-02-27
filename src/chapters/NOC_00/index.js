import RandomDistribution from './sections/random-distribution';
import RandomWalkTraditional from './sections/random-walk-traditional';
import RandomWalkRightTrend from './sections/random-walk-tends-to-right';
import Gaussian from './sections/gaussian';
import NoiseWalk from './sections/noise-walk';
import TwoDPerlinNoise from './sections/2d-perlin-noise';

const sections = [
  {
    number: '001',
    title: 'Traditional random walk',
    component: <RandomWalkTraditional />
  },
  {
    number: '002',
    title: 'Random distribution',
    component: <RandomDistribution />
  },
  {
    number: '003',
    title: 'Traditional random walk with right trend',
    component: <RandomWalkRightTrend />
  },
  { number: '004', title: 'Gaussian', component: <Gaussian /> },
  { number: '005', title: 'Noise walk', component: <NoiseWalk /> }
  //{ number: '006', title: '2D Perlin Noise', component: <TwoDPerlinNoise /> }
];

export default sections;
