import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "../Typography";

const steps = [
  {
    label: "It's not easy as 1-2-3.",
    description: `The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know(and nothing else).`,
  },
  {
    label: "Old habits are hard to break.",
    description:
      "And bad behaviors die hard. Fortunately, we give you great, science-based techniques to use.",
  },
  {
    label: "You and your motivation don't have a long-term relationship.",
    description: `Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals.`,
  },
  {
    label: "Books just don't offer practical solutions.",
    description: `Remember when you learned to ride a bike just by reading? Yeah, we don't either. We help you take concrete small steps towards your goals. Learning just a bit, then immediately springing into action.`,
  },
  {
    label: "Inspiration is great, but then what.",
    description: `We make your energy from all the content you consume does not fizzle out.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (index) => {
    setActiveStep(index);
  };

  const handleMouseEnter = (index) => {
    setActiveStep(index);
  };

  const handleMouseLeave = () => {
    // Reset activeStep when mouse leaves the steps
    setActiveStep(-1);
  };

  return (
    <Box sx={{ width: 400, height: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step
            key={step.label}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography variant={"tiny-text"}>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
