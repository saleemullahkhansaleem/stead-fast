import { Link } from "react-router-dom";

export default function Button({
  children,
  className = "",
  href,
  disabled = false,
  ...props
}) {
  const commonClasses = `px-6 py-3 bg-primary ${
    disabled === false ? "hover:bg-secondary" : "cursor-not-allowed"
  } rounded-full text-background transition-colors duration-200 ${className}`;

  if (href) {
    return (
      <Link to={href} className={commonClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={commonClasses} {...props}>
      {children}
    </button>
  );
}
