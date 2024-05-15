import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Abin Benny. I am a student at the Computer Science and
              Engineering department.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Machine Learning / Computer Vision / Multimodal Learning"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "I'm looking for a research internship for Summer. I'm open to collaboration on  projects."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:abinbenny173@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                abinbenny173@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/Abin-089"
                target="_blank"
                rel="noreferrer"
              >
                @abinbenny
              </a>
            </li>
            <li>
              <a
                className="text-blue-300"
                href="https://animated-portfolio-topaz.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Animated
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/abin-benny-372365255/"
                target="_blank"
                rel="noreferrer"
              >
                Abin Benny
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://abin-089.github.io/personal-blogweb/"
                target="_blank"
                rel="noreferrer"
              >
                
              </a>
            </li>
            <li>
              :{" "}
              <a
                className="text-blue-300"
                href="https://animated-portfolio-topaz.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
