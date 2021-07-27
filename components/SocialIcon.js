import { FaDev, FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa";
const links = [
  {
    Icon: FaDev,
    href: "https://dev.to/mrofisr",
    arialabel: "Dev",
  },
  {
    Icon: FaGithub,
    href: "https://github.com/mrofisr",
    arialabel: "Github",
  },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/mrofisr",
    arialabel: "LinkedIn",
  },
  {
    Icon: FaMedium,
    href: "https://medium.com/@mrofisr",
    arialabel: "Medium",
  },
];

export default function SocialIcon() {
  return (
    <div className="flex flex-row text-2xl my-6 text-gray-500 dark:text-gray-300">
      {links.map(({ Icon, href, arialabel }, i) => (
        <a
          key={href}
          href={href}
          target="_blank"
          aria-label={arialabel}
          rel="noopener noreferrer nofollow"
          className={`hover:text-gray-800 dark:hover:text-white transition-colors ${
            i < links.length - 1 ? "mr-3" : ""
          }`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
