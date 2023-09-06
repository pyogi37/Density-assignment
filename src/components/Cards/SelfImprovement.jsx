import ColoredComponent from "../ColoredComponent";
import Typography from "../Typography";
import Box from "../Box";
import Stepper from "../misc/Stepper";

const SelfImprovement = () => {
  return (
    <ColoredComponent flexDirection={"column"} height={"90vh"} id={"manifesto"}>
      <Typography
        variant={"paragraph"}
        text={"Wrong with self-improvement & how we're fixing it."}
        className={"p-2 pl-12"}
      />
      <span className="flex items-center ">
        <Typography
          variant={"sub-heading-2"}
          text={"Self-improvement. Ugh."}
          className={"p-2 pl-12"}
        />
        <img src="/assets/blue.png" alt="blue" id="improvement-icon" />
      </span>
      <Box className={"p-4 relative left-20 p-2 justify-center"}>
        <Stepper />
      </Box>
    </ColoredComponent>
  );
};

export default SelfImprovement;
