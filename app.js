
const app = document.getElementById("app");
const content = window.CHURCH_CONTENT;

const icons = {
  bulletin: `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 14c9-3 16-2 24 4 8-6 15-7 24-4v37c-9-3-16-2-24 4-8-6-15-7-24-4V14Z"/><path d="M32 18v37"/></svg>`,
  sermon: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="12" width="44" height="34" rx="3"/><path d="M26 20 41 29 26 38V20Z"/><path d="M25 53h14"/></svg>`,
  welcome: `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="23" r="9"/><path d="M16 50c2-11 9-17 16-17s14 6 16 17"/></svg>`,
  news: `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 28h10l22-12v32L22 36H12V28Z"/><path d="m22 36 4 14"/><path d="M49 25c4 3 4 11 0 14"/></svg>`
};

function homePage(){
  return `
    <section class="hero">
      <div class="hero-church" aria-hidden="true">
        <div class="roof"></div><div class="building"></div>
        <div class="cross-v"></div><div class="cross-h"></div>
      </div>
      <div class="hero-copy">
        <h1>WELCOME</h1>
        <p>WE'RE SO GLAD YOU'RE HERE!</p>
        <div class="heart-line">— ♡ —</div>
      </div>
    </section>

    <section class="home-grid" aria-label="온라인 주보 메뉴">
      ${card("bulletin","주보","이번 주 예배와 교회 소식을 확인해 보세요.","")}
      ${card("sermon","말씀 다시보기","이번 주 말씀의 핵심을 천천히 다시 읽어보세요.","accent")}
      ${card("welcome","처음 왔어요","함께해 주셔서 감사합니다. 환영합니다!","dark")}
      ${card("news","교회 소식","횃불교회의 새로운 소식과 안내를 확인해 보세요.","")}
    </section>
  `;
}

function card(route,title,desc,cls){
  return `
    <a class="nav-card ${cls}" href="#${route}">
      <div class="card-icon">${icons[route]}</div>
      <h2>${title}</h2>
      <p>${desc}</p>
      <span class="arrow-circle" aria-hidden="true">→</span>
    </a>
  `;
}

function pageShell(kicker,title,desc,body){
  return `
    <section class="page">
      <div class="page-head">
        <a class="back-btn" href="#home">← 홈으로</a>
        <div class="page-kicker">${kicker}</div>
        <h1>${title}</h1>
        <p>${desc}</p>
      </div>
      <div class="page-body">${body}</div>
    </section>
  `;
}

function bulletinPage(){
  const b = content.bulletin;
  const body = `
    <article class="content-card">
      <div class="date">${b.date}</div>
      <h2>${b.scriptureTitle}</h2>
      <p class="scripture">${b.scripture}</p>
    </article>

    <article class="content-card">
      <h2>예배 순서</h2>
      <ol class="order-list">${b.order.map(item=>`<li>${item}</li>`).join("")}</ol>
    </article>

    <article class="content-card">
      <h2>오늘의 말씀</h2>
      <h3>${b.sermonTitle}</h3>
      <p><strong>본문</strong> ${b.sermonText}</p>
      <p><strong>설교</strong> ${b.preacher}</p>
    </article>
  `;
  return pageShell("WEEKLY BULLETIN","주보","이번 주 횃불교회 예배 내용을 한눈에 확인하세요.",body);
}

function sermonPage(){
  const s = content.sermon;
  const body = `
    <article class="content-card">
      <div class="date">${s.date}</div>
      <h2>${s.title}</h2>
      <p class="sermon-note">${s.text}</p>
    </article>
  `;
  return pageShell("SERMON NOTE","말씀 다시보기","예배 후에도 말씀을 천천히 되새길 수 있도록 준비한 공간입니다.",body);
}

function welcomePage(){
  const w = content.welcome;
  const body = `
    <article class="content-card welcome-box">
      <div class="welcome-symbol">☺</div>
      <h2>${w.title}</h2>
      <p class="sermon-note">${w.message}</p>
    </article>
  `;
  return pageShell("NEW HERE?","처음 왔어요","횃불교회를 처음 방문하신 분들을 위한 안내입니다.",body);
}

function newsPage(){
  const body = `
    <article class="content-card">
      <h2>이번 주 교회 소식</h2>
      ${content.news.map(item=>`
        <div class="news-item">
          <time>${item.date}</time>
          <strong>${item.title}</strong>
          <p>${item.text}</p>
        </div>
      `).join("")}
    </article>
  `;
  return pageShell("CHURCH NEWS","교회 소식","횃불교회의 새로운 소식과 일정을 확인하세요.",body);
}

function render(){
  const route = (location.hash || "#home").slice(1);
  const pages = {
    home:homePage,
    bulletin:bulletinPage,
    sermon:sermonPage,
    welcome:welcomePage,
    news:newsPage
  };
  app.innerHTML = (pages[route] || homePage)();
  window.scrollTo({top:0,behavior:"instant"});
  app.focus({preventScroll:true});
}

document.getElementById("homeButton").addEventListener("click",()=>{ location.hash="home"; });
window.addEventListener("hashchange",render);
render();
