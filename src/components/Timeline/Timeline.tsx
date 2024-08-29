import {
  BackwardIcon,
  CheckBadgeIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <div id="timeline" className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-16 xl:py-20 border-b border-gray-800 text-center">
        <h3 className="text-gray-400 text-lg uppercase tracking-wider">
          Education & Experience
        </h3>
        <h2 className="my-8 uppercase text-white text-2xl xl:text-6xl font-semibold">
          Timeline
        </h2>
        <div className="grid mt-20 text-start">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#0047ab",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                color: "#ddd",
                borderRadius: "12px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #0047ab",
              }}
              date="May 2024 - Jun 2024"
              iconStyle={{ background: "#0047ab", color: "#fff" }}
              icon={<CheckBadgeIcon />}
            >
              <h3 className="text-xl font-semibold">Web Developer Intern</h3>
              <h4 className="text-lg font-medium">Stealth Startup</h4>
              <p>
                My web development experience with Stealth Startup was truly
                exceptional. I had the chance to contribute to the creation of a
                Blogging Site and developed a project management tool.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#004953",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                color: "#ddd",
                borderRadius: "12px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #004953",
              }}
              date="Dec 2021 - May 2025"
              iconStyle={{ background: "#004953", color: "#fff" }}
              icon={<BackwardIcon />}
            >
              <h3 className="text-xl font-semibold">Student</h3>
              <h4 className="text-lg font-medium">
                Indian Institute of Information Technology (IIIT), Bhopal
              </h4>
              <p>
                Bachelor of Technology (B.Tech) <br />
                Computer Science & Engineering (CSE) - 8.45 CGPA
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#000",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                color: "#ddd",
                borderRadius: "12px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #000",
              }}
              date="Jun 2021"
              iconStyle={{ background: "#000", color: "#fff" }}
              icon={<BackwardIcon />}
            >
              <h3 className="text-xl font-semibold">Student</h3>
              <h4 className="text-lg font-medium">
                Sharda Vidya Mandir, Bhopal
              </h4>
              <p>XII Standard [CBSE] - 95.6%</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#b20238",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                color: "#ddd",
                borderRadius: "12px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #b20238",
              }}
              date="Mar 2019"
              iconStyle={{ background: "#b20238", color: "#fff" }}
              icon={<BackwardIcon />}
            >
              <h3 className="text-xl font-semibold">Student</h3>
              <h4 className="text-lg font-medium">
                Sharda Vidya Mandir, Bhopal
              </h4>
              <p>X Standard [CBSE] - 92.8%</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ background: "#EFB5A3", color: "#fff" }}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
