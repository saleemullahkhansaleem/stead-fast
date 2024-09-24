import { Link } from "react-router-dom";

export default function Button({ children, className = "", href, ...props }) {
  const commonClasses = `px-6 py-3 bg-primary hover:bg-secondary rounded-full text-background transition-colors duration-200 ${className}`;

  if (href) {
    return (
      <Link to={href} className={commonClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={commonClasses} {...props}>
      {children}
    </button>
  );
}
