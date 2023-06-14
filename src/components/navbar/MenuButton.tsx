import { FaBars } from "react-icons/fa";

type MenuButtonProps = {
  onClick?: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  return (
    <div
      className="flex items-center bg-white rounded-full p-2 justify-center hover:scale-110 transition-all cursor-pointer"
      onClick={onClick}
    >
      <FaBars size={24} />
    </div>
  );
};

export default MenuButton;
