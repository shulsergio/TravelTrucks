import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({
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

export default LoadMoreBtn;
