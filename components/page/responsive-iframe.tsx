// components/ResponsiveIframe.js
import React from "react";
<<<<<<< HEAD
// import styles from "@/styles/map-frame.module.css"
=======
import styles from "./map-frame.module.css"
>>>>>>> ff2ab5fe08907587712ac615a88ff5bb9f44453a
export default function ResponsiveIframe({ src, title }) {
  if (!src || typeof src !== "string") {
    console.error("Invalid iframe src provided");
    return null;
  }

  return (
<<<<<<< HEAD
    <div className="w-full relative h-[40rem] mx-auto">
      <iframe
        src={src}
        title={title || "Embedded content"}
        className="w-full max-w-[64rem] h-[40rem] absolute mx-auto top-0 "
=======
    <div className={styles.wrapper}>
      <iframe
        src={src}
        title={title || "Embedded content"}
        className={styles.iframemap}
>>>>>>> ff2ab5fe08907587712ac615a88ff5bb9f44453a
        frameBorder="0"
        allowFullScreen
        loading="lazy" // Improves performance
        referrerPolicy="no-referrer"
        
      />
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> ff2ab5fe08907587712ac615a88ff5bb9f44453a
