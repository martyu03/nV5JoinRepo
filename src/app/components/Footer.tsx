// components/Footer.js
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="cont">
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
          <div className="col-md-4">
            <div className="title">GET IN TOUCH</div>
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
              onClick={() => openPopup('popup-policy')}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="left-side">© {new Date().getFullYear()} TV5 NETWORK INC. ALL RIGHTS RESERVED.</div>
          <div className="right-side">
            <div onClick={() => openPopup('popup-policy')} style={{ cursor: 'pointer' }}>
              Privacy Statement
            </div>
            <a href="/fact-check">Fact-Check Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
