export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`px-6 py-2 bg-primary hover:bg-secondary rounded-full text-background ${className}`}
    >
      {children}
    </button>
  );
}
