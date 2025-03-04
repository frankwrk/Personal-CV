"use client";

import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
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
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
        onClick={onClose}
        data-oid=".4zb3iz"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="w-full max-w-4xl"
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
              <div className="relative h-64 md:h-96" data-oid="f8:3cu:">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-oid="lv5vfmh"
                />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors"
                  data-oid="8nc02m8"
                >
                  <X size={24} data-oid="lkz-ny0" />
                </button>
              </div>
              <div className="p-6 space-y-6" data-oid="ypsdpo:">
                <div data-oid="y1y.rz3">
                  <h2 className="text-3xl font-bold mb-2" data-oid="9o_c.s_">
                    {project.title}
                  </h2>
                  <p
                    className={
                      theme === "light" ? "text-zinc-600" : "text-zinc-400"
                    }
                    data-oid="wr17dli"
                  >
                    {project.category}
                  </p>
                </div>
                <div data-oid="os1edfs">
                  <h3 className="text-xl font-semibold mb-2" data-oid="b18fmf4">
                    Overview
                  </h3>
                  <p
                    className={
                      theme === "light" ? "text-zinc-700" : "text-zinc-300"
                    }
                    data-oid="spubh.-"
                  >
                    {project.description}
                  </p>
                </div>
                {project.challenge && (
                  <div data-oid="20geyxs">
                    <h3
                      className="text-xl font-semibold mb-2"
                      data-oid="vbjz.ee"
                    >
                      Challenge
                    </h3>
                    <p
                      className={
                        theme === "light" ? "text-zinc-700" : "text-zinc-300"
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
                      className="text-xl font-semibold mb-2"
                      data-oid="fnfb.wr"
                    >
                      Solution
                    </h3>
                    <p
                      className={
                        theme === "light" ? "text-zinc-700" : "text-zinc-300"
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
                      className="text-xl font-semibold mb-2"
                      data-oid="h9gsj:t"
                    >
                      Process
                    </h3>
                    <p
                      className={
                        theme === "light" ? "text-zinc-700" : "text-zinc-300"
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
                      className="text-xl font-semibold mb-2"
                      data-oid="8.dkkdy"
                    >
                      Outcome
                    </h3>
                    <p
                      className={
                        theme === "light" ? "text-zinc-700" : "text-zinc-300"
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
                    className={`flex items-center ${
                      theme === "light"
                        ? "text-zinc-700 hover:text-black"
                        : "text-zinc-300 hover:text-white"
                    } transition-colors`}
                    data-oid="c4m1rnd"
                  >
                    Next Project
                    <ArrowRight size={20} className="ml-2" data-oid="47xna1u" />
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
