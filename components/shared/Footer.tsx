import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href={"/"} className="text-lg font-semibold text-primary-500">
          ArcTik ☃️
        </Link>
        <p>Copyright ©2024 ArcTik, All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
