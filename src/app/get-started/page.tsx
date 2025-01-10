import MedicalSurvey from "@/components/MedicalSurvey";
import Payment from "@/components/Payment";
import PersonalInformation from "@/components/PersonalInformation";
import Stepper from "@/components/Stepper";

export default function StepperPage() {

  const steps = [
    {
      title: "Personal Information",
      content: <PersonalInformation />
    },
    {
      title: "Medical Survey",
      content: <MedicalSurvey />
    },
    {
      title: "Payment",
      content: <Payment />,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Stepper steps={steps} />
    </div>
  );
}
