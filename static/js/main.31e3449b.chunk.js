(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),l=n(5),r=n(4),s=n(1),d=(n(12),n(0)),m=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={date:new Date},e.timerIdClock=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerIdClock=window.setInterval((function(){e.setState({date:new Date}),console.log(e.state.date.toLocaleTimeString())}),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerIdClock)}},{key:"render",value:function(){var e=this.props.clockName,t=this.state.date;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:t.toLocaleTimeString()})]})}}]),n}(s.Component);function h(){var e=Math.random().toString().slice(2,6);return"Clock-".concat(e)}var u=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:h()},e.timerIdRename=0,e.handleHideClock=function(){e.state.hasClock&&e.setState({hasClock:!1})},e.handleShowClock=function(){e.state.hasClock||e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerIdRename=window.setInterval((function(){e.setState({clockName:h()})}),3300),document.addEventListener("contextmenu",this.handleHideClock),document.addEventListener("click",this.handleShowClock)}},{key:"componentDidUpdate",value:function(){var e=arguments.length<=1?void 0:arguments[1],t=e.clockName,n=this.state.clockName;t!==n&&console.log("Renamed from ".concat(t," to ").concat(n))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerIdRename),document.removeEventListener("contextmenu",this.handleHideClock),document.removeEventListener("click",this.handleShowClock)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),t&&Object(d.jsx)(m,{clockName:n})]})}}]),n}(s.Component);a.a.render(Object(d.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.31e3449b.chunk.js.map