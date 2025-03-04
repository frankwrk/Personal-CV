"use client";

import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cross2Icon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    challenge?: string;
    solution?: string;
    process?: string;
    outcome?: string;
  };
  onNextProject: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
  onNextProject,
}) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <AnimatePresence data-oid="3nkjow8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-70 flex items-start md:items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto"
        onClick={onClose}
        style={{ backdropFilter: 'blur(4px)' }}
        data-oid=".4zb3iz"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="w-full max-w-4xl max-h-[90vh] overflow-auto"
          onClick={(e) => e.stopPropagation()}
          data-oid="ibv2nnn"
        >
          <Card
            className={
              theme === "light" ? "bg-white" : "bg-zinc-900 border-zinc-800"
            }
            data-oid="-uafu3s"
          >
            <CardContent className="p-0" data-oid="fv-g-8e">
              <div className="relative h-48 sm:h-64 md:h-96" data-oid="f8:3cu:">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-oid="lv5vfmh"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                <button
                  onClick={onClose}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white bg-black/70 hover:bg-black p-1.5 sm:p-2 rounded-full hover:scale-110 transition-all z-10"
                  aria-label="Close modal"
                  data-oid="8nc02m8"
                >
                  <Cross2Icon width={20} height={20} data-oid="lkz-ny0" />
                </button>
              </div>
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6" data-oid="ypsdpo:">
                <div data-oid="y1y.rz3">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2" data-oid="9o_c.s_">
                    {project.title}
                  </h2>
                  <p
                    className={
                      `text-sm sm:text-base ${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`
                    }
                    data-oid="wr17dli"
                  >
                    {project.category}
                  </p>
                </div>
                <div data-oid="os1edfs">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2" data-oid="b18fmf4">
                    Overview
                  </h3>
                  <p
                    className={
                      `text-sm sm:text-base ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`
                    }
                    data-oid="spubh.-"
                  >
                    {project.description}
                  </p>
                </div>
                {project.challenge && (
                  <div data-oid="20geyxs">
                    <h3
                      className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2"
                      data-oid="vbjz.ee"
                    >
                      Challenge
                    </h3>
                    <p
                      className={
                        `text-sm sm:text-base ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`
                      }
                      data-oid="omrgmpn"
                    >
                      {project.challenge}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div data-oid="qf:mr-z">
                    <h3
                      className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2"
                      data-oid="fnfb.wr"
                    >
                      Solution
                    </h3>
                    <p
                      className={
                        `text-sm sm:text-base ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`
                      }
                      data-oid="my9jlwz"
                    >
                      {project.solution}
                    </p>
                  </div>
                )}
                {project.process && (
                  <div data-oid="wnqeej0">
                    <h3
                      className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2"
                      data-oid="h9gsj:t"
                    >
                      Process
                    </h3>
                    <p
                      className={
                        `text-sm sm:text-base ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`
                      }
                      data-oid="vwqq.nc"
                    >
                      {project.process}
                    </p>
                  </div>
                )}
                {project.outcome && (
                  <div data-oid="dgba6h2">
                    <h3
                      className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2"
                      data-oid="8.dkkdy"
                    >
                      Outcome
                    </h3>
                    <p
                      className={
                        `text-sm sm:text-base ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`
                      }
                      data-oid="678jji_"
                    >
                      {project.outcome}
                    </p>
                  </div>
                )}
                <div
                  className={`pt-4 border-t ${theme === "light" ? "border-zinc-200" : "border-zinc-800"}`}
                  data-oid="4.kvso0"
                >
                  <button
                    onClick={onNextProject}
                    className={`flex items-center text-sm sm:text-base ${
                      theme === "light"
                        ? "text-zinc-700 hover:text-black"
                        : "text-zinc-300 hover:text-white"
                    } transition-colors hover:translate-x-1`}
                    data-oid="c4m1rnd"
                  >
                    Next Project
                    <ArrowRightIcon width={16} height={16} className="ml-1 sm:ml-2 sm:w-5 sm:h-5" data-oid="47xna1u" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
