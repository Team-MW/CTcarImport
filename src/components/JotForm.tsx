"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./JotForm.module.css";

export default function JotForm() {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleIFrameMessage = (e: MessageEvent) => {
      if (typeof e.data === "object") { return; }
      const args = e.data.split(":");
      
      const iframe = iframeRef.current;
      if (!iframe) { return; }
      
      switch (args[0]) {
        case "scrollIntoView":
          iframe.scrollIntoView();
          break;
        case "setHeight":
          iframe.style.height = args[1] + "px";
          break;
        case "collapseErrorPage":
          if (iframe.clientHeight > window.innerHeight) {
            iframe.style.height = window.innerHeight + "px";
          }
          break;
        case "reloadPage":
          window.location.reload();
          break;
      }
      
      const isJotForm = e.origin.indexOf("jotform") > -1;
      if (isJotForm && iframe.contentWindow) {
        const urls = {
          docurl: encodeURIComponent(document.URL),
          referrer: encodeURIComponent(document.referrer)
        };
        iframe.contentWindow.postMessage(JSON.stringify({ type: "urls", value: urls }), "*");
      }
    };

    window.addEventListener("message", handleIFrameMessage, false);
    
    return () => {
      window.removeEventListener("message", handleIFrameMessage, false);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Écran de chargement (masqué au lieu d'être supprimé du DOM) */}
      <div 
        className={styles.loader} 
        style={{ display: loaded ? "none" : "flex" }}
      >
        <div className={styles.spinner} />
        <p className={styles.loaderText}>Chargement du formulaire…</p>
      </div>

      {/* iframe JotForm */}
      <iframe
        ref={iframeRef}
        id="JotFormIFrame-251102890316348"
        title="Formulaire de demande GT Cars Import"
        src="https://form.jotform.com/251102890316348?isIframeEmbed=1"
        allowFullScreen
        allow="geolocation; microphone; camera"
        onLoad={() => {
          setLoaded(true);
          setTimeout(() => {
            const iframe = iframeRef.current;
            if (iframe && iframe.contentWindow) {
              const urls = {
                docurl: encodeURIComponent(document.URL),
                referrer: encodeURIComponent(document.referrer)
              };
              iframe.contentWindow.postMessage(JSON.stringify({ type: "urls", value: urls }), "*");
            }
          }, 1000);
        }}
        className={`${styles.iframe} ${loaded ? styles.iframeVisible : ""}`}
        scrolling="no"
        frameBorder="0"
      />
    </div>
  );
}

