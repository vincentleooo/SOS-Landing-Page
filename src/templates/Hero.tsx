import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#app">
            <a>App</a>
          </Link>
        </li>
        <li>
          <Link href="/#people">
            <a>People</a>
          </Link>
        </li>
        <li>
          <Link href="/#careers">
            <a>Careers</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500 redhat">
              Silver Online Service
            </span>
          </>
        }
        description="Digital independence for seniors."
        button={
          <Link href="https://t.me/Silvers_sos">
            <a>
              <Button xl>Join Us Now!</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
