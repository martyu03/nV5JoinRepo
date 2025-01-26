import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../globals.css";
import { topbarLinks } from "@/app/constants/topbar-links";
import Link from "next/link";
import Bottombar from "./BottomBar";

export default function Topbar() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav>
        <ul className={`px-10 bg-red-600 flex text-white`}>
          {topbarLinks?.map((item: any, index: number) => (
            <TopbarLinkItem key={item?.id} {...item} />
          ))}
        </ul>
      </nav>
      {/* <Bottombar /> */}
    </div>
  );
}

const TopbarLinkItem = (item) => {
  return (
    <li className="py-1 px-2 border border-r-white text-xs">
      <Link href={item?.path}>
        {item?.label ? item?.label : <i className={item?.icon}></i>}
      </Link>
    </li>
  );
};
