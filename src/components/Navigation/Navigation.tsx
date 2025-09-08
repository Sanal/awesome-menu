import { useEffect, useRef } from "react";
import { getRemValue } from "../../utils/getRemValue";
import styles from "./Navigation.module.css";

import type React from "react";
import { getWindowDimensions } from "../../utils/getWindowDimensions";

type Props = {
  categories: Category[];
  currentCategoryId?: Category["id"];
};

export const Navigation: React.FC<Props> = ({
  categories,
  currentCategoryId,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (containerRef.current && targetRef.current) {
      const { width } = getWindowDimensions();
      const isMobile = width <= 1024;
      const container = containerRef.current;
      const target = targetRef.current;
      const scrollOffsetLeft = isMobile ? target.offsetLeft - container.offsetWidth / 2 + target.offsetWidth / 2 : 0;
      const scrollOffsetTop = isMobile ? 0 : target.offsetTop - container.offsetHeight / 2 + target.offsetHeight / 2;

      console.log({
        target,
        container,
        scrollOffsetLeft,
        scrollOffsetTop,
        isMobile
      });

      container.scrollTo({
        left: scrollOffsetLeft,
        top: scrollOffsetTop,
        behavior: "smooth",
      });
    }
  }, [currentCategoryId]);

  const handleAnchorScroll = (e: React.UIEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");

    if (!href) return;

    const targetElement = document.querySelector(href);

    if (!targetElement) return;

    const { width } = getWindowDimensions();
    const yOffset = width <= 1024 ? -getRemValue() * 2.5 : 0;
    const y =
      targetElement.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.wrapper}>
        <ul className={styles.navigationList}>
          {categories.map(({ id, name }) => {
            const categoryId = `category-${id}`;
            const isCurrent = id === currentCategoryId;
            return (
              <li key={categoryId} ref={isCurrent ? targetRef : null}>
                <a
                  href={"#" + categoryId}
                  onClick={handleAnchorScroll}
                  className={
                    styles.link + " " + (isCurrent ? styles.currentLink : "")
                  }
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
