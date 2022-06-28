import className from 'classnames';

type ICareersRowProps = {
  title: string;
  link: string;
  children?: React.ReactNode;
};

const CareersRow = (props: ICareersRowProps) => {
  const careersRowClass = className('flex', 'flex-wrap', 'items-top');

  return (
    <div className={careersRowClass}>
      <div className="w-full text-center px-10 py-12 bg-primary-100 rounded flex flex-col justify-center">
        <h3 className="text-3xl text-gray-900 font-semibold redhat">
          {props.title}
        </h3>
        <div className="mt-6 text-l mb-10">{props.children}</div>
        <div className="ml-auto mr-auto">
          <a href={props.link}>
            <button className="bg-secondary-600 hover:bg-secondary-800 text-white font-bold py-2 px-4 rounded">
              Apply Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export { CareersRow };
