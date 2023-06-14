import { useStore } from "../utils/useStore";

const Footer = () => {
  const setAllToZero = useStore((state) => state.setAllToZero);
  const icons = [
    // { name: "fa fa-check", color: "green" },
    // { name: "fa fa-home", color: "blue" },
    { name: "fa fa-times", color: "red" },
  ];
  return (
    <div className="border-[1px] border-[#EDD9E9] rounded-tl-[10px] rounded-tr-[10px] mt-4  absolute bottom-0 w-full h-[70px] grid place-content-center">
      <div className="flex justify-center gap-20">
        {icons.map((icon) => (
          <i
            className={`${icon.name} text-[35px]`}
            aria-hidden="true"
            style={{ color: icon.color }}
            onClick={setAllToZero}
          ></i>
        ))}
      </div>
    </div>
  );
};

export default Footer;
