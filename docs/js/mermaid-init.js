(() => {
  // <stdin>
  (() => {
    const elements = Array.from(document.querySelectorAll("pre.mermaid"));
    if (!elements) {
      return;
    }
    elements.forEach((ele) => {
      ele.setAttribute("data-src", ele.innerHTML);
    });
    const resetElements = () => {
      return new Promise((resolve) => {
        elements.forEach((ele) => {
          ele.innerHTML = ele.getAttribute("data-src") ?? "";
          ele.removeAttribute("data-processed");
        });
        resolve();
      });
    };
    const init = (theme2) => {
      window.mermaid.initialize({ theme: theme2 });
      window.mermaid.init({ theme: theme2 }, elements);
    };
    const theme = localStorage.getItem("hb-theme");
    if (theme === "dark" || window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      init("dark");
    }
    document.addEventListener("hb:theme", (e) => {
      resetElements().then(init(e.detail.theme === "dark" ? "dark" : "default")).catch(console.error);
    });
  })();
})();
