import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { appleEase } from "../data/motionConfig";

interface SmoothFadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export const SmoothFadeIn: React.FC<SmoothFadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  yOffset = 24,
  className = "",
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: appleEase
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerChildren = 0.1,
  delayChildren = 0.05,
  className = "",
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  yOffset?: number;
  duration?: number;
  className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  yOffset = 20,
  duration = 0.6,
  className = "",
  ...props
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: appleEase
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface SmoothHeadlineProps {
  text: string;
  highlightText?: string;
  className?: string;
}

/**
 * Apple-style masked text reveal where words smoothly glide upwards
 */
export const SmoothHeadline: React.FC<SmoothHeadlineProps> = ({
  text,
  highlightText,
  className = ""
}) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.85,
          ease: appleEase,
          delay: 0.1
        }}
      >
        <span>{text}</span>
        {highlightText && (
          <>
            {" "}
            <span className="text-[#43A66B] inline-block">{highlightText}</span>
          </>
        )}
      </motion.div>
    </div>
  );
};
