import React, { useState } from 'react'
import CourseCard from '../../components/CourseCard'
import { assets } from '../../assets/assets'

const CoursePage = () => {
    const [sortOption, setSortOption] = useState('Sort by course name');
    const courses = [
        {
            courseThumnail: assets.Course1,
            courseTitle: "UX/UI Design from 0 to Hero",
            description: "Turn your ICT class into an interactive and explorative learning experience. Build essential future-ready skills through our student-centered, project-based curriculum.",
            instructorName: "Robert"
        },
        {
            courseThumnail: assets.Course2,
            courseTitle: "The Road Map to learn React JS",
            description: "Follow a clear and structured path to master React JS. This course guides you step by step with practical projects, helping you build real-world skills in modern web development.",
            instructorName: "Robert"
        },
        {
            courseThumnail: assets.Course1,
            courseTitle: "UX/UI Design from 0 to Hero",
            description: "Turn your ICT class into an interactive and explorative learning experience. Build essential future-ready skills through our student-centered, project-based curriculum.",
            instructorName: "Robert"
        },
        {
            courseThumnail: assets.Course2,
            courseTitle: "The Road Map to learn React JS",
            description: "Follow a clear and structured path to master React JS. This course guides you step by step with practical projects, helping you build real-world skills in modern web development.",
            instructorName: "Robert"
        },
        {
            courseThumnail: assets.Course1,
            courseTitle: "UX/UI Design from 0 to Hero",
            description: "Turn your ICT class into an interactive and explorative learning experience. Build essential future-ready skills through our student-centered, project-based curriculum.",
            instructorName: "Robert"
        },
        {
            courseThumnail: assets.Course2,
            courseTitle: "The Road Map to learn React JS",
            description: "Follow a clear and structured path to master React JS. This course guides you step by step with practical projects, helping you build real-world skills in modern web development.",
            instructorName: "Robert"
        },
        {
            courseThumnail: assets.Course1,
            courseTitle: "UX/UI Design from 0 to Hero",
            description: "Turn your ICT class into an interactive and explorative learning experience. Build essential future-ready skills through our student-centered, project-based curriculum.",
            instructorName: "Robert"
        },
        {
            courseThumnail: assets.Course2,
            courseTitle: "The Road Map to learn React JS",
            description: "Follow a clear and structured path to master React JS. This course guides you step by step with practical projects, helping you build real-world skills in modern web development.",
            instructorName: "Robert"
        }
    ];

    const sortOptions = ['Sort by course name', 'Sort by last accessed'];


    return (
        <div className='min-h-screen max-w-screen-2xl px-[16px] mx-auto lg:mt-5 lg:px-[3rem] xl:px-[10rem]'>
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                <form className="w-full">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search courses..."
                            className="w-full p-2 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        <button
                            type="submit"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </form>
                <div className="flex w-full md:w-1/2 lg:w-1/3">
                    <select
                        className="bg-white w-full py-2 px-4 rounded-lg border border-gray-300 text-gray-500 outline-0 hover:bg-gray-50 md:w-aut ring-1 focus:ring-primary"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        {sortOptions.map(option => (
                            <option className='hover:bg-primary' key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
            <p className='text-lg font-semibold mt-5 lg:mt-5'>
                All Courses
            </p>
            <div className="grid gap-5 mt-5 lg:mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mx-auto justify-items-center">
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        courseThumnail={course.courseThumnail}
                        courseTitle={course.courseTitle}
                        description={course.description}
                        instructorName={course.instructorName}
                    />
                ))}
            </div>
        </div>
    )
}

export default CoursePage