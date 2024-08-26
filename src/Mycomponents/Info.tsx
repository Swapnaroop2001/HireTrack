import { Card } from "@/components/ui/card";
import { InputWithLabel } from "./InputWithLabel";

export default function Info() {
  return (
    <div className="mt-20">  
    <div className="flex justify-between gap-4 mb-4">
        <Card title="Hello">
            
        </Card>
        <InputWithLabel label="Company Name" id="Company-Name" type="text" placeholder="company name" />
        <InputWithLabel label="Job-Internship Role" id="Job-Name" type="text" placeholder="job name" />
        <InputWithLabel label="Link" id="link" type="text" placeholder="enter link" />
      </div>
  </div>
  )
}
