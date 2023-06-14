import Graph from "./Graph";

const Header = () => {
  return (
    <div className="text-center flex justify-center gap-4 flex-col items-center py-10">
      <h1 className="text-[16px]  font-extrabold">RLW Usher's Counter</h1>
      <div className="">
        <Graph />
      </div>
    </div>
  );
};

export default Header;
