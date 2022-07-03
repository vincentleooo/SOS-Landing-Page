// import Image from 'next/image';

// import Create4Good from '../../public/assets/images/people/c4g.jpeg';
import { Section } from '../layout/Section';
import { PeopleFeaturesIndiv } from '../people/PeopleFeaturesIndiv';

const PeopleFeatures = () => (
  <Section title="Our team" id="people">
    {/* <Image src={Create4Good} alt="Create4Good Programme"></Image> */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 mt-8">
      <PeopleFeaturesIndiv
        name="Tan Zen Sheen"
        title="Co-Founder, Advisor for Outreaching and UI/UX"
        image="assets/images/people/sheen.jpeg"
        imageAlt="Tan Zen Sheen"
      />
      <PeopleFeaturesIndiv
        name="Claudia Lai"
        title="Co-Founder, Advisor for Marketing"
        image="assets/images/people/claudia.jpeg"
        imageAlt="Claudia Lai"
      />
      <PeopleFeaturesIndiv
        name="Darren Chow"
        title="Co-Founder, Advisor for Development"
        image="assets/images/people/darren.jpeg"
        imageAlt="Darren Chow"
      />
      <PeopleFeaturesIndiv
        name="Joseph Yeo"
        title="Outreaching"
        image="assets/images/people/joseph.jpeg"
        imageAlt="Joseph Yeo"
      />
      <PeopleFeaturesIndiv
        name="Vinny"
        title="Head of Development"
        image="assets/images/people/vinny.jpeg"
        imageAlt="Vinny"
      />
      <PeopleFeaturesIndiv
        name="Reina Peh"
        title="Head of Marketing"
        image="assets/images/people/reina.jpg"
        imageAlt="Reina Peh"
      />
      <PeopleFeaturesIndiv
        name="Vincent Leonardo"
        title="Marketing"
        image="assets/images/people/vincent.jpeg"
        imageAlt="Vincent Leonardo"
      />
      <PeopleFeaturesIndiv
        name="Taanish"
        title="Development"
        image="assets/images/people/taanish.jpeg"
        imageAlt="Taanish"
      />
      <PeopleFeaturesIndiv
        name="Shu Yi"
        title="Project Management"
        image="assets/images/people/shuyi.jpg"
        imageAlt="Shu Yi"
      />
    </div>
  </Section>
);

export { PeopleFeatures };
