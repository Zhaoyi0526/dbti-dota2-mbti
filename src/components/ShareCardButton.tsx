"use client";

import html2canvas from "html2canvas";
import { useState } from "react";

export function ShareCardButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    const el = document.getElementById("dbti-share-card");
    if (!el) return;

    setLoading(true);
    try {
      const width = el.offsetWidth;
      const height = el.offsetHeight;

      const canvas = await html2canvas(el, {
        backgroundColor: "#121214",
        scale: 2,
        useCORS: true,
        logging: false,
        width,
        height,
        windowWidth: width,
        windowHeight: height,
      });

      const link = document.createElement("a");
      link.download = `DBTI-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={loading}
      className="rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:opacity-90 disabled:opacity-50"
    >
      {loading ? "生成中…" : "下载心理侧写卡"}
    </button>
  );
}
