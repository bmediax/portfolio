import { FaPlus, FaTree } from "react-icons/fa";

import { BiCoffeeTogo } from "react-icons/bi";
import BigHero from "@components/sections/BigHero";
import { HiSparkles } from "react-icons/hi";
import { Separator } from "@radix-ui/themes";
import { TiHeartFullOutline } from "react-icons/ti";

const Hero = () => {
  return (
    <BigHero
      cover={{
        src: "/images/home_introHero_bg.png",
        width: 1512,
        height: 491.23,
      }}
    >
      <p className="text-white text-xl md:text-3xl xl:text-5xl !leading-normal font-semibold">
        Hi there 👋🏽,
      </p>
      <p className="text-white text-xl md:text-3xl xl:text-5xl text-balance !leading-normal font-semibold">
        My name is Brian, I'm a Full-Stack Engineer{" "}
        <BiCoffeeTogo className="inline text-[#964B00]" />
        , based in Portland, OR
        <FaTree className="inline text-green-600" />.
      </p>
      <Separator size="4" className="text-white !bg-white/10 my-4" />
      <p className="text-white text-xl md:text-3xl xl:text-4xl !leading-normal font-semibold mt-2">
        I <TiHeartFullOutline className="inline text-purple-500" /> Crafting
        Beautiful <HiSparkles className="inline text-yellow-400" /> and
        Accessible Digital Experiences{" "}
        <FaPlus className="inline text-yellow-300" />.
      </p>
    </BigHero>
  );
};

export default Hero;
