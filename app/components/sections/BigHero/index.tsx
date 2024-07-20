import Image from "next/image";
import { PropsWithChildren } from "react";

interface BigHeroProps extends PropsWithChildren {
  cover: {
    src: string;
    width: number;
    height: number;
  };
}

const BigHero = ({ children, cover }: BigHeroProps) => {
  return (
    <section className="grid h-[80dvh] min-h-[500px]">
      {/* Content */}
      <div
        className="relative flex items-center justify-center px-4 py-10"
        style={{
          gridArea: "1/1",
        }}
      >
        {/* Wrapper */}
        <div className="max-w-[1440px] w-[90%] md:w-[80%] mx-auto">
          {children}
        </div>
      </div>

      {/* Image */}
      <Image
        src={cover.src}
        width={cover.width}
        height={cover.height}
        alt=""
        className="w-full object-cover h-full"
        style={{
          gridArea: "1/1",
        }}
      />
    </section>
  );
};

export default BigHero;
