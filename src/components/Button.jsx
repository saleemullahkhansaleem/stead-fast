import { Link } from "react-router-dom";

export default function Button({
  children,
  className = "",
  href,
  disabled = false,
  ...props
}) {
  const commonClasses = `px-5 py-3 bg-primary text-sm ${
    disabled === false ? "hover:bg-secondary" : "cursor-not-allowed"
  } rounded-full text-background transition-colors duration-200 leading-none truncate ${className}`;

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
