"use client";

// Kaydedilen hazır aramalar için dakikada bir ilan listeleyen uygulama.
// 1 - Okunan ilanlar siyah, okunmayan yeni ilanlar yeşil renkte olmalı.
// 2 - Hazır aramaları kaydettiğimiz bir girdi alanı olmalı. CRUD

import { useEffect, useState } from "react";

export default function Home() {
  // States
  const [] = useState();

  // Effects
  useEffect(() => {}, []);

  return (
    <main className="upwork-alert-extension">
      <h1>Hazır aramalar</h1>

      <div className="searches flex flex-col gap-4">
        <div className="search">
          <p className="search-text">Chat AI</p>
          <div className="search-list flex flex-col gap-4">
            <div className="search-item">item</div>
          </div>
        </div>
      </div>
    </main>
  );
}
