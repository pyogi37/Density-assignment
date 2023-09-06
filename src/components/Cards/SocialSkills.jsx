import ColoredComponent from "../ColoredComponent";
import Typography from "../Typography";

const SocialSkills = () => {
  return (
    <ColoredComponent
      color={"#edf8fe"}
      flexDirection={"column"}
      className={"items-center text-center"}
    >
      <Typography
        variant={"paragraph"}
        text={
          "Let your friends, family, and co-workers(anonymously) rate your social skills."
        }
        className={"pb-2"}
      />
      <Typography
        variant={"sub-heading"}
        text={"Ever wondered what others think of you?"}
        className={"pb-2"}
      />
      <img src="/assets/social-skills.png" alt="" />
    </ColoredComponent>
  );
};

export default SocialSkills;
