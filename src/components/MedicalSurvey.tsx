"use client"
import { useState } from "react";


const MedicalSurvey: React.FC = ({

}) => {
  const [surveyData, setSurveyData] = useState<{
    hasAllergies: string;
    takesMedication: string;
  }>({
    hasAllergies: "",
    takesMedication: "",
  });
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Medical Survey</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">
            Do you have any allergies?
          </label>
          <select
            className="w-full p-2 border rounded"
            value={surveyData.hasAllergies}
            onChange={(e) =>
              setSurveyData({ ...surveyData, hasAllergies: e.target.value })
            }
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">
            Are you currently taking any medications?
          </label>
          <select
            className="w-full p-2 border rounded"
            value={surveyData.takesMedication}
            onChange={(e) =>
              setSurveyData({ ...surveyData, takesMedication: e.target.value })
            }
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default MedicalSurvey;
