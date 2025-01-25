interface Story {
  title: string;
  publishedOn: string;
}

interface TopStoriesProps {
  stories: Story[];
}

const TopStories: React.FC<TopStoriesProps> = ({ stories }) => {
  return (
    <div className="w-full bg-white pt-[15px]">
      <h2 className="text-red-600 text-[30px] h-[45px] font-medium border-b pb-[10px] w-full text-center">
        TOP STORIES
      </h2>

      <ul className="w-full">
        {stories.map((story, index) => (
          <li key={index} className="border-b px-[10px] last:border-none cursor-pointer">
            <h3
              className="text-[16px] font-semibold text-[#333] hover:text-red-600 transition h-[47px] px-[10px] pt-[15px] leading-none"
            >
              {story.title}
            </h3>

            <p className="text-sm text-[#808080] mt-[5px] px-[10px] py-[5px]">
              Published On: {story.publishedOn}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopStories;
