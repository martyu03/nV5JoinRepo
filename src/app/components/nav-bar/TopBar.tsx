import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../globals.css';

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav> 
      <ul className={`${isOpen ? 'open' : ''} px-10 bg-red-600 flex text-white`}>
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
            Sulit TV
          </a>
        </li>
      </ul>
      </nav>
    </div>
  );
}
