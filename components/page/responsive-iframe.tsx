// components/ResponsiveIframe.js
import React from "react";

export default function ResponsiveIframe({ src, title }) {
  if (!src || typeof src !== "string") {
    console.error("Invalid iframe src provided");
    return null;
  }

  return (
    <div className="wrapper">
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

<style jsx>{
  .wrapper {
    position: "relative",
    paddingBottom: "56.25%", // 16:9 aspect ratio
    height: 0,
    overflow: "hidden",
    width: "100%",
    background: "#000",
  },
  iframe {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "0",
  },
}</style>
