
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Awards } from './Awards';
import { Careers } from './Careers';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { PeopleFeatures } from './PeopleFeatures';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-700">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <Awards />
    <PeopleFeatures />
    <Careers />
    {/* <Banner /> */}
    
    <Footer />
  </div>
);

export { Base };
