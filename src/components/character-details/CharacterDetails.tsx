import { ICharacterDetailsProps, IDetailListProps } from '.';

const DetailList = ({ title, items }: IDetailListProps) => {
  return (
    <div
      className="flex-1 mx-2 mb-4"
      style={{
        backgroundImage:
          'url(https://hindutrend.com/wp-content/uploads/2020/01/Avengers-tower-HD-Wallpaper.jpg)',
      }}
    >
      <div
        className="px-8 py-4 h-full"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      >
        <h3 className="font-bold text-2xl text-center mb-4 text-primaryRed">{title}</h3>
        {items.length ? (
          <ul className="cursor-pointer">
            {items.map((item) => (
              <li className="text-white">
                <a href={item.resourceURI}>{item.name}</a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-primaryRed">No {title} Available</div>
        )}
      </div>
    </div>
  );
};

export default function CharacterDetails({
  character,
}: ICharacterDetailsProps) {
  const listData = [
    {
      title: 'Comics',
      data: character.comics.items,
    },
    {
      title: 'Stories',
      data: character.stories.items,
    },
    {
      title: 'Events',
      data: character.events.items,
    },
    {
      title: 'Series',
      data: character.series.items,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between align-center mt-8">
      {listData.map((item) => (
        <DetailList title={item.title} items={item.data} />
      ))}
    </div>
  );
}
