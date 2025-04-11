import React from "react";
import { FaBrain, FaClock, FaUserGraduate } from "react-icons/fa";
import { IoBookSharp, IoWallet } from "react-icons/io5";
import InsightCard from "../../components/InsightCard";
import { assets } from "../../assets/assets";
import CourseCard from "../../components/CourseCard";

const StudentDashboard = () => {
  const courses = [
    {
      courseThumnail: assets.Course1,
      courseTitle: "UX/UI Design from 0 to Hero",
      description: "Turn your ICT class into an interactive and explorative learning experience. Build essential future-ready skills through our student-centered, project-based curriculum.",
      instructorName: "Robert",
      progress: 40
    },
    {
      courseThumnail: assets.Course2,
      courseTitle: "The Road Map to learn React JS",
      description: "Follow a clear and structured path to master React JS. This course guides you step by step with practical projects, helping you build real-world skills in modern web development.",
      instructorName: "Robert",
      progress: 70
    },
    {
      courseThumnail: assets.Course1,
      courseTitle: "UX/UI Design from 0 to Hero",
      description: "Turn your ICT class into an interactive and explorative learning experience. Build essential future-ready skills through our student-centered, project-based curriculum.",
      instructorName: "Robert",
      progress: 90
    },
    {
      courseThumnail: assets.Course2,
      courseTitle: "The Road Map to learn React JS",
      description: "Follow a clear and structured path to master React JS. This course guides you step by step with practical projects, helping you build real-world skills in modern web development.",
      instructorName: "Robert",
      progress: 0
    },
  ];

  return (
    <div className="w-full h-full flex flex-col p-10">
      <h2 className="text-xl font-semibold">Overview</h2>
      <div className="grid grid-cols-4 mt-5 justify-between gap-5">
        <InsightCard
          icon={<IoBookSharp
            size={20} />}
          count={16}
          label="Courses"
        />
        <InsightCard
          icon={<FaUserGraduate
            size={20}
          />}
          label="Pending Assignments"
          count={12}
        />
        <InsightCard
          icon={<FaBrain
            size={20} />}
          count={"45%"}
          label="Average Quiz Score"
        />
        <InsightCard
          icon={<FaClock size={20} />} count={99}
          label=" Hours Spent Learning"
        />
      </div>

      {/* Charts Section */}
      <h2 className="text-xl font-semibold mt-10">
        Statistics
      </h2>
      <div className="xl:w-full rounded-xl bg-white shadow-lg p-5">
        <div className="grid gap-5 mt-5 lg:mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mx-auto justify-items-center">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              courseThumnail={course.courseThumnail}
              courseTitle={course.courseTitle}
              description={course.description}
              instructorName={course.instructorName}
              progress={course.progress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
