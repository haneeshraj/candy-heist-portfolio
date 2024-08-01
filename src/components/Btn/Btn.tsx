import { Link } from "react-router-dom";

const Btn = ({ text, to }: { text: string; to: string }) => {
  return <Link to={to}>{text}</Link>;
};

export default Btn;
