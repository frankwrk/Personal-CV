"use client";

import type React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      data-oid="m.iqr6d"
    >
      {theme === "light" ? (
        <MoonIcon width={20} height={20} data-oid="d4:z7ix" />
      ) : (
        <SunIcon width={20} height={20} data-oid="9qtxuya" />
      )}
    </button>
  );
};

export default ThemeToggle;
