import { PuffLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="flex justify-center w-full p-8">
      <PuffLoader size={200} color={"#870604"} />
    </div>
  );
}
