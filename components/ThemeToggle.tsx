"use client";

import type React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  // Use explicit colors based on the current theme
  const iconColor = theme === "light" ? "#121212" : "white";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-secondary/20 transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      data-oid="m.iqr6d"
    >
      {theme === "light" ? (
        <MoonIcon width={16} height={16} style={{ color: iconColor }} data-oid="d4:z7ix" />
      ) : (
        <SunIcon width={16} height={16} style={{ color: iconColor }} data-oid="9qtxuya" />
      )}
    </button>
  );
};

export default ThemeToggle;
