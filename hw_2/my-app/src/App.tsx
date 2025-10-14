import { useEffect } from 'react';
// @ts-ignore
import TaipeiDashboard from "./tabs/TaipeiDashboard";
// @ts-ignore
import AItest from "./AItest";
// @ts-ignore
import FormDashboard from "./FormDashboard";

function App() {
  useEffect(() => {
    // 確保 Stellar 模板的動畫效果正常運作
    const timer = setTimeout(() => {
      document.body.classList.remove('is-preload');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="wrapper">
      {/* Header */}
      <header id="header" className="alt">
        <span className="logo">
          <img src="/images/logo.svg" alt="" />
        </span>
        <h1>Pecu's Dashboard</h1>
        <p>
          台北城市儀表板 + Gemini AI 整合<br />
          資料視覺化與人工智慧應用實作
        </p>
      </header>

      {/* Nav */}
      <nav id="nav">
        <ul>
          <li><a href="#intro" className="active">Introduction</a></li>
          <li><a href="#taipei">台北儀表板</a></li>
          <li><a href="#gemini">Gemini AI</a></li>
          <li><a href="#form">API 測試</a></li>
        </ul>
      </nav>

      {/* Main */}
      <div id="main">
        {/* Introduction */}
        <section id="intro" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major">
                <h2>Pecu's HomePage</h2>
              </header>
              <p>
                這是我的資料視覺化與 AI 整合專案。<br />
                透過 Proxy 接取台北市開放資料，並整合 Google Gemini AI。
              </p>
              <ul className="actions">
                <li><a href="#taipei" className="button">開始探索</a></li>
              </ul>
            </div>
            <span className="image">
              <img src="/images/pic01.jpg" alt="" />
            </span>
          </div>
        </section>

        {/* 任務 1: 台北市儀表板 */}
        <section id="taipei" className="main special">
          <header className="major">
            <h2>任務 1: 台北市城市儀表板</h2>
            <p>
              使用 Node.js Proxy 繞過 CORS 限制<br />
              取得台北市政府開放資料平台的即時數據
            </p>
          </header>
          
          <div style={{ background: '#fff', borderRadius: '8px', padding: '20px' }}>
            <TaipeiDashboard />
          </div>

          <footer className="major" style={{ marginTop: '2rem' }}>
            <ul className="actions special">
              <li><a href="#gemini" className="button">下一個任務</a></li>
            </ul>
          </footer>
        </section>

        {/* 任務 2: Gemini AI */}
        <section id="gemini" className="main special">
          <header className="major">
            <h2>任務 2: Google Gemini AI 整合</h2>
            <p>
              直接在瀏覽器中使用 Gemini API<br />
              不需要後端 Proxy，展示客戶端 AI 應用
            </p>
          </header>

          <div style={{ background: '#fff', borderRadius: '8px', padding: '20px' }}>
            <AItest />
          </div>

          <footer className="major" style={{ marginTop: '2rem' }}>
            <ul className="actions special">
              <li><a href="#form" className="button">API 測試工具</a></li>
            </ul>
          </footer>
        </section>

        {/* 額外: API 測試工具 */}
        <section id="form" className="main special">
          <header className="major">
            <h2>API 測試工具</h2>
            <p>
              自訂 HTTP 請求測試器<br />
              支援 GET / POST 方法與自訂 Headers
            </p>
          </header>

          <div style={{ background: '#fff', borderRadius: '8px', padding: '20px' }}>
            <FormDashboard />
          </div>
        </section>

        {/* Get Started */}
        <section id="cta" className="main special">
          <header className="major">
            <h2>專案技術棧</h2>
            <p>使用現代化工具打造的全端應用</p>
          </header>
          
          <ul className="statistics">
            <li className="style1">
              <span className="icon solid fa-code-branch"></span>
              <strong>React</strong> 前端框架
            </li>
            <li className="style2">
              <span className="icon fa-folder-open"></span>
              <strong>TypeScript</strong> 型別安全
            </li>
            <li className="style3">
              <span className="icon solid fa-signal"></span>
              <strong>Vite</strong> 建構工具
            </li>
            <li className="style4">
              <span className="icon solid fa-laptop"></span>
              <strong>Express</strong> 後端 Proxy
            </li>
            <li className="style5">
              <span className="icon fa-gem"></span>
              <strong>Gemini</strong> AI 整合
            </li>
          </ul>

          <footer className="major">
            <ul className="actions special">
              <li><a href="#intro" className="button primary">回到頂部</a></li>
            </ul>
          </footer>
        </section>
      </div>

      {/* Footer */}
      <footer id="footer">
        <section>
          <h2>關於這個專案</h2>
          <p>
            這是一個整合台北市開放資料與 Google Gemini AI 的實作專案。
            透過 Node.js Proxy 解決 CORS 問題，並展示如何在前端直接使用 AI API。
          </p>
        </section>
        <section>
          <h2>聯絡資訊</h2>
          <dl className="alt">
            <dt>GitHub</dt>
            <dd><a href="https://github.com/你的帳號">github.com/你的帳號</a></dd>
            <dt>Email</dt>
            <dd><a href="#">your.email@example.com</a></dd>
          </dl>
          <ul className="icons">
            <li><a href="#" className="icon brands fa-github alt"><span className="label">GitHub</span></a></li>
          </ul>
        </section>
        <p className="copyright">
          &copy; 2025 Pecu. Design: <a href="https://html5up.net">HTML5 UP</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;