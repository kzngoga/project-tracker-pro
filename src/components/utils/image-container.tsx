import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface ImageContainerProps {
  imgSrc: string;
  alt: string;
  widthClass?: string;
  heightClass?: string;
  wrapperClass?: string;
}

export default function ImageContainer({
  imgSrc,
  alt,
  widthClass = "w-[30px]",
  heightClass = "w-[30px]",
  wrapperClass = "",
}: ImageContainerProps) {
  return (
    <div
      className={cn(
        "relative w-[30px] h-[30px] rounded-full",
        widthClass,
        heightClass,
        wrapperClass
      )}
    >
      <Image src={imgSrc} alt={alt} fill className="object-cover" />
    </div>
  );
}
