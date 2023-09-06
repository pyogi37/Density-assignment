import Box from "../Box";
import Typography from "../Typography";

const HorizontalList = () => {
  return (
    <>
      <div className="relative w-4/5 pb-8 pt-8">
        {/* <!-- Start Image --> */}
        <img
          src="/assets/star.png"
          alt="Start Image"
          className="w-6 h-6 absolute left-0 top-1/2 transform -translate-y-1/2 stars"
        />

        {/* <!-- Middle Image --> */}
        <img
          src="/assets/star.png"
          alt="Middle Image"
          className="w-6 h-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 stars"
        />

        {/* <!-- End Image --> */}
        <img
          src="/assets/star.png"
          alt="End Image"
          className="w-6 h-6 absolute right-0 top-1/2 transform -translate-y-1/2 stars"
        />

        {/* <!-- Dotted Border --> */}
        <div
          className="border-t border-dotted border-4 w-full mx-auto dotted-line"
          style={{ backgroundColor: "#d68d4c" }}
        ></div>
      </div>

      <div className="w-full flex justify-between pb-12">
        <Typography
          variant={"paragraph"}
          text={"Answer questions on your social skills"}
          className={"w-1/4 skillText"}
        />
        <Typography
          variant={"paragraph"}
          text={"Let others anonymously answer the same questions about you"}
          className={"w-1/4 skillText"}
        />
        <Typography
          variant={"paragraph"}
          text={
            "Find out where you and others see things the same way - and where not!"
          }
          className={"w-1/4 skillText"}
        />
      </div>
    </>
  );
};

export default HorizontalList;
