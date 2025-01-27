"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HorizontalAds from "../Ads/HorizontalAds";

export default function Bottombar(props: any) {
  const pathname = usePathname();

  return (
    <div className="bg-[#333333] text-white">
      <div className="container">
        <nav className="menu flex px-10 w-full text-xs h-8 items-center">
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
              className={`h-full px-3 border-r border-r-slate-600 text-xs flex items-center  ${
                pathname === item.path ? "active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="bg-white ">
        <div className="container py-1 logo flex justify-start px-10 ">
          <Link href="/">
            <Image
              src="/images/NEWS5 logo 2019 final-01.png"
              alt="NEWS5 Logo"
              width={400}
              height={400}
            />
          </Link>

          <Link href={"/"} className="w-[65%] m-auto">
            <HorizontalAds />
          </Link>
        </div>
      </div>
    </div>
  );
}
