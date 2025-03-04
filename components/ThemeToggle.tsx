"use client";

import type React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      data-oid="m.iqr6d"
    >
      {theme === "light" ? (
        <Moon size={20} data-oid="d4:z7ix" />
      ) : (
        <Sun size={20} data-oid="9qtxuya" />
      )}
    </button>
  );
};

export default ThemeToggle;
