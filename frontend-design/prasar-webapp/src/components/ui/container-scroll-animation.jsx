import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useScrollContext } from "./smooth-scroll";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { wrapperRef } = useScrollContext();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: wrapperRef,
    layoutEffect: false,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], isMobile ? [8, 0] : [12, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [0.88, 1] : scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], isMobile ? [0, -40] : [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[65rem] lg:h-[85rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-2 md:py-20 lg:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({ rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl mt-4 md:-mt-12 mx-auto h-[18rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
