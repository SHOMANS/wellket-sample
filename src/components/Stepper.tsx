"use client"
import { JSX, useState } from "react";

type Step = {
  title: string;
  content: JSX.Element;
};

interface StepperProps {
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Step Indicators */}
      <div className="flex items-center space-x-4 mb-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${index <= currentStep ? "bg-blue-500" : "bg-gray-300"
                }`}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-10 h-1 ${index < currentStep ? "bg-blue-500" : "bg-gray-300"
                  }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="w-full p-4 border rounded-md shadow">
        {steps[currentStep].content}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex space-x-4">
        <button
          onClick={goToPreviousStep}
          disabled={currentStep === 0}
          className={`px-4 py-2 rounded ${currentStep === 0
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white"
            }`}
        >
          Previous
        </button>
        <button
          onClick={goToNextStep}
          disabled={currentStep === steps.length - 1}
          className={`px-4 py-2 rounded ${currentStep === steps.length - 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
