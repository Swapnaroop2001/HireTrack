import { useState, useEffect, ChangeEvent } from "react";
import HorizontalCard from "./HorizontalCards";
import { InputWithLabel } from "./InputWithLabel";
import { Button } from "@/components/ui/button";

// Define the shape of the form data and application data
interface FormData {
  companyName: string;
  jobRole: string;
  applicationLink: string;
}

interface ApplicationData extends FormData {
  _id: string; // Assuming MongoDB provides an _id for each entry
  status: string; // Include status field
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    jobRole: "",
    applicationLink: "",
  });

  const [applications, setApplications] = useState<ApplicationData[]>([]);

  useEffect(() => {
    // Fetch existing applications when the component mounts
    const fetchApplications = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/job-applications");
        if (response.ok) {
          const data: ApplicationData[] = await response.json();
          setApplications(data);
        } else {
          console.error("Failed to fetch applications");
        }
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/job-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newApplication: ApplicationData = await response.json();
        setApplications([...applications, newApplication]);

        // Reset form after submission
        setFormData({
          companyName: "",
          jobRole: "",
          applicationLink: "",
        });
      } else {
        console.error("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  const handleStatusChange = async (newStatus: string, applicationId: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/job-applications/${applicationId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        // Update status in local state
        setApplications(prevApplications => prevApplications.map(app =>
          app._id === applicationId ? { ...app, status: newStatus } : app
        ));
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="mt-20">
      <div className="flex justify-between gap-4 mb-4">
        <div className="flex gap-4 w-full">
          <InputWithLabel
            label="Company Name"
            id="companyName"
            type="text"
            placeholder="Company name"
            value={formData.companyName}
            onChange={handleInputChange}
          />
          <InputWithLabel
            label="Job Role"
            id="jobRole"
            type="text"
            placeholder="Job role"
            value={formData.jobRole}
            onChange={handleInputChange}
          />
          <InputWithLabel
            label="Link"
            id="applicationLink"
            type="text"
            placeholder="Enter link"
            value={formData.applicationLink}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-end">
          <Button variant="outline" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>

      {/* Render HorizontalCards */}
      {applications.map((application) => (
        <HorizontalCard
          key={application._id}
          companyName={application.companyName}
          applicationTitle={application.jobRole}
          applicationLink={application.applicationLink}
          onEdit={() => console.log(`Edit ${application.companyName}`)}

        />
      ))}
    </div>
  );
}
