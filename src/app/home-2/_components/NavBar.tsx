import Link from "next/link";

const NavBar: React.FC = () => {
  const primaryLinks = [
    { name: <i className="fas fa-home"></i>, href: '#' },
    { name: "5 Network", href: "#" },
    { name: "Onesports", href: "#" },
    { name: "Alagang Kapatid", href: "#" },
    { name: "International", href: "#" },
    { name: "Sulit TV", href: "#" },
  ];

  const secondaryLinks = [
    { name: "Home", href: "#" },
    { name: "Articles", href: "#" },
    { name: "Programs", href: "#" },
    { name: "Factuals", href: "#" },
    { name: "Life", href: "#" },
    { name: "Radyo5", href: "#" },
    { name: "Fact-Check Policy", href: "#" },
  ];

  return (
    <nav className="w-full">
      {/* Primary Navigation */}
      <div className="bg-red-600 text-white flex items-center text-sm h-[25px] px-[13%]">
        {primaryLinks.map((link, index) => (
          <Link key={index} href={link.href} className="border-r border-white text-[10px] uppercase item-center pt-[3px] px-[10px] h-full">
            {link.name}
          </Link>
        ))}
      </div>

      {/* Secondary Navigation */}
      <div className="bg-[#212529] h-[32px] text-white text-xs px-[13%] flex items-center">
        {secondaryLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`uppercase h-full px-[12px] pt-2 ${
              link.name === 'Home' ? 'text-red-600 bg-white' : 'text-white hover:bg-red-600'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
