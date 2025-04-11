import React, { useState, useEffect } from "react";
// import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

const CourseCard = ({
  coursesId,
  courseThumnail,
  courseTitle,
  description,
  instructorName,
  courses
}) => {

  return (
    <div className="w-[220px] sm:w-[220px] lg:w-full bg-white rounded-md border border-primary hover:scale-102 shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer">
      <div className="w-full h-[150px] xl:h-[180px]">
        <img
          src={courseThumnail}
          alt="Course Thumbnail"
          className="w-full h-full object-fit"
        />
      </div>

      <div className="p-3">
        <p className="font-bold text-primary text-md line-clamp-1">
          {courseTitle}
        </p>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2 min-h-[42px]">
          {description}
        </p>
        <p className="text-xs text-gray-500 capitalize mb-1">
          By {instructorName}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
