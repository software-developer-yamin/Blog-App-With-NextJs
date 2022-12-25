import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="sticky top-0 z-50 flex justify-between navbar bg-base-100">
      <Link href={"/"} passHref legacyBehavior>
        <a className="text-xl normal-case btn btn-ghost">Blog</a>
      </Link>
      <Link href={"/about"} passHref legacyBehavior>
        <a className="btn">About us</a>
      </Link>
    </div>
  );
};

export default Header;
