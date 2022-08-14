import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

function Header() {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className=" mx-auto max-w-3xl  pt-4 ">
      <div className="flex items-center justify-end">
        <button
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
          type="button"
          className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label={theme === "light" ? "Dark theme" : "Light theme"}
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </header>
  );
}

export default Header;
