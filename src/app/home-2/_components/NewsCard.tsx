import Image from "next/image"

type NewsCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  watchLink: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ imageUrl, title, description, watchLink }) => {
  return (
    <div className="mt-[10px]">
      <div className="relative w-full h-48 bg-gray-100 h-[200px]">
        {/* <Image 
          src={imageUrl} 
          alt={title}
          layout="fill" 
          objectFit="cover" 
          className="rounded-t"
        /> */}
      </div>
      <div className="py-[5px] px-[10px]">
        <h2 className="text-lg font-bold text-gray-800 mb-2 leading-none line-clamp-2">{title}</h2>
        <p className="text-gray-600 text-lg mb-4 leading-none line-clamp-2">{description}</p>
        <a 
          href={watchLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-red-500 text-lg font-semibold py-[5px]"
        >
          WATCH NOW
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
