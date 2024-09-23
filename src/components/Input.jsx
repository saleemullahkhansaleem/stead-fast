export default function Input({ label, type = "text", ...props }) {
  return (
    <div>
      {label && (
        <label className="block font-medium text-foregroundMuted">
          {label}
        </label>
      )}
      <input
        type={type}
        {...props}
        className="mt-1 px-4 py-2 block w-full border border-muted rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
      />
    </div>
  );
}
