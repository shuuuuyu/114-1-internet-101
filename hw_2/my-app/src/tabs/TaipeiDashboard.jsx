// import React, { useEffect, useState, useCallback } from "react";

// /**
//  * TaipeiDashboard.jsx
//  *
//  * A lightweight React component that fetches data from
//  * https://citydashboard.taipei/api/v1/dashboard/ and displays it.
//  *
//  * Usage:
//  *   import TaipeiDashboard from "./TaipeiDashboard";
//  *   <TaipeiDashboard />
//  *
//  * Notes:
//  * - If the API blocks browser requests via CORS, run this through a small proxy
//  *   (e.g., a Next.js API route or a simple Express/Cloudflare Worker) and set
//  *   the `apiUrl` prop to that proxy URL.
//  */

// export default function TaipeiDashboard({
//   apiUrl = "/api/v1/dashboard?city=taipei",
// }) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [fetchedAt, setFetchedAt] = useState(null);

//   const fetchData = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(apiUrl, { headers: { "Accept": "application/json" } });
//       if (!res.ok) {
//         throw new Error(`HTTP ${res.status} ${res.statusText}`);
//       }
//       const json = await res.json();
//       setData(json);
//       setFetchedAt(new Date());
//     } catch (err) {
//       setError(err?.message || String(err));
//     } finally {
//       setLoading(false);
//     }
//   }, [apiUrl]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return (
//     <div className="mx-auto max-w-4xl p-6">
//       <header className="mb-4 flex items-center justify-between">
//         <h1 className="text-2xl font-semibold">Taipei City Dashboard (React)</h1>
//         <div className="flex items-center gap-2">
//           {fetchedAt && (
//             <span className="text-sm text-gray-500">
//               Updated: {fetchedAt.toLocaleString()}
//             </span>
//           )}
//           <button
//             onClick={fetchData}
//             className="rounded-2xl border px-4 py-2 text-sm hover:bg-gray-50 active:scale-[0.98]"
//             disabled={loading}
//           >
//             {loading ? "Loading…" : "Refresh"}
//           </button>
//         </div>
//       </header>

//       {error && (
//         <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
//           <p className="font-medium">Request failed</p>
//           <p className="text-sm">{error}</p>
//           <p className="mt-2 text-xs text-red-600">
//             If this is a CORS error in the browser, call the API through a
//             server-side proxy and point `apiUrl` to that proxy.
//           </p>
//         </div>
//       )}

//       {!error && (
//         <div className="rounded-2xl border bg-white p-4 shadow-sm">
//           {loading && (
//             <p className="animate-pulse text-gray-500">Fetching data…</p>
//           )}

//           {!loading && data && (
//             <div className="space-y-3">
//               {/* Quick overview of top-level keys */}
//               <section>
//                 <h2 className="mb-2 text-lg font-medium">Overview</h2>
//                 <ul className="flex flex-wrap gap-2 text-sm text-gray-700">
//                   {Object.keys(data).slice(0, 12).map((k) => (
//                     <li
//                       key={k}
//                       className="rounded-full border px-3 py-1"
//                       title={k}
//                     >
//                       {k}
//                     </li>
//                   ))}
//                 </ul>
//               </section>

//               {/* Raw JSON pretty print */}
//               <section>
//                 <h2 className="mb-2 text-lg font-medium">Raw JSON</h2>
//                 <pre className="max-h-[60vh] overflow-auto rounded-lg bg-gray-900 p-4 text-xs text-gray-100">
// {JSON.stringify(data, null, 2)}
//                 </pre>
//               </section>
//             </div>
//           )}

//           {!loading && !data && !error && (
//             <p className="text-gray-500">No data.</p>
//           )}
//         </div>
//       )}

//       <footer className="mt-6 text-xs text-gray-400">
//         Built with React hooks. Set a custom `apiUrl` prop to point at a proxy
//         if needed.
//       </footer>
//     </div>
//   );
// }

import React, { useEffect, useState, useCallback } from "react";

export default function TaipeiDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedAt, setFetchedAt] = useState(null);
  
  // 可以讓使用者輸入的 URL
  const [customUrl, setCustomUrl] = useState("/api/v1/dashboard?city=taipei");

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(customUrl, { headers: { "Accept": "application/json" } });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText}`);
      }
      const json = await res.json();
      setData(json);
      setFetchedAt(new Date());
    } catch (err) {
      setError(err?.message || String(err));
    } finally {
      setLoading(false);
    }
  }, [customUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // 預設的幾個常用 API
  const presetUrls = [
    { label: "儀表板總覽", url: "/api/v1/dashboard?city=taipei" },
    { label: "交通資訊", url: "/api/v1/dashboard?index=traffic&city=taipei" },
    { label: "環境資訊", url: "/api/v1/dashboard?index=environment&city=taipei" },
    { label: "元件 57 圖表", url: "/api/v1/component/57/chart?city=taipei" },
    { label: "元件 1 圖表", url: "/api/v1/component/1/chart?city=taipei" },
  ];

  return (
    <div className="mx-auto max-w-4xl p-6">
      <header className="mb-4">
        <h1 className="text-2xl font-semibold mb-4">Taipei City Dashboard (React)</h1>
        
        {/* URL 輸入區 */}
        <div className="mb-4 p-4 bg-gray-50 rounded-lg border">
          <label className="block text-sm font-medium mb-2">
            API 網址 (可自訂):
          </label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-lg text-sm"
              placeholder="/api/v1/dashboard?city=taipei"
            />
            <button
              onClick={fetchData}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "載入中..." : "呼叫 API"}
            </button>
          </div>

          {/* 快速選擇按鈕 */}
          <div className="text-xs text-gray-600 mb-2">快速選擇:</div>
          <div className="flex flex-wrap gap-2">
            {presetUrls.map((preset) => (
              <button
                key={preset.url}
                onClick={() => setCustomUrl(preset.url)}
                className="px-3 py-1 bg-white border rounded-full text-xs hover:bg-gray-100"
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* 說明 */}
          <div className="mt-3 text-xs text-gray-500">
            💡 提示: 這些網址會透過本機 Proxy (localhost:4000) 轉發到台北市 API
          </div>
        </div>

        {/* 狀態列 */}
        <div className="flex items-center justify-between">
          {fetchedAt && (
            <span className="text-sm text-gray-500">
              最後更新: {fetchedAt.toLocaleString()}
            </span>
          )}
          <button
            onClick={fetchData}
            className="rounded-2xl border px-4 py-2 text-sm hover:bg-gray-50 active:scale-[0.98]"
            disabled={loading}
          >
            {loading ? "載入中..." : "重新整理"}
          </button>
        </div>
      </header>

      {error && (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          <p className="font-medium">請求失敗</p>
          <p className="text-sm">{error}</p>
          <p className="mt-2 text-xs text-red-600">
            如果是 CORS 錯誤,請確認後端 Proxy (server.cjs) 有正常運行
          </p>
        </div>
      )}

      {!error && (
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          {loading && (
            <p className="animate-pulse text-gray-500">正在載入資料...</p>
          )}

          {!loading && data && (
            <div className="space-y-3">
              {/* 資料概覽 */}
              <section>
                <h2 className="mb-2 text-lg font-medium">資料概覽</h2>
                <ul className="flex flex-wrap gap-2 text-sm text-gray-700">
                  {Object.keys(data).slice(0, 12).map((k) => (
                    <li
                      key={k}
                      className="rounded-full border px-3 py-1"
                      title={k}
                    >
                      {k}
                    </li>
                  ))}
                  {Object.keys(data).length > 12 && (
                    <li className="rounded-full border px-3 py-1 text-gray-400">
                      +{Object.keys(data).length - 12} 更多...
                    </li>
                  )}
                </ul>
              </section>

              {/* 原始 JSON */}
              <section>
                <h2 className="mb-2 text-lg font-medium">原始 JSON 資料</h2>
                <pre className="max-h-[60vh] overflow-auto rounded-lg bg-gray-900 p-4 text-xs text-gray-100">
{JSON.stringify(data, null, 2)}
                </pre>
              </section>
            </div>
          )}

          {!loading && !data && !error && (
            <p className="text-gray-500">尚未載入資料</p>
          )}
        </div>
      )}

      <footer className="mt-6 text-xs text-gray-400">
        使用 React Hooks 建構。可自訂 API URL 進行測試。
      </footer>
    </div>
  );
}