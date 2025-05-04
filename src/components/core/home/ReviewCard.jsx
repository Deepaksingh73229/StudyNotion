import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import defaultUserImage from "../../../assests/images/github-mark-white.png";

// Individual review card component
export function ReviewCard({ reviewData }) {
    const { course, rating, review, user } = reviewData;

    return (
        <div
            className="flex flex-col h-full cursor-pointer bg-richblack-800 rounded-xl overflow-hidden border border-richblack-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
            {/* Header - Course and Rating */}
            <div className="bg-richblack-600 p-5 flex justify-between items-start border-b border-b-richblack-600">
                <div className="flex-1">
                    <p className="font-bold text-lg text-richblack-5 line-clamp-1">
                        {course?.courseName || "Course Name"}
                    </p>

                    <p className="text-sm text-richblack-200">
                        By {course?.instructor?.firstName} {course?.instructor?.lastName || "Instructor"}
                    </p>
                </div>

                <div className={`flex items-center gap-1 px-2 py-1 rounded-md bg-richblack-900/50 ${rating >= 4 ? 'text-yellow-50' : rating >= 3 ? 'text-yellow-100' : 'text-pink-300'}`}>
                    <FaStar />
                    <span className="font-semibold">{rating.toFixed(1)}</span>
                </div>
            </div>

            {/* Review Content */}
            <div className="h-[150px] flex flex-col gap-5 p-5 italic">
                <FaQuoteLeft className="text-xl text-yellow-50" />
                <p>{review || "This course helped me enhance my skills and knowledge."}</p>
            </div>

            {/* Footer - User Info and Date */}
            <div className="mt-auto p-5 pt-3 border-t border-richblack-700 bg-richblack-900/30">
                <div className="flex items-center gap-3">
                    <img
                        loading="lazy"
                        alt={`${user?.firstName || 'User'}'s profile`}
                        src={user?.image || defaultUserImage}
                        className="aspect-square w-10 object-cover rounded-full border border-richblack-300"
                    />

                    <p className="font-medium text-richblack-5">
                        {user?.firstName} {user?.lastName || "Deepak 🫰"}
                    </p>
                </div>
            </div>
        </div>
    );
}