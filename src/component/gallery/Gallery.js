import React from "react";
import { images } from "./imageData";
import Link from "./Link";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-28 w-full bg-neutral-800">
      {images.map((image) => (
        <div key={image.id} className="h-28 w-4/5 flex items-center justify-center border-b-[1px] border-neutral-50">
          <Link title={image.title} type={image.catagory} url={image.url}/>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
