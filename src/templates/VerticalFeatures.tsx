import Image from 'next/image';

import FirstPicture from '../../public/assets/images/first-picture.webp';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <>
    <Section
      title="Our vision & mission"
      description="Envisioning a Silver Society where our grandparents can age gracefully in the technologically-advanced world, we created the SOS app."
    >
      <Image src={FirstPicture} alt="How to use"></Image>
      <div className="mt-12 text-xl md:px-20 text-center sm:text-left">
        This easy to use screen-sharing app connects the elderly with someone
        that speaks the same language/dialect as them. Hence this app empowers
        the elderly to be digitally independent at their own convenience,
        without worrying about language barrier as they embark on their tech
        journey and connect with the online community!
      </div>
    </Section>
    <Section
      id="app"
      title="Our App"
      description="The key features present in our app."
    >
      <VerticalFeatureRow
        title="One click voice call"
        description='Seniors simply click a button "SOS" to seek help.'
        image="/assets/images/one-click.png"
        imageAlt="One click voice call"
      />
      <VerticalFeatureRow
        title="Language match-making"
        description="Seniors are connected to a helper that speaks the same language and dialect."
        image="/assets/images/language.jpg"
        imageAlt="Photo by Towfiqu barbhuiya on Unsplash.
        "
        reverse
      />
      <VerticalFeatureRow
        title="Screen sharing"
        description="Clear communication — Volunteers from SOS community views the seniors' phone and directly guides the seniors."
        image="/assets/images/screen.png"
        imageAlt="Screen sharing"
      />
      <VerticalFeatureRow
        title="Direct annotation"
        description="Volunteers from SOS community directly annotate on the seniors' screen."
        image="/assets/images/draw.jpg"
        imageAlt="Photo by Kelly Sikkema on Unsplash.
        "
        reverse
      />
    </Section>
  </>
);

export { VerticalFeatures };
