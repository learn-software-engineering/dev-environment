(() => {
  // ns-params:@params
  var params_default = { prefix: "hb-", sticky: true };

  // <stdin>
  (() => {
    const nav = document.querySelector(".hb-header-nav");
    if (!nav) {
      return;
    }
    const topOffset = () => {
      const v = nav.clientHeight + 24;
      document.body.style.setProperty(`--${params_default.prefix}top-offset`, v + "px");
    };
    if (params_default.sticky) {
      topOffset();
      window.addEventListener("resize", () => {
        topOffset();
      });
    }
  })();
})();
