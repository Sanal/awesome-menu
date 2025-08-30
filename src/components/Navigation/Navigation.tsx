import { useEffect, useRef } from "react";
import { getRemValue } from "../../utils/getRemValue";
import styles from "./Navigation.module.css";

import type React from "react";

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
      const container = containerRef.current;
      const target = targetRef.current;
      const rem = getRemValue();

      if (container && target) {
        container.scrollTo({
          left: target.offsetLeft - container.offsetLeft - rem / 2,
          behavior: "smooth",
        });
      }
    }
  }, [currentCategoryId]);

  const handleAnchorScroll = (e: React.UIEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;
    const targetElement = document.querySelector(href);
    if (!targetElement) return;
    const yOffset = -getRemValue() * 2.5;
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
