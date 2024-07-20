import Nav from "@/components/blocks/Nav";
import { PageProps } from "./Page.types";

const Page = (props: PageProps) => {
  return (
    <>
      <Nav {...props.nav} />
      <main>{props.children}</main>
    </>
  );
};

export default Page;
