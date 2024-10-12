import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CallUsButton() {
  return (
    <Link
      title="Call us"
      to="tel:+92518739888"
      className="fixed bottom-6 right-6 z-50 px-4 py-2 bg-primary text-white rounded-lg shadow-lg hover:bg-secondary hover:shadow-xl transition-all duration-300 flex items-center gap-2"
    >
      <MdCall className="text-2xl" /> Call Us Now
    </Link>
  );
}
