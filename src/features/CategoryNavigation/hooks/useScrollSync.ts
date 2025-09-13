import { useEffect, useRef } from "react";
import { getWindowDimensions } from "@/shared/lib/helpers";

export const useScrollSync = (currentCategoryId?: Category["id"]) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (containerRef.current && targetRef.current) {
      const { width } = getWindowDimensions();
      const isMobile = width <= 1024;
      const container = containerRef.current;
      const target = targetRef.current;
      const scrollOffsetLeft = isMobile
        ? target.offsetLeft - container.offsetWidth / 2 + target.offsetWidth / 2
        : 0;
      const scrollOffsetTop = isMobile
        ? 0
        : target.offsetTop -
          container.offsetHeight / 2 +
          target.offsetHeight / 2;

      console.log({
        target,
        container,
        scrollOffsetLeft,
        scrollOffsetTop,
        isMobile,
      });

      container.scrollTo({
        left: scrollOffsetLeft,
        top: scrollOffsetTop,
        behavior: "smooth",
      });
    }
  }, [currentCategoryId]);

  return { containerRef, targetRef };
};
