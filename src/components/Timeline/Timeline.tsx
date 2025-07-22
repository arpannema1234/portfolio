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
              date="January 2025 - July 2025"
              iconStyle={{ background: "#0047ab", color: "#fff" }}
              icon={<CheckBadgeIcon />}
            >
              <h3 className="text-xl font-semibold">
                Software Developer Intern
              </h3>
              <h4 className="text-lg font-medium">
                Samsung R&D Institute, Delhi
              </h4>
              <p>
                <ul className="list-none md:list-disc">
                  <li>
                    Developed a custom Angular directive to dynamically disable
                    all buttons across the Admin Portal, enhancing the UI
                    experience.
                  </li>
                  <li>
                    Proposed and implemented an API response caching algorithm
                    using RxJS observables, reducing redundant network requests
                    and improving load times.
                  </li>
                  <li>
                    Conducted manual testing and validation of portal features
                    to ensure reliability and consistency across modules.
                  </li>
                  <li>
                    Integrated image upload functionality by adding a new input
                    field in the Angular-based Admin Portal and connecting it to
                    the .NET backend for saving and retrieving images.
                  </li>
                  <li>
                    Diagnosed and resolved over 22 critical bugs within the
                    admin portal, reducing system downtime by 40% and improving
                    data integrity for TVplus data curation processes.
                  </li>
                  <li>
                    Built and rolled out 3 new features in response to changing
                    business needs, ensuring the product continued to meet user
                    expectations and goals.
                  </li>
                  <li>
                    Conducted comprehensive testing and troubleshooting that
                    increased portal stability, resulting in a 30% reduction in
                    user-reported issues over a three-month period.
                  </li>
                </ul>
              </p>
            </VerticalTimelineElement>
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
              date="October 2024 - December 2024"
              iconStyle={{ background: "#0047ab", color: "#fff" }}
              icon={<CheckBadgeIcon />}
            >
              <h3 className="text-xl font-semibold">
                Fullstack Developer Intern
              </h3>
              <h4 className="text-lg font-medium">WithWeb</h4>
              <p>
                <ul className="list-none md:list-disc">
                  <li>
                    Developed authentication routes for login and signup using
                    mobile number and OTP-based 2-factor authentication.
                  </li>
                  <li>
                    Refactored user model to unify retailer and wholesaler roles
                    and added express-validator for request validation.
                  </li>
                  <li>
                    Created routes for users and admin, improved validation for
                    login and signup, and made error handling better.
                  </li>
                  <li>
                    Created a full-fledged admin portal for automating sales
                    management of medicines for increased efficiency in
                    operations through the reduction of manual processing time
                    and the support of 6 lakh+ medicines in the product
                    database.
                  </li>
                  <li>
                    Designed and deployed robust backend APIs to facilitate
                    seamless management of extensive pharmaceutical data,
                    resulting in a 30% improvement in data retrieval speed and
                    ensuring accurate inventory tracking for thousands of users
                  </li>
                </ul>
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
