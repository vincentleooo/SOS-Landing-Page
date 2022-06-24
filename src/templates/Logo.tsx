import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';

  return (
    <Image src="/SOS.webp" width={size} height={size} alt="Main logo"></Image>
  );
};

export { Logo };
