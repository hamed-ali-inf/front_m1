import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";          // استدعاء المكون الرئيسي
import "./index.css";             // استدعاء CSS عام للمشروع

// تحديد العنصر في HTML حيث سيتم تحميل تطبيق React
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// تحميل التطبيق داخل العنصر
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);