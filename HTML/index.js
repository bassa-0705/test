// ハンバーガー操作
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // フェードアニメーション
  const sections = document.querySelectorAll(".section, .hero");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    section.classList.add("pre-fade");
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelectorAll(".nav-links a");
  const closeBtn = document.querySelector(".close-btn");

  // 各リンクをクリック → チェック外して移動
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navToggle.checked = false;
    });
  });

  // ×ボタンをクリック → チェック外してホームへ
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault(); // aタグのデフォルト挙動を一旦止める
    navToggle.checked = false;
    window.location.hash = "#"; // ホームに戻る
  });
});
