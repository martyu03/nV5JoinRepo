// components/Footer.js
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className=" bg-[#EEEEEE]">
        <div className="grid grid-cols-12 container py-3 gap-5">
          <div className="col-span-8">
            <div className="cont space-y-4">
              <Image src="/images/NEWS5-logo.png" alt="News5 Logo" width={200} height={100} />
              <p>
                News5 stands at the forefront of digital journalism as the first 24/7 online news
                channel in the Philippines. It is also a pioneer in publishing news programs on a
                wide range of social media platforms. It is powered by digital journalists capable
                of bringing news to a worldwide audience through the creative use of cutting-edge
                technology.
              </p>
              <p>
                As a media organization, News5 adheres to the highest standards of journalism,
                committing itself to factual, untarnished, and balanced presentation of relevant
                news information while staying attuned to the needs and aspirations of its public.
              </p>
              <p>
                As journalists, we are young yet mature in the exercise of our profession. We are
                adept in traditional news reportage but at the same time savvy in the use of
                digital technology for information dissemination.
              </p>
              <p>
                As an institution, we are inclusive, dynamic, open-minded, and ever-evolving while
                staying true to our journalistic principles and ideals.
              </p>
            </div>
          </div>
          <div className="col-span-4 space-y-4 font-sm">
            <div className="text-red-500 font-bold">GET IN TOUCH</div>
            <p>
              <b>LOCATION</b>
            </p>
            <p>TV5 Media Center Reliance Corner Sheridan Street Mandaluyong City 1552</p>
            <p>
              <b>CONTACT US</b>
            </p>
            <p>(6328) 938-63-93</p>
            <p>(6328) 355-55-35</p>
            <Image
              src="/images/NPC_Seal_2024-2025.png"
              alt="NPC Seal"
              width={200}
              height={100}
              // onClick={() => openPopup('popup-policy')}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#333333]">
        <div className="container flex justify-between py-2">
          <div className="text-left text-white inline-block text-sm">© {new Date().getFullYear()} TV5 NETWORK INC. ALL RIGHTS RESERVED.</div>
          <div className="text-right cursor-pointer text-white text-sm">
            <span className="inline-block">Privacy Statement</span>
            <a href="/fact-check" className="inline-block ml-2">Fact-Check Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
