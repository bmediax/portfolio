import { getMdxContents } from "@/utils/getMdxContent";
import { useState } from "react";

export default function useCaseStudy() {
  const [error, setError] = useState(null);

  const content = getMdxContents<{
    id: string;
    title: string;
    role: string;
    desc: string;
    client: string;
    date: string;
    team: string;
    technologies: string;
    tags: string;
  }>("cases").catch((err) => {
    setError(err);
  });

  return { data: content, error };
}
