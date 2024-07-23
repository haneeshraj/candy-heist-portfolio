import { motion } from "framer-motion";

const FadeLetters = ({
  text,
  addDelay,
  className,
  style,
}: {
  text: string;
  addDelay?: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const letters = text.split("");

  return (
    <>
      <span className={className} style={style}>
        {letters.map((letter, index) => {
          return (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + (addDelay ? addDelay : 0),
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          );
        })}
      </span>
    </>
  );
};

export default FadeLetters;
