// components/ResponsiveIframe.js
import React from "react";
import styles from "./map-frame.module.css"
export default function ResponsiveIframe({ src, title }) {
  if (!src || typeof src !== "string") {
    console.error("Invalid iframe src provided");
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <iframe
        src={src}
        title={title || "Embedded content"}
        style={styles.iframe}
        frameBorder="0"
        allowFullScreen
        loading="lazy" // Improves performance
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
