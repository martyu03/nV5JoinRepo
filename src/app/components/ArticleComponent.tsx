import Image from "next/image";
import React from "react";

type styles = {
  width: number;
  height: number;
};

type ArticleComponentProps = {
  title: string;
  subTitle?: string;
  style?: styles;
  path: string;
};

type ArticleProps = {
  item: ArticleComponentProps;
};

const ArticleComponent = (item: ArticleProps) => {
  const { style, title, path, datePublishedOn, timePublished, thumbnail }: any =
    item?.item;

  const width = style?.width || 350;
  const height = style?.height || 350;

  return (
    <div className="space-y-1">
      <Image
        alt={title}
        width={100}
        src={thumbnail}
        height={100}
        className={`w-[${width}px] h-[${height}px]`}
      />

      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default ArticleComponent;
