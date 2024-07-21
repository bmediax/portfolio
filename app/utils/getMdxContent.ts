// import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import fs from "fs";
import matter from "gray-matter";
import path from "path";
// import { serialize } from 'next-mdx-remote/serialize';

export interface MdxFile<T> {
  fileName: string;
  contents: {
    frontMatter: T;
    body: string;
  };
}

const getMdxContents = async <T>(
  directory: string
): Promise<MdxFile<T>[] | null> => {
  const dirPath = path.join(process.cwd(), `app/content/${directory}`);
  const fileNames = fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".mdx"));

  const mdxFiles = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(dirPath, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { content, data } = matter(fileContents);
      // const mdxSource = await serialize(content, { scope: data });

      return {
        fileName,
        contents: {
          frontMatter: data,
          body: content,
        },
      };
    })
  );

  return mdxFiles as MdxFile<T>[];
};

const getMdxContent = async <T>(filePath: string): Promise<MdxFile<T> | null> => {
  const fileContents = fs.readFileSync(`app/content/${filePath}`, "utf8");
  const { content, data } = matter(fileContents);

  return {
    fileName: path.basename(filePath),
    contents: {
      frontMatter: data,
      body: content,
    },
  } as MdxFile<T>;
};

export { getMdxContent, getMdxContents };

export default getMdxContent;
