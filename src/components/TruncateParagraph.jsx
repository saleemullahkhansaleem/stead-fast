import React, { useState } from "react";

export default function TruncateParagraph({ text, className }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleShowMore = () => {
    setIsExpanded((prev) => !prev);
  };

  // Split text into words
  const words = text.split(" ");
  const shouldTruncate = words.length > 10;

  return (
    <div className="">
      <p className={`inline ${className}`}>
        {isExpanded || !shouldTruncate
          ? text
          : `${words.slice(0, 9).join(" ")}... `}
      </p>
      {shouldTruncate && (
        <button className="p-1 text-primary" onClick={toggleShowMore}>
          {isExpanded ? " Show Less" : " Show More"}
        </button>
      )}
    </div>
  );
}
