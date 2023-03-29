import Link from "next/link";
import { IconType } from "react-icons";

interface LinkType {
  IconComponent: IconType;
  text: string;
  color: string;
  link: string;
}

const Links: React.FC<LinkType> = ({ IconComponent, color, text, link }) => {
  return (
    <Link
      href={link}
      className="flex gap-2 justify-center items-center py-4 px-6 bg-slate-200 rounded-lg w-full sm:w-[40%] hover:scale-105"
    >
      <IconComponent
        className={`w-[25px] h-[25px] min-w-[5px] min-h-[5px] ${color}`}
      />
      <span className="flex-1 text-center">{text}</span>
    </Link>
  );
};

export default Links;
