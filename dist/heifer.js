var v = () => {
  const e = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[a-zA-Z\\d]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"
  ].join("|");
  return new RegExp(e, "g");
}, $ = (e) => typeof e == "string" ? e.replace(v(), "") : e, d = (e) => Number.isNaN(e) ? !1 : e >= 4352 && (e <= 4447 || // Hangul Jamo
e === 9001 || // LEFT-POINTING ANGLE BRACKET
e === 9002 || // RIGHT-POINTING ANGLE BRACKET
// CJK Radicals Supplement .. Enclosed CJK Letters and Months
11904 <= e && e <= 12871 && e !== 12351 || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
12880 <= e && e <= 19903 || // CJK Unified Ideographs .. Yi Radicals
19968 <= e && e <= 42182 || // Hangul Jamo Extended-A
43360 <= e && e <= 43388 || // Hangul Syllables
44032 <= e && e <= 55203 || // CJK Compatibility Ideographs
63744 <= e && e <= 64255 || // Vertical Forms
65040 <= e && e <= 65049 || // CJK Compatibility Forms .. Small Form Variants
65072 <= e && e <= 65131 || // Halfwidth and Fullwidth Forms
65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || // Kana Supplement
110592 <= e && e <= 110593 || // Enclosed Ideographic Supplement
127488 <= e && e <= 127569 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
131072 <= e && e <= 262141), c = (e) => {
  if (typeof e != "string" || e.length === 0)
    return 0;
  e = $(e);
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    const t = e.codePointAt(r);
    t <= 31 || t >= 127 && t <= 159 || t >= 768 && t <= 879 || (t > 65535 && r++, n += d(t) ? 2 : 1);
  }
  return n;
}, p = function(e, n) {
  var r = {
    first: ["/", "\\"],
    middle: ["|", "|"],
    last: ["\\", "/"],
    only: ["<", ">"]
  };
  return s(e, n, r);
}, _ = function(e, n) {
  var r = {
    first: ["(", ")"],
    middle: ["(", ")"],
    last: ["(", ")"],
    only: ["(", ")"]
  };
  return s(e, n, r);
};
function s(e, n, r) {
  var t = F(e, n), a = x(t), u;
  if (t.length === 1)
    u = [
      " " + g(a),
      r.only[0] + " " + t[0] + " " + r.only[1],
      " " + i(a)
    ];
  else {
    u = [" " + g(a)];
    for (var f = 0, l = t.length; f < l; f += 1) {
      var o;
      f === 0 ? o = r.first : f === l - 1 ? o = r.last : o = r.middle, u.push(o[0] + " " + A(t[f], a) + " " + o[1]);
    }
    u.push(" " + i(a));
  }
  return u.join(`
`);
}
function F(e, n) {
  e = e.replace(/\r\n?|[\n\u2028\u2029]/g, `
`).replace(/^\uFEFF/, "").replace(/\t/g, "        ");
  var r = [];
  if (!n)
    r = e.split(`
`);
  else
    for (var t = 0; t < e.length; ) {
      var a = e.indexOf(`
`, t), u = Math.min(t + n, a === -1 ? e.length : a);
      r.push(e.substring(t, u)), t = u, e.charAt(t) === `
` && (t += 1);
    }
  return r;
}
function x(e) {
  for (var n = 0, r = 0, t = e.length; r < t; r += 1)
    c(e[r]) > n && (n = c(e[r]));
  return n;
}
function A(e, n) {
  return e + new Array(n - c(e) + 1).join(" ");
}
function g(e) {
  return new Array(e + 3).join("_");
}
function i(e) {
  return new Array(e + 3).join("-");
}
var m = {
  say: p,
  think: _
}, C = function(e, n) {
  var r = h(n.eyes), t = r.charAt(0), a = r.charAt(1), u = h(n.tongue);
  return e.indexOf("$the_cow") !== -1 && (e = E(e)), e.replace(/\$thoughts/g, n.thoughts).replace(/\$eyes/g, r).replace(/\$tongue/g, u).replace(/\$\{eyes\}/g, r).replace(/\$eye/, t).replace(/\$eye/, a).replace(/\$\{tongue\}/g, u);
};
function h(e) {
  return e && e.replace ? e.replace(/\$/g, "$$$$") : e;
}
function E(e) {
  e = e.replace(/\r\n?|[\n\u2028\u2029]/g, `
`).replace(/^\uFEFF/, "");
  var n = /\$the_cow\s*=\s*<<"*EOC"*;*\n([\s\S]+)\nEOC\n/.exec(e);
  return n ? n[1].replace(/\\{2}/g, "\\").replace(/\\@/g, "@").replace(/\\\$/g, "$") : (console.error(`Cannot parse cow file
`, e), e);
}
var y = {
  b: {
    eyes: "==",
    tongue: "  "
  },
  d: {
    eyes: "xx",
    tongue: "U "
  },
  g: {
    eyes: "$$",
    tongue: "  "
  },
  p: {
    eyes: "@@",
    tongue: "  "
  },
  s: {
    eyes: "**",
    tongue: "U "
  },
  t: {
    eyes: "--",
    tongue: "  "
  },
  w: {
    eyes: "OO",
    tongue: "  "
  },
  y: {
    eyes: "..",
    tongue: "  "
  }
}, j = function(e) {
  for (var n in y)
    if (e[n] === !0)
      return y[n];
  return {
    eyes: e.e || "oo",
    tongue: e.T || "  "
  };
}, R = `$the_cow = <<"EOC";
        $thoughts   ^__^
         $thoughts  ($eyes)\\\\_______
            (__)\\\\       )\\\\/\\\\
             $tongue ||----w |
                ||     ||
EOC
`;
function T(e) {
  const n = {
    e: e.eyes || "oo",
    T: e.tongue || "  ",
    n: e.wrap,
    W: e.wrapLength || 40,
    text: e.text || "",
    _: e.text || [],
    f: e.cow
  };
  return e.mode && (n[e.mode] = !0), n;
}
function W(e, n) {
  const r = e.f || R, t = j(e);
  return t.thoughts = "\\", m["say"](e.text || e._.join(" "), e.n ? null : e.W) + `
` + C(r, t);
}
function Z(e) {
  return W(T(e));
}
function z(e) {
  return Z({
    text: e
  });
}
const L = "moo";
console.log(z(L));
