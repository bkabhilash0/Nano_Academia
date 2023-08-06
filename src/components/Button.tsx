import Link from "next/link";

interface Props {
  secondary?: boolean;
  text: string;
  link?: boolean;
  href?: string;
}
const Button: React.FC<Props> = ({
  secondary = false,
  link = false,
  href = "/",
  text,
}) => {
  if (link) {
    return (
      <Link
        href={href}
        className={`px-6 py-4 text-sm font-semibold rounded-sm bg-primaryBgColor w-auto lg:text-base text-white text-center ${secondary ? "bg-white !text-primaryColor" : ""}
    `}
      >
        {text}
      </Link>
    );
  }
  return (
    <button
      className={`px-6 py-4 text-sm font-semibold rounded-sm bg-primaryBgColor w-auto lg:text-base text-white
        ${secondary ? "bg-white text-primaryColor" : ""}
    `}
    >
      {text}
    </button>
  );
};

export default Button;
