import{A as d,P as s,R as n,S as e,T as a,C as o,B as t}from"../app.7b4e1434.js";function f({a:h,p:m}){class c extends d{createStartPage(){return new p}}class p extends s{createGui(){return n(e,a("A short story"),a("by Peppe L-G"),e,e,o(e,t("Start Reading").page(g),e),e)}}class g extends s{createGui(){return n(a("Once upon a time, there was a programmer who thought creating small useful apps was too hard for beginners."),e,o(t("\u2190").page(p),e,a("1"),e,t("\u2192").page(u)))}}class u extends s{createGui(){return n(a("So he created his own little framework that made it easier. He called that framework for Bagatell."),e,o(t("\u2190").page(g),e,a("2"),e,t("\u2192").page(i)))}}class i extends s{createGui(){return n(a("And that's the framework you are using now!"),e,o(t("\u2190").page(u),e,a("3"),e,t("\u2192").page(l)))}}class l extends s{createGui(){return n(e,a("The end!"),e,e,o(e,t("Read again").page(p),e),e)}}return c}export{f as default};
