import css from "./Button.module.css";

const Button = ({
  //   to,
  type = "button",
  children,
  className = css.primary,
  ...props
}) => {
  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
