import Image from "next/image";
import React from "react";
import ButtonWatch from "./ButtonWatch";
import { truncateText } from "../utils/truncate-text";

type styles = {
  width: number;
  height: number;
};

type ArticleComponentProps = {
  title: string;
  subTitle?: string;
  thumbnail: string;
  style?: styles;
  toWatch?: boolean;
  headline?: string;
  path: string;
  direction?: "row" | "col";
  textLength: number;
};

type ArticleProps = {
  item: ArticleComponentProps;
};

const ArticleComponent = (item: ArticleProps) => {
  const {
    style,
    title,
    path,
    datePublishedOn,
    timePublished,
    toWatch,
    thumbnail,
    direction,
    headline,
    subTitle,
    textLength,
  }: any = item?.item;

  const width = style?.width || 400;
  const height = style?.height || 400;

  if (direction === "row") {
    return (
      <div className="grid grid-cols-2 gap-3">
        <div className="">
          <Image
            alt={title}
            width={100}
            src={thumbnail}
            height={100}
            className={`w-[${width}px] h-[${height}px]`}
          />
        </div>
        <div className="">
          <p className={`font-bold`}>
            {title?.length >= 50 ? `${title?.slice(0, 50)}...` : title}
          </p>
          <p className={`text-slate-400`}>
            {subTitle?.length >= 50 ? `${subTitle?.slice(0, 50)}...` : title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-1 space-x-1]`}>
      <Image
        alt={title}
        width={100}
        src={thumbnail}
        height={100}
        className={`w-[${width}px] h-[${height}px]`}
      />

      <div>
        <h3 className={headline && "font-semibold"}>{title}</h3>
      </div>

      <h3 className={headline && "font-semibold text-slate-400"}>
        {truncateText(subTitle, textLength)}
      </h3>
      {toWatch && <ButtonWatch />}
    </div>
  );
};

export default ArticleComponent;
