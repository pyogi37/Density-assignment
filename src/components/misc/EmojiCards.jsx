import ColoredComponent from "../ColoredComponent";
import Typography from "../Typography";

const EmojiCard = ({ color, emoji, heading, text, id }) => {
  emoji = String.fromCodePoint(emoji);

  return (
    <div className="p-4 w-auto h-5 emojiCard" id={id}>
      <ColoredComponent
        color={color}
        flexDirection={"column"}
        className={"w-96 h-5"}
        height={"15rem"}
      >
        <Typography variant={"heading"} text={emoji} className={"pb-2"} />
        <Typography
          variant={"sub-heading-2"}
          text={heading}
          className={"pb-2"}
        />
        <Typography variant={"tiny-text"} text={text} />
      </ColoredComponent>
    </div>
  );
};

export default EmojiCard;
