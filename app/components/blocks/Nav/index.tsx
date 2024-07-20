import Link from "next/link";
import { NavProps } from "./Nav.types";
import { cn } from "@nextui-org/react";

const Nav = ({ theme = "auto" }: NavProps) => {
  return (
    <div className={cn(theme !== "auto" && theme, "sticky top-0 shadow-sm")}>
      <nav className="bg-brand-light-50 dark:bg-brand-dark-100 py-4">
        <div className="flex items-center justify-between container">
          {/* Name */}
          <div className="flex-1">
            <span className="text-brand-dark-500 dark:text-brand-light-50">
              Brian Moreno
            </span>{" "}
            <span className="text-brand-light-500 dark:text-brand-light-50">
              •
            </span>{" "}
            <span className="text-brand-light-500 dark:text-brand-light-400">
              Full-Stack Enginner
            </span>
          </div>

          <ul className="flex-1 flex items-center gap-8 justify-center text-center">
            <li>
              <Link
                href="work"
                className="text-brand-dark-500 dark:text-brand-light-50"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                href="meet-brian"
                className="text-brand-dark-500 dark:text-brand-light-50"
              >
                Meet Brian
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="text-brand-dark-500 dark:text-brand-light-50"
              >
                Contact
              </Link>
            </li>
            {/* <li>Best Hits</li> */}
          </ul>

          <div className="flex-1 justify-self-end w-full flex items-center justify-end gap-3">
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
