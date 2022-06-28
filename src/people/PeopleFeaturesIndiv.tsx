import className from 'classnames';
import { useRouter } from 'next/router';

type IPeopleFeaturesIndivProps = {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
};

const PeopleFeaturesIndiv = (props: IPeopleFeaturesIndivProps) => {
  const peopleFeaturesClass = className('items-center');

  const router = useRouter();

  return (
    <div className={peopleFeaturesClass}>
      <div className="p-6 text-center">
        <div className="w-2/3 ml-auto mr-auto mb-3">
          <img
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
            className="rounded-full"
          />
        </div>
        <h3 className="text-2xl text-gray-900 font-semibold redhat w-auto">
          {props.name}
        </h3>
        <div className="text-xl leading-6">{props.title}</div>
      </div>
    </div>
  );
};

export { PeopleFeaturesIndiv };
