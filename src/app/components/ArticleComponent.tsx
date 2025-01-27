import Image from "next/image";
import React from "react";
import ButtonWatch from "./ButtonWatch";

type styles = {
  width: number;
  height: number;
};

type ArticleComponentProps = {
  title: string;
  subTitle?: string;
  style?: styles;
  toWatch?: boolean;
  headline?: string;
  path: string;
  direction?: "row" | "col";
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
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-1 space-x-1`}>
      <Image
        alt={title}
        width={100}
        src={thumbnail}
        height={100}
        className={`w-[${width}px] h-[${height}px]`}
      />

      <div>
        <h3 className={headline && "text-red-600 font-semibold"}>{title}</h3>
      </div>

      {toWatch && <ButtonWatch />}
    </div>
  );
};

export default ArticleComponent;
