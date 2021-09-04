import { useHistory } from 'react-router-dom';
import { APP_ROUTES } from '../utils/constants';

export default function Sidebar() {
  const history = useHistory();

  const handleClick = (path: string) => {
    history.push(path);
  };

  return (
    <aside className="bg-primaryRed fixed p-2 min-h-screen">
      <div
        className="px-20 py-4 text-white cursor-pointer"
        onClick={() => handleClick(APP_ROUTES.characters)}
      >
        Characters
      </div>
      <div
        className="px-20 py-4 text-white cursor-pointer"
        onClick={() => handleClick('test')}
      >
        Comics
      </div>
      <div
        className="px-20 py-4 text-white cursor-pointer"
        onClick={() => handleClick('test')}
      >
        Creators
      </div>
      <div
        className="px-20 py-4 text-white cursor-pointer"
        onClick={() => handleClick('test')}
      >
        Events
      </div>
      <div
        className="px-20 py-4 text-white cursor-pointer"
        onClick={() => handleClick('test')}
      >
        Series
      </div>
      <div
        className="px-20 py-4 text-white cursor-pointer"
        onClick={() => handleClick('test')}
      >
        Stories
      </div>
    </aside>
  );
}
