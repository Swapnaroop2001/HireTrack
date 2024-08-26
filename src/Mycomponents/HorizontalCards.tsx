import React from "react";
import Dropdown from "./Dropdown";

interface HorizontalCardProps {
  companyName: string;
  applicationTitle: string;
  applicationLink: string;
  onEdit: () => void; // Callback function for edit action
  className?: string; // Allow custom className for width
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  companyName,
  applicationTitle,
  applicationLink,
  onEdit,
  className,
}) => {
  // Get the current date in MM-DD-YYYY format
  const formatDate = (date: Date) => {
    const month = date.getMonth() + 1; // Months are zero-based
    const day = date.getDate();
    const year = date.getFullYear();
    
    return `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year}`;
  };

  const currentDate = formatDate(new Date());

  return (
    <div className={`bg-white shadow-md rounded-lg p-2 flex items-center space-x-4 ${className} max-h-[80px] mb-1`}>
      {/* Company Name */}
      <div className="w-1/5 min-w-[130px] flex items-center justify-start">
        <h2 className="text-sm font-semibold truncate ml-2">{companyName}</h2>
      </div>

      {/* Application Title */}
      <div className="w-2/5 min-w-[200px] flex items-center justify-start">
        <p className="text-sm text-gray-600 truncate">{applicationTitle}</p>
      </div>

      {/* Application Link */}
      <div className="w-1/7 min-w-[150px] flex justify-center items-center">
        <a
          href={applicationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-500 hover:text-blue-700 text-center truncate"
        >
          View Application
        </a>
      </div>

      {/* Date */}
      <div className="w-1/7 min-w-[120px] flex justify-center items-center">
        <p className="text-sm text-gray-600 text-center truncate">{currentDate}</p>
      </div>

      {/* Edit Button */}
      <div className="w-1/8 min-w-[50px] flex justify-center items-center">
        <button
          onClick={onEdit}
          className="text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          Edit
        </button>
      </div>

      {/* Dropdown */}
      <div className="w-1/4 min-w-[150px] flex justify-center items-center">
        <Dropdown />
      </div>
    </div>
  );
};

export default HorizontalCard;
