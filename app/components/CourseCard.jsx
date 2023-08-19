import React from "react";
import { FaReact } from "react-icons/fa";

const CourseCard = ({ courseCard }) => {
  const { name, courseStatus, studentsCount } = courseCard;

  return (
    <>
      <div className="card h-40 w-60 bg-white rounded-md p-4 shaddow-md font-fontBn hover:bg-purple-600 hover:text-white hover:scale-110 cursor-pointer duration-300">
        <p className="icon text-4xl mb-4">
          <FaReact />
        </p>
        <p className="mb-1 font-bold text-lg font-fontBn">{name}</p>
        <p className="text-base font-fontBn">{courseStatus}</p>
        <p className="text-base font-fontBn">{studentsCount}+ শিক্ষার্থী</p>
      </div>
    </>
  );
};

export default CourseCard;
