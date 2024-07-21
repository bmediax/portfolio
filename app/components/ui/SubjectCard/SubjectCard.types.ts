import { PropsWithChildren } from "react";

export interface SubjectCard extends PropsWithChildren {
  title: string;
  desc: string;
  cover: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}
