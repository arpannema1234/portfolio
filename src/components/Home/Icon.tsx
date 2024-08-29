import {
  SiLinkedin,
  SiGithub,
  SiGmail,
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
  SiCodeforces,
} from "react-icons/si";

const Icon = ({
  item1,
  item2,
  title1,
  title2,
}: {
  item1?: boolean;
  title1?: boolean;
  title2?: boolean;
  item2?: boolean;
}) => {
  return (
    <>
      {item1 && (
        <div className="">
          <p
            className={`uppercase mt-8 lg:mt-30 mb-8 ${
              title1 ? "block" : "hidden"
            }`}
          >
            FIND ME HERE
          </p>
          <div className="flex items-center justify-between gap-4">
            <a
              href="https://www.linkedin.com/in/arpan-nema-b13248236"
              target="_blank"
              className="p-4 rounded-md border border-neutral-900 button-box-shadow4"
            >
              <SiLinkedin className="text-blue-500 text-lg" />
            </a>
            <a
              href="mailto:arpannema1234@gmail.com"
              target="_blank"
              className="p-4 rounded-md border border-neutral-900 button-box-shadow4"
            >
              <SiGmail className="text-red-500 text-lg" />
            </a>
          </div>
        </div>
      )}
      {item2 && (
        <div>
          <p
            className={`uppercase mt-8 lg:mt-30 mb-8 ${
              title2 ? "block" : "hidden"
            }`}
          >
            Coding Profiles
          </p>
          <div className="flex items-center justify-between gap-4">
            <a
              href="https://github.com/arpannema1234"
              className="p-4 rounded-md border border-neutral-900 button-box-shadow4"
            >
              <SiGithub className="text-white-500 text-lg" />
            </a>
            <a
              href="https://leetcode.com/u/arpannema1234/"
              target="_blank"
              className="p-4 rounded-md border border-neutral-900 button-box-shadow4"
            >
              <SiLeetcode className="text-yellow-500 text-lg" />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/arpannema_06/"
              target="_blank"
              className="p-4 rounded-md border border-neutral-900 button-box-shadow4"
            >
              <SiGeeksforgeeks className="text-green-500 text-lg" />
            </a>
            <a
              href="https://www.codechef.com/users/arpannema_20"
              target="_blank"
              className="p-4 rounded-md border border-neutral-900 button-box-shadow4"
            >
              <SiCodechef className="text-silver-500 text-lg" />
            </a>
            <a
              href="https://codeforces.com/profile/arpan_06"
              target="_blank"
              className="p-4 rounded-md border border-neutral-900 button-box-shadow4"
            >
              <SiCodeforces className="text-silver-500 text-lg" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Icon;
