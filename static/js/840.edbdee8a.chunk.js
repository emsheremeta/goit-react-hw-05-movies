"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[840],{840:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var i,o,r,s,l,a,c,d,h=t(885),p=t(791),x=t(731),v=t(689),b=t(168),f=t(444),u=f.ZP.img(i||(i=(0,b.Z)(["\n position: relative;\n bottom: 40%;\n height: 50%;\n box-shadow: 0 0 20px -10px rgba(0,0,0,0.5);\n "]))),j=f.ZP.div(o||(o=(0,b.Z)([" \nposition: absolute;\nwidth: 100%;\nheight: 100%;\n\n "]))),g=f.ZP.p(r||(r=(0,b.Z)(["\n position: relative;\n padding: 25px;\n left: 35%;\n top: 5%;\n margin-bottom:20px;\n\n font-weight: bold;\n font-size: large;\n border-bottom: 1px solid black;\n width: 20%;\n font-family: inherit;\n\n\n "]))),m=f.ZP.p(s||(s=(0,b.Z)(["\nposition: relative;\n      padding: 25px;\n      left: 35%;\n     \n "]))),w=f.ZP.article(l||(l=(0,b.Z)(["\n position: relative;\n left:350px;\n text-align: justify;\n width:50%;\n padding: 25px;\n\n\n "]))),Z=f.ZP.p(a||(a=(0,b.Z)(["\n position: relative;\n left: 5%;\n bottom: 45%;\n padding: 25px;\ndisplay: inline-block;\n\n "]))),_=(0,f.ZP)(x.rU)(c||(c=(0,b.Z)(["\n color: black;\n text-decoration : none;\n "]))),k=f.ZP.div(d||(d=(0,b.Z)(["\n position: relative;\n bottom:40%;\n left:15px;\n "]))),P=t(184);function y(n){var e,t,i=n.apiKey,o=(0,p.useState)(null),r=(0,h.Z)(o,2),s=r[0],l=r[1],a=(0,v.TH)(),c=(0,v.UO)().movieId;console.log(c);var d=(0,p.useRef)(null!==(e=null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");return(0,p.useEffect)((function(){console.log("fetch"),fetch("https://api.themoviedb.org/3/movie/".concat(c,"?api_key=").concat(i)).then((function(n){return n.json()})).then((function(n){return l(n)}))}),[c,i]),s&&(0,P.jsxs)(j,{children:[(0,P.jsxs)(_,{to:d.current.pathname+d.current.search,children:[(0,P.jsx)("span",{children:"\u2190"}),"Go back"]}),(0,P.jsxs)(g,{children:[(0,P.jsx)("b",{children:"Movie title :"}),(0,P.jsx)("br",{}),s.title]}),(0,P.jsxs)(m,{children:[(0,P.jsx)("b",{children:"User score "}),(0,P.jsx)("br",{}),s.vote_average]}),(0,P.jsxs)(w,{children:[(0,P.jsxs)("b",{children:["Overview :",""]}),(0,P.jsx)("br",{}),s.overview]}),(0,P.jsx)(u,{src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+s.poster_path,width:300}),(0,P.jsxs)(Z,{children:[(0,P.jsx)("b",{children:" Genres: "}),(0,P.jsx)("br",{}),s.genres.map((function(n){return n.name+" "}))]}),(0,P.jsxs)(k,{children:[(0,P.jsx)("b",{children:"Additional information"}),(0,P.jsx)("br",{}),(0,P.jsx)(x.OL,{to:"cast",children:"Show cast"})]}),(0,P.jsx)(k,{children:(0,P.jsx)(x.OL,{to:"review",children:"Show review"})}),(0,P.jsx)(v.j3,{})]})}}}]);
//# sourceMappingURL=840.edbdee8a.chunk.js.map