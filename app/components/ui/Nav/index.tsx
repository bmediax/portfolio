import { NavProps } from "./Nav.types";
import { cn } from "@nextui-org/react";

const Nav = ({ theme = "auto" }: NavProps) => {
  return (
    <div className={cn(theme !== "auto" && theme)}>
      <nav className="bg-brand-light-50 dark:bg-brand-dark-100">
        <div>
          {/* Name */}
          <div>
            <span className="text-brand-light-50 dark:text-brand-light-50">
              Brian Moreno
            </span>{" "}
            <span className="text-brand-light-50">•</span>{" "}
            <span className="text-brand-light-500 dark:text-brand-light-400">
              Full-Stack Enginner
            </span>
          </div>

          <ul>
            <li>Works</li>
            <li>Meet Brian</li>
            <li>Contact</li>
            {/* <li>Best Hits</li> */}
          </ul>

          <div>
            <span>IG</span>
            <span>GH</span>
            <span>L/D</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
