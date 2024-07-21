import Image from "next/image";
import { type SubjectCard } from "./SubjectCard.types";
import { Heading, Text } from "@radix-ui/themes";

const SubjectCard = ({ title, cover, desc }: SubjectCard) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-row">
        <div className="flex-1 shadow-lg p-8 rounded-md self-center lg:-mr-20 relative bg-white">
          <Heading as="h3" size="5" mb="2">
            {title}
          </Heading>
          <Text as="p" size="3" dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
        <picture className="flex-1 w-full h-full">
          <Image
            {...cover}
            className="object-cover rounded-md shadow-md h-full"
          />
        </picture>
      </div>
    </div>
  );
};

export default SubjectCard;
