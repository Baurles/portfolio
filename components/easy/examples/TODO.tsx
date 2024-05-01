import { FaGithub } from "react-icons/fa";
export const TODO = () => {
  return (
    <div className="min-w-full text-black max-w-full flex h-full rounded-lg border-2 border-black">
      <div className="w-4/6 h-full border-r-2 border-black "></div>
      <div className="w-2/6 gap-10 pt-2 justify-center h-full flex flex-col items-center ">
        <span className="font-bold text-2xl">TODO</span>
        <span>Туду Лист</span>
        <FaGithub size={50} />
      </div>
    </div>
  );
};
