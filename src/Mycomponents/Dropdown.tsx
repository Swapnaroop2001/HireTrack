import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Dropdown() {
  const [status, setStatus] = useState("Applied 📨"); // Default status

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Application Submitted 📨":
        return "bg-gray-300 hover:bg-gray-400";
      case "Assessment ✅":
        return "bg-blue-300 hover:bg-blue-400"; // Blue color for Assessment
      case "Interview scheduled 📅":
        return "bg-yellow-300 hover:bg-yellow-400"; // Yellow color for Interview
      case "Offer Received 🎉":
        return "bg-green-300 hover:bg-green-400";
      case "Rejected ❌":
        return "bg-red-300 hover:bg-red-400";
      default:
        return "bg-gray-300 hover:bg-gray-400";
    }
  };

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
  };

  return (
    <div className="w-max">
      <DropdownMenu>
        <DropdownMenuTrigger
          className={`px-3 py-2 ${getStatusColor(status)} whitespace-nowrap overflow-hidden flex items-center justify-between`}
          style={{ borderRadius: '50px', width: '210px' }} // Fixed width for trigger
        >
          <span className="flex-1 text-center">{status}</span>
          <span className="ml-2">▼</span> {/* Fixed position to the right */}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="min-w-[200px] mt-1" // Fixed width for dropdown content
        >
          <DropdownMenuItem
            onClick={() => handleStatusChange("Applied 📨")}
            className={`text-center ${getStatusColor("Application Submitted 📨")} hover:bg-opacity-80`} // Center align and color
            style={{ borderRadius: '30px' }} // Custom border radius
          >
            Applied 📨
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleStatusChange("Assessment ✅")}
            className={`text-center ${getStatusColor("Assessment ✅")} hover:bg-opacity-80`} // Blue color
            style={{ borderRadius: '30px' }} // Custom border radius
          >
            Assessment ✅
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleStatusChange("Interview scheduled 📅")}
            className={`text-center ${getStatusColor("Interview scheduled 📅")} hover:bg-opacity-80`} // Yellow color
            style={{ borderRadius: '30px' }} // Custom border radius
          >
            Interview scheduled 📅
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleStatusChange("Offer Received 🎉")}
            className={`text-center ${getStatusColor("Offer Received 🎉")} hover:bg-opacity-80`} // Center align and color
            style={{ borderRadius: '30px' }} // Custom border radius
          >
            Offer Received 🎉
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleStatusChange("Rejected ❌")}
            className={`text-center ${getStatusColor("Rejected ❌")} hover:bg-opacity-80`} // Center align and color
            style={{ borderRadius: '30px' }} // Custom border radius
          >
            Rejected ❌
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
