import NavBar from "./_components/NavBar"
import Logo from "./_components/Logo"
import TopStories from "./_components/TopStories"
import CategoryTitle from "./_components/CategoryTitle";
import NewsCard from "./_components/NewsCard";

// stories data
const stories = [
  {
    title: "Trump uses executive power to reinstate anti-abortion pacts",
    publishedOn: "January 25, 2025, 08:14 PM",
  },
  {
    title: "7-year-old girl in critical condition after attack by classmate’s mother in Caloocan",
    publishedOn: "January 25, 2025, 08:11 PM",
  },
  {
    title: "Mexico refuses US military flight deporting migrants, say sources",
    publishedOn: "January 25, 2025, 07:56 PM",
  },
  {
    title: "Philippines seeking ‘inclusive digital transformation’ under Marcos, says DTI",
    publishedOn: "January 25, 2025, 06:48 PM",
  },
  {
    title: "Possible freezing of US foreign aid won’t affect EDCA, says DFA",
    publishedOn: "January 25, 2025, 05:53 PM",
  },
  {
    title: "US Typhon missile to stay in Philippines for now, says top security official",
    publishedOn: "January 25, 2025, 05:48 PM",
  },
  {
    title: "Philippines suspends South China Sea survey after China’s ‘harassment’",
    publishedOn: "January 25, 2025, 05:10 PM",
  },
  {
    title: "Gambling tycoon abused in Thai jail after saying he spied for China, lawyers say",
    publishedOn: "January 25, 2025, 03:12 PM",
  },
  {
    title: "Mexico refuses U.S. military flight deporting migrants, sources say",
    publishedOn: "January 25, 2025, 02:52 PM",
  },
  {
    title: "BFAR vessels harassed by China forces in research mission, PCG reports",
    publishedOn: "January 25, 2025, 01:04 PM",
  },
];

const newsCard = [
  {
    imageUrl: '',
    title: 'Matinding baha, nanalasa sa ilang probinsya sa BARMM | Frontline Tonight',
    description: '#FrontlineTonight | Itinaas na ang red alert sa Bangsamoro Autonomous Region in Muslim',
    watchLink: 'https://google.com'
  },
  {
    imageUrl: '',
    title: 'Pagbabasura sa PUV modernization, ipinananawagan ng PISTON sa SONA ni PBBM',
    description: '#FrontlinePilipinas | Kabilang sa mga kontrobersyal na isyu ng bayan ang PUV',
    watchLink: 'https://google.com'
  }
]


const Home: React.FC = () => {
  return (
    <main>
      <div className="w-[100%] h-[100vh]">
        <div className="w-full fixed z-10">
          <NavBar />
          <Logo />
        </div>

        <div className="w-full flex pt-[187px]">
          <div className="flex-1 relative">
            <iframe
              src="https://www.youtube.com/embed/videoseries?si=GeW2NEDSIq61i9GP&list=PL5HOfFlVmenanN8IoRTZ-zcVMt9owVVAa"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full absolute left-0 top-0"
            />
          </div>

          <div className="w-[400px] h-[630px] overflow-auto top-stories-scrollbar">
            <TopStories stories={stories} />
          </div>
        </div>

        <div className="w-full h-[65px] bg-[#eee]">
          <div className="w-[200px] h-full font-bold text-[30px] text-white bg-red-500 grid place-items-center">FEATURES</div>
        </div>

        <div className="flex px-[13%] gap-[30px] mt-[20px]">
          <div className="flex-1">
            <CategoryTitle title="Recent" type="one" />

            <div className="grid grid-cols-2 gap-[10px]">
              {
                newsCard.map((card, index) => (
                  <NewsCard
                    key={index}
                    imageUrl={card.imageUrl}
                    title={card.title}
                    description={card.description}
                    watchLink={card.watchLink}
                  />
                ))
              }
            </div>
          </div>

          <div className="w-[350px]">
            <CategoryTitle title="Social" type="two" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home