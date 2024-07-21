import SubjectCard from "@ui/SubjectCard";
import serveCaseStudy from "@/services/serveCaseStudy";

export default async function Works() {
  const data = await serveCaseStudy();

  if (!data) {
    return null;
  }
  return (
    <section className="py-20 bg-brand-light-200 px-4 md:px-8">
      {data.map(({ contents }, idx) => (
        <SubjectCard
          key={idx}
          title={contents.frontMatter.title}
          desc={contents.frontMatter.desc}
          cover={{
            alt: "Case Study",
            src: "https://via.placeholder.com/1200x800",
            width: 1200,
            height: 800,
          }}
        />
      ))}
    </section>
  );
}
