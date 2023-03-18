import { useState } from "react";

type CardProps = {
  title: string;
  url?: string;
  image_src?: string;
};

const MicrofundamentalCard: React.FC<CardProps> = ({
  title,
  url,
  image_src,
}) => {
  return (
    <a
      href={url}
      className="block rounded-lg overflow-hidden shadow-md hover:scale-105 transition duration-300"
    >
      {image_src ? (
        <img src={image_src} alt={`${title}-image`} />
      ) : (
        <div className="bg-gray-300 h-40">{title}-image</div>
      )}
      <div className="p-4 bg-white h-full">
        <h2 className="text-lg font-bold text-gray-800 text-center">{title}</h2>
      </div>
    </a>
  );
};

export default MicrofundamentalCard;
