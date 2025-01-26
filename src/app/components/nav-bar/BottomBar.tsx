import Image from "next/image";
import Link from "next/link";

export default function Bottombar(props: any) {
  return (
    <div>
      <div className="bottom-bar">
        <nav className="menu flex py-1 px-10 w-full text-xs">
          {[
            { path: "/", label: "HOME" },
            { path: "/articles", label: "ARTICLES" },
            { path: "/programs", label: "PROGRAMS" },
            { path: "/factuals", label: "FACTUALS" },
            { path: "/life", label: "LIFE" },
            { path: "/radyo5", label: "RADYO5" },
            { path: "/fact-check", label: "FACT-CHECK POLICY" },
          ].map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`py-1 px-5 border border-r-white border-l-white text-xs  ${
                props.activePage === item.path ? "active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="logo flex justify-start px-10 bg-white">
        <a href="/">
          <Image
            src="/images/NEWS5 logo 2019 final-01.png"
            alt="NEWS5 Logo"
            width={400}
            height={400}
          />
        </a>
      </div>
    </div>
  );
}
