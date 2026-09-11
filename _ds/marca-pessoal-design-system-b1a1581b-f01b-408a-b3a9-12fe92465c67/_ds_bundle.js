"use strict";
var MarcaPessoalDesignSystem = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p2, k2) {
        var o = {};
        for (var x2 in p2) if (x2 !== "children") o[x2] = p2[x2];
        if (k2 !== void 0) o.key = k2;
        return o;
      }
      function jsx(t2, p2, k2) {
        var c2 = p2 && p2.children;
        return c2 === void 0 ? R.createElement(t2, np(p2, k2)) : R.createElement(t2, np(p2, k2), c2);
      }
      function jsxs(t2, p2, k2) {
        return R.createElement.apply(R, [t2, np(p2, k2)].concat(p2.children));
      }
      module.exports = R;
      module.exports.jsx = jsx;
      module.exports.jsxs = jsxs;
      module.exports.jsxDEV = function(t2, p2, k2, s) {
        return (s ? jsxs : jsx)(t2, p2, k2);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // dist/index.js
  var index_exports = {};
  __export(index_exports, {
    Button: () => b,
    Card: () => _,
    CarouselSlide: () => B,
    ColorSwatch: () => D,
    Divider: () => y,
    Heading: () => f,
    Tag: () => N,
    TagLabel: () => k,
    Text: () => x,
    colors: () => c,
    fonts: () => h,
    radius: () => p,
    spacing: () => m,
    toneTokens: () => g
  });
  init_define_import_meta_env();
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var c = {
    primary: "#F2392C",
    primaryLight: "#F56B60",
    primaryDark: "#A82217",
    secondary: "#C98A2E",
    secondaryLight: "#E0AC5E",
    secondaryDark: "#93641F",
    backgroundLight: "#FDF9ED",
    backgroundDark: "#250408",
    textOnLight: "#250408",
    textOnDark: "#FDF9ED",
    border: "#E4D9C4",
    surfaceLight: "#F7F0E1",
    surfaceDark: "#35090C",
    success: "#16A34A",
    warning: "#EAB308",
    error: "#DC2626",
    info: "#2563EB"
  };
  var h = {
    display: 'Futura, "Futura PT", Jost, "Century Gothic", sans-serif',
    body: 'Sohne, "S\xF6hne", Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    mono: '"Sohne Mono", "S\xF6hne Mono", "IBM Plex Mono", "SFMono-Regular", monospace'
  };
  var m = {
    1: "8px",
    2: "16px",
    3: "24px",
    4: "32px",
    5: "48px",
    6: "64px",
    7: "96px",
    8: "128px"
  };
  var p = {
    sm: "4px",
    md: "8px"
  };
  var g = {
    dark: { background: c.backgroundDark, text: c.textOnDark, surface: c.surfaceDark },
    light: { background: c.backgroundLight, text: c.textOnLight, surface: c.surfaceLight }
  };
  function f({ size: s = "m", as: a, accent: e = false, className: n, children: o, ...r }) {
    const i = a ?? (s === "xl" ? "h1" : s === "l" ? "h2" : s === "m" ? "h3" : "h4"), l = ["ds-heading", `ds-heading--${s}`, e && "ds-heading--accent", n].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, { className: l, ...r, children: o });
  }
  function x({ size: s = "m", as: a = "p", className: e, children: n, ...o }) {
    const r = a, i = ["ds-text", `ds-text--${s}`, e].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, { className: i, ...o, children: n });
  }
  function k({ className: s, children: a, ...e }) {
    const n = ["ds-tag-label", s].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: n, ...e, children: a });
  }
  function b({
    variant: s = "primary",
    tone: a = "light",
    size: e = "m",
    className: n,
    ...o
  }) {
    const r = [
      "ds-button",
      `ds-button--${s}`,
      `ds-button--${e}`,
      s === "secondary" && `ds-button--tone-${a}`,
      n
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: r, ...o });
  }
  function N({ active: s = false, tone: a = "light", className: e, children: n, ...o }) {
    const r = [
      "ds-chip",
      s && "ds-chip--active",
      !s && a === "dark" && "ds-chip--tone-dark",
      e
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: r, ...o, children: n });
  }
  function _({ tone: s = "light", accent: a = false, className: e, children: n, ...o }) {
    const r = ["ds-card", `ds-card--tone-${s}`, a && "ds-card--accent", e].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: r, ...o, children: n });
  }
  function y({ variant: s = "bar", className: a, ...e }) {
    const n = ["ds-divider", `ds-divider--${s}`, a].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: n, ...e });
  }
  function D({ name: s, hex: a, className: e }) {
    const n = ["ds-swatch", e].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: n, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ds-swatch__color", style: { background: a } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ds-swatch__meta", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ds-swatch__name", children: s }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ds-swatch__hex", children: a })
      ] })
    ] });
  }
  function B({ kind: s, index: a, total: e = 8, tone: n = "light", children: o }) {
    return s === "hook" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ds-slide ds-slide--tone-dark ds-slide--hook", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ds-slide__accent-bar" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "ds-slide__hook-text", children: o })
    ] }) : s === "close" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "ds-slide ds-slide--close", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "ds-slide__body", children: o }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ds-slide__close-bar" })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `ds-slide ds-slide--tone-${n}`, children: [
      a !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "ds-slide__meta", children: [
        String(a).padStart(2, "0"),
        " / ",
        String(e).padStart(2, "0")
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "ds-slide__body", children: o })
    ] });
  }
  return __toCommonJS(index_exports);
})();
window.MarcaPessoalDesignSystem=MarcaPessoalDesignSystem.__dsMainNs?Object.assign({},MarcaPessoalDesignSystem,MarcaPessoalDesignSystem.__dsMainNs,{__dsMainNs:undefined}):MarcaPessoalDesignSystem;
