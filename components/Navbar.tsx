import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="w-full flex justify-between items-center py-3">
      {/* Logo */}
      <Link href={"/"}>
        <div>LOGO</div>
      </Link>
    </header>
  );
}
