"use client";

import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Linkedin,
  Instagram,
  Github,
  Globe,
  Phone,
  Mail,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  return (
    <AnimatePresence data-oid="e6cnby0">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className={`fixed inset-y-0 right-0 w-64 ${
            theme === "light" ? "bg-white" : "bg-zinc-900"
          } p-6 shadow-lg z-50`}
          data-oid="g1r2f-p"
        >
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 ${
              theme === "light" ? "text-zinc-600" : "text-zinc-400"
            } hover:text-black dark:hover:text-white`}
            data-oid="2eukln9"
          >
            <X size={24} data-oid="qfd:esu" />
          </button>
          <nav className="mt-8" data-oid="eoq6kte">
            <ul className="space-y-4" data-oid="ue83jz3">
              <li data-oid="f1t-bgl">
                <a
                  href="mailto:your.email@example.com"
                  className={`flex items-center space-x-2 ${
                    theme === "light" ? "text-zinc-600" : "text-zinc-400"
                  } hover:text-black dark:hover:text-white transition-colors`}
                  data-oid="k25888r"
                >
                  <Mail size={20} data-oid="yb2dd4g" />
                  <span data-oid="9-5h2:y">Email</span>
                </a>
              </li>
              <li data-oid="p5-94_z">
                <a
                  href="tel:+11234567890"
                  className={`flex items-center space-x-2 ${
                    theme === "light" ? "text-zinc-600" : "text-zinc-400"
                  } hover:text-black dark:hover:text-white transition-colors`}
                  data-oid="fhyzo40"
                >
                  <Phone size={20} data-oid="4yt7xwn" />
                  <span data-oid="r0s86ki">Phone</span>
                </a>
              </li>
              <li data-oid="eq_ha9w">
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 ${
                    theme === "light" ? "text-zinc-600" : "text-zinc-400"
                  } hover:text-black dark:hover:text-white transition-colors`}
                  data-oid="06t3a_x"
                >
                  <Linkedin size={20} data-oid="uvk:onh" />
                  <span data-oid="c_gp5lw">LinkedIn</span>
                </a>
              </li>
              <li data-oid="g9b1znr">
                <a
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 ${
                    theme === "light" ? "text-zinc-600" : "text-zinc-400"
                  } hover:text-black dark:hover:text-white transition-colors`}
                  data-oid="kyk9xvz"
                >
                  <Instagram size={20} data-oid="64clf0w" />
                  <span data-oid="g31acw4">Instagram</span>
                </a>
              </li>
              <li data-oid="or_qyor">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 ${
                    theme === "light" ? "text-zinc-600" : "text-zinc-400"
                  } hover:text-black dark:hover:text-white transition-colors`}
                  data-oid="p5rsjib"
                >
                  <Github size={20} data-oid="nn1w1th" />
                  <span data-oid="osbznb2">GitHub</span>
                </a>
              </li>
              <li data-oid="6ohhgnu">
                <a
                  href="https://www.yourbusinesswebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 ${
                    theme === "light" ? "text-zinc-600" : "text-zinc-400"
                  } hover:text-black dark:hover:text-white transition-colors`}
                  data-oid="oy__af0"
                >
                  <Globe size={20} data-oid="um6escy" />
                  <span data-oid="hty10bf">Website</span>
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
