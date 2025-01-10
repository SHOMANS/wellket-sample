import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  { title: "Step 1", description: "Sign up and create your account." },
  { title: "Step 2", description: "Fill out your personal information." },
  { title: "Step 3", description: "Get matched with professionals." },
  { title: "Step 4", description: "Start your journey!" },
];

const Step: React.FC<{ step: { title: string; description: string }; index: number }> = ({
  step,
  index,
}) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col items-center justify-center relative"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full mb-4">
        {index + 1}
      </div>
      {index === 3 ||
        <motion.div
          className="absolute top-32 md:top-24 bottom-0 w-1 bg-gray-300 z-0"
          initial={{ height: 0 }}
          animate={inView ? { height: "300%" } : {}}
          transition={{ duration: 1, delay: 1 }}
        ></motion.div>
      }

      <div className={`flex flex-col items-center justify-center ${index % 2 === 0 ? "md:translate-x-52" : "md:-translate-x-52"} md:-translate-y-16`}>
        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
        <p className="text-gray-600 text-center">{step.description}</p>
      </div>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col items-center space-y-96">
          {steps.map((step, index) => (
            <Step key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;