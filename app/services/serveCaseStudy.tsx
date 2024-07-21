import { MdxFile, getMdxContents } from "@/utils/getMdxContent";

interface CaseStudyMdxContent {
  id: string;
  title: string;
  role: string;
  desc: string;
  client: string;
  date: string;
  team: string;
  technologies: string;
  tags: string;
}

export default async function serveCaseStudy(): Promise<MdxFile<CaseStudyMdxContent>[] | null> {
  const content = await getMdxContents<CaseStudyMdxContent>("cases");

  return content;
}
