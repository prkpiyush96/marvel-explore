import { useHistory } from 'react-router-dom';
import { APP_ROUTES } from '../utils/constants';

export default function Sidebar() {
  const history = useHistory();

  const handleClick = (path: string) => {
    history.push(path);
  };

  return (
    <aside className="tw-bg-primaryRed tw-p-2 tw-min-h-screen">
      <div
        className="tw-px-20 tw-py-4 tw-text-white tw-cursor-pointer"
        onClick={() => handleClick(APP_ROUTES.characters)}
      >
        Characters
      </div>
      <div
        className="tw-px-20 tw-py-4 tw-text-white tw-cursor-pointer"
        onClick={() => handleClick('test')}
      >
        Comics
      </div>
      <div
        className="tw-px-20 tw-py-4 tw-text-white tw-cursor-pointer"
        onClick={() => handleClick('test')}
      >
        Creators
      </div>
      <div
        className="tw-px-20 tw-py-4 tw-text-white tw-cursor-pointer"
        onClick={() => handleClick('test')}
      >
        Events
      </div>
      <div
        className="tw-px-20 tw-py-4 tw-text-white tw-cursor-pointer"
        onClick={() => handleClick('test')}
      >
        Series
      </div>
      <div
        className="tw-px-20 tw-py-4 tw-text-white tw-cursor-pointer"
        onClick={() => handleClick('test')}
      >
        Stories
      </div>
    </aside>
  );
}
