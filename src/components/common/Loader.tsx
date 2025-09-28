import { MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="w-[100px] h-[100px]">
        <MoonLoader color="#3470FF" size={72} />
      </div>
    </div>
  );
};

export default Loader;
