import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

function Header() {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className="pt-8">
      <div className="container flex items-center justify-end">
        {/* 4 l8r */}
        {/* <Link href="/">
          <a className="short-transitions group font-mono hover:animate-[spin_2s_linear_infinite]">
            &lt;3
          </a>
        </Link> */}

        <button
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
          aria-label="Toggle dark/light mode"
          type="button"
          className="rounded-md p-2 transition-colors duration-300 hover:bg-gray-500/10"
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </header>
  );
}

export default Header;
