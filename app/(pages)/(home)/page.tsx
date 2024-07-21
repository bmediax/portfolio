import Focuses from "./_blocks/Focuses";
import Hero from "./_blocks/Hero";
import Page from "@components/templates/Page";
import Works from "./_blocks/Works";

export default function Home() {
  return (
    <Page
      nav={{
        theme: "dark",
      }}
    >
      <Hero />
      <Focuses />
      <Works />
    </Page>
  );
}
