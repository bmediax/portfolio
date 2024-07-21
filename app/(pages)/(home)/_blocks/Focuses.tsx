import { FaSyncAlt, FaUniversalAccess } from "react-icons/fa";

import { IoExtensionPuzzle } from "react-icons/io5";
import { PiPlugsConnectedFill } from "react-icons/pi";
import SubjectOpts from "@components/sections/SubjectOpts";

const Focuses = () => {
  return (
    <SubjectOpts
      title="I'm passionate about building with:"
      theme="dark"
      data={[
        {
          icon: <IoExtensionPuzzle />,
          label: "Composability",
        },
        {
          icon: <FaUniversalAccess />,
          label: "Accessibility",
        },
        {
          icon: <PiPlugsConnectedFill />,
          label: "Integration",
        },
        {
          icon: <FaSyncAlt />,
          label: "Automation",
        },
      ]}
    />
  );
};

export default Focuses;
