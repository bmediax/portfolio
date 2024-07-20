import { NavProps } from "@/components/blocks/Nav/Nav.types";
import { PropsWithChildren } from "react";

export interface PageProps extends PropsWithChildren {
  nav?: NavProps;
}
