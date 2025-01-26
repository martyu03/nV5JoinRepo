import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../globals.css";
import { topbarLinks } from "@/app/constants/topbar-links";
import Link from "next/link";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav>
        <ul
          className={`${isOpen ? "open" : ""} px-10 bg-red-600 flex text-white`}
        >
          {/* created */}
          {topbarLinks?.map((item: any, index: number) => (
            <TopbarLinkItem key={item?.id} {...item} />
          ))}
          {/* 
       
         <li className="nav-item flex mr-3 text-xs">
          <a href="/">
            <i className="fas fa-home"></i>
          </a>
        </li>  
        <li className="py-1 px-2 border border-r-white border-l-white text-xs">
          <a href="http://www.tv5.com.ph" target="_blank" rel="noopener noreferrer">
            5 Network
          </a>
        </li>
        <li className="py-1 px-2 border border-r-white text-xs">
          <a href="https://onesports.ph/" target="_blank" rel="noopener noreferrer">
            OneSports
          </a>
        </li>
        <li className="py-1 px-2 border border-r-white text-xs">
          <a href="http://www.alagangkapatid.com/" target="_blank" rel="noopener noreferrer">
            Alagang Kapatid
          </a>
        </li>
        <li className="py-1 px-2 border border-r-white text-xs">
          <a href="http://www.kapatidinternational.com" target="_blank" rel="noopener noreferrer">
            International
          </a>
        </li>
        <li className="py-1 px-2 border border-r-white text-xs">
          <a href="https://www.tv5.com.ph/sulittv" target="_blank" rel="noopener noreferrer">
            
          </a>
        </li> */}
        </ul>
      </nav>
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
