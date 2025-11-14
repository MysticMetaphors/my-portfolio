import { cn } from "@/lib/utils";
import { motion } from "framer-motion"

type GridProps = {
  reverse?: boolean
  perspective?: boolean
}

export function GridBackground({ reverse = false, perspective }: GridProps) {

  if (!reverse && !perspective) {
    return <div className="absolute left-0 -bottom-12 bg-cover bg-repeat bg-center origin-top [transform:perspective(480px)_rotateX(60deg)] h-[60%] w-[100%]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#006ebd_1px,transparent_1px),linear-gradient(to_bottom,#006ebd_1px,transparent_1px)]",
        )}
      />
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-gray-900 to-blue-primary/10" />

      <motion.div
        className="absolute z-1 top-0 w-full h-[200%] bg-gradient-to-b from-gray-900 via-gray-900 to-transparent"
        initial={{ opacity: 1, y: 0 }}
        whileInView={{
          opacity: [1, 0.4, 0],
          y: [0, -40, -600],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      />
    </div>
  } else if (reverse && !perspective) {
    return <div className="absolute right-0 top-0 bg-cover bg-repeat bg-center origin-top [transform:perspective(480px)_rotateX(-60deg)] h-[40%] w-[100%]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#006ebd_1px,transparent_1px),linear-gradient(to_bottom,#006ebd_1px,transparent_1px)]",
        )}
      />
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-gray-900 to-blue-primary/10" />

      <motion.div
        className="absolute z-1 top-0 w-full h-[200%] bg-gradient-to-b from-gray-900 via-gray-900 to-transparent"
        initial={{ opacity: 1, y: 0 }}
        whileInView={{
          opacity: [1, 0.4, 0],
          y: [0, -40, -600],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      />
    </div>
  }

  return (
    <div className="absolute z-1 left-0 top-0 h-full w-full overflow-hidden">
      <div className="absolute top-0 z-1 w-full h-full bg-linear-to-r from-green-primary via-green-primary to-green-primary/70"></div>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#006ebd_1px,transparent_1px),linear-gradient(to_bottom,#006ebd_1px,transparent_1px)]",
        )}
      />
    </div>
  );
}