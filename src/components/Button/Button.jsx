import { Link } from "react-router-dom";
import css from "./Button.module.css";

const Button = ({
  to,
  // type = "button",
  children,
  className = css.primary,
  ...props
}) => {
  return (
    <Link to={to} className={className} {...props}>
      {children}
    </Link>
  );
};

export default Button;
