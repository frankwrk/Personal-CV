"use client";

import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { theme } = useTheme();

  return (
    <AnimatePresence data-oid="wt-lrxh">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
          data-oid="0g_:a_0"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
            data-oid="m5sa5qt"
          >
            <Card
              className={
                theme === "light" ? "bg-white" : "bg-zinc-900 border-zinc-800"
              }
              data-oid="d:par7x"
            >
              <CardContent className="p-6" data-oid="a.:5nxf">
                <div
                  className="flex justify-between items-center mb-4"
                  data-oid="td0_i-p"
                >
                  <h2 className="text-2xl font-bold" data-oid="69hab:j">
                    Contact Me
                  </h2>
                  <button
                    onClick={onClose}
                    className={`${theme === "light" ? "text-zinc-600" : "text-zinc-400"} hover:text-black dark:hover:text-white`}
                    data-oid="7g_h4_p"
                  >
                    <X size={24} data-oid="l.hbozp" />
                  </button>
                </div>
                <form className="space-y-4" data-oid="z53-t:p">
                  <div data-oid="fenq1ow">
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-1 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}
                      data-oid="np0xvl8"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-3 py-2 rounded-md ${
                        theme === "light"
                          ? "bg-zinc-100 border-zinc-300 text-black"
                          : "bg-zinc-800 border-zinc-700 text-white"
                      }`}
                      required
                      data-oid="ji:.qe7"
                    />
                  </div>
                  <div data-oid="1o3owh5">
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-1 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}
                      data-oid="ydjepzh"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-3 py-2 rounded-md ${
                        theme === "light"
                          ? "bg-zinc-100 border-zinc-300 text-black"
                          : "bg-zinc-800 border-zinc-700 text-white"
                      }`}
                      required
                      data-oid="4nxy4g3"
                    />
                  </div>
                  <div data-oid="3or673z">
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-1 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}
                      data-oid="czqnjzs"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={`w-full px-3 py-2 rounded-md ${
                        theme === "light"
                          ? "bg-zinc-100 border-zinc-300 text-black"
                          : "bg-zinc-800 border-zinc-700 text-white"
                      }`}
                      required
                      data-oid="jqx1ud0"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className={`w-full font-medium py-2 px-4 rounded-md transition-colors ${
                      theme === "light"
                        ? "bg-black text-white hover:bg-zinc-800"
                        : "bg-white text-black hover:bg-zinc-200"
                    }`}
                    data-oid="07fe2n8"
                  >
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;
