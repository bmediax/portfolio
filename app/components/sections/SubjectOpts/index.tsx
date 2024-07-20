import { Heading } from "@radix-ui/themes";
import { cn } from "../../../../lib/utils";

interface SubjectOptsProps {
  title: string;
  theme: "dark" | "light";
  data: {
    icon?: React.ReactNode;
    label: string;
  }[];
}

const SubjectOpts = ({ data, title, theme = "light" }: SubjectOptsProps) => {
  return (
    <section
      className={cn(
        theme === "dark" ? "bg-brand-dark-100" : "bg-brand-light-100",
        "py-20"
      )}
    >
      <div className="container">
        {title && (
          <Heading
            as="h2"
            size="8"
            align={"center"}
            mb="8"
            className={cn(
              theme === "dark" ? "text-white" : "text-brand-dark-400"
            )}
          >
            {title}
          </Heading>
        )}

        <div className="flex gap-4 items-center justify-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full"
            >
              <div className="bg-brand-dark-500 border border-brand-dark-600 p-4 rounded-lg shadow-lg w-full flex gap-2 text-white items-center">
                {item.icon && (
                  <span className="text-3xl border-2 border-white/5 p-2 rounded-full">
                    {item.icon}
                  </span>
                )}
                <p className="text-xl font-semibold">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectOpts;
