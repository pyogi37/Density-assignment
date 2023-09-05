import ColoredComponent from "../ColoredComponent";

import Typography from "../Typography";

const EqIq = () => {
  return (
    <ColoredComponent>
      <Typography
        variant={"sub-heading-2"}
        text={"EQ beats IQ"}
        className={"pr-5"}
      />
      <Typography
        variant={"paragraph"}
        text={
          "People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships."
        }
        className={"pr-5"}
      />
      <Typography
        variant={"paragraph"}
        text={
          "They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year"
        }
      />
    </ColoredComponent>
  );
};

export default EqIq;
