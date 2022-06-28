import { CareersRow } from '../careers/CareersRow';
import { Section } from '../layout/Section';

const Careers = () => (
  <Section title="Careers" id="careers">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      <CareersRow
        title="SOS App Developer & Software Engineer Internship"
        link="https://forms.gle/5Wej59jA6LMHdrMf6"
      >
        <div className="mb-8">
          <h3 className="font-semibold mb-4 text-xl text-primary-500">
            Job Scopes and Responsibilities
          </h3>
          <ul className="list-disc text-left list-outside">
            <li>Build and iterate core features on our App in Flutter.</li>
            <li>Write code with good clarity and structure.</li>
            <li>
              Enhance the app with smooth integration of Firebase services.
            </li>
            <li>
              Test out the smooth implementation of features on both iOS and
              Android.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-xl text-primary-500">
            Required Skills
          </h3>
          <ul className="list-disc text-left list-outside">
            <li>Strong technical background with some experience in coding.</li>
            <li>Familiar with OOP.</li>
            <li>Willing to continuously learn and apply new knowledge.</li>
            <li>Good analytical mind with an eagerness to solve problems.</li>
          </ul>
        </div>
      </CareersRow>
      <CareersRow
        title="SOS App Video Communications & Network Internship"
        link="https://forms.gle/hpXFqKsFfjmJNCwGA"
      >
        <div className="mb-8">
          <h3 className="font-semibold mb-4 text-xl text-primary-500">
            Job Scopes and Responsibilities
          </h3>
          <ul className="list-disc text-left list-outside">
            <li>
              Build and iterate on the video and screen sharing features with
              WebRTC.
            </li>
            <li>Write code with good clarity and structure.</li>
            <li>
              Enhance the app with smooth integration between the app and
              network server.
            </li>
            <li>
              Test out the implementation of features on both iOS and Android.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-xl text-primary-500">
            Required Skills
          </h3>
          <ul className="list-disc text-left list-outside">
            <li>Strong technical background with some experience in coding.</li>
            <li>Familiar with OOP.</li>
            <li>Willing to continuously learn and apply new knowledge.</li>
            <li>Good analytical mind with an eagerness to solve problems.</li>
            <li>Knowledge in Networking would be a plus.</li>
          </ul>
        </div>
      </CareersRow>
      <CareersRow
        title="SOS App Designer & UI/UX Internship"
        link="https://forms.gle/KPA4qndaU4uuEue89"
      >
        <div className="mb-8">
          <h3 className="font-semibold mb-4 text-xl text-primary-500">
            Job Scopes and Responsibilities
          </h3>
          <ul className="list-disc text-left list-outside">
            <li>Have an understanding of the needs of our target users.</li>
            <li>Predict and test the behavior and action of users.</li>
            <li>
              Design and iterate the pages in the app with those needs in mind.
            </li>
            <li>
              Think through and simulate what is a good flow for our users.
            </li>
            <li>Test out the UI UX flow with potential users.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-xl text-primary-500">
            Required Skills
          </h3>
          <ul className="list-disc text-left list-outside">
            <li>Willing to continuously learn and apply new knowledge.</li>
            <li>Have a good eye for design.</li>
            <li>Knows how to prototype in Figma/Adobe XD.</li>
            <li>Have some experience in designing.</li>
          </ul>
        </div>
      </CareersRow>
    </div>
  </Section>
);

export { Careers };
