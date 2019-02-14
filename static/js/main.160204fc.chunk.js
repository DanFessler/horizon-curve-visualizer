(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(27)},22:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(6),l=a.n(i),r=(a(22),a(7)),c=a(8),s=a(10),u=a(1),h=a(9),d=a(13),m=a(2),g=(a(24),a(25),1024),v=768,p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={ctx:null},a.renderCanvas=function(){var e=a.state.ctx;m.a.fov,Math.PI;e.clearRect(0,0,g,v),e.strokeStyle="rgba(0, 0, 0, 1)",e.beginPath(),e.arc(g/2,v/2+a.getPixelRadius(),a.getPixelRadius(),0,2*Math.PI),e.stroke(),e.strokeStyle="rgba(0, 0, 0, 0.125)",e.moveTo(0,v/2-.5),e.lineTo(g,v/2-.5),e.stroke()},a.handleAltitudeChange=function(e){m.a.alt=Math.max(e.target.value,0)},a.handleFOVChange=function(e){m.a.fov=Math.max(Math.min(e.target.value,175),1)},a.getHorizonDistance=function(){var e=Math.max(a.getAltitude(),.001),t=a.getEarthRadius();return Math.sqrt(Math.pow(e,2)+2*t*e)},a.getHorizonLength=function(){var e=Math.min(m.a.fov,179.9)*(Math.PI/180);return a.getHorizonDistance()*Math.tan(e/2)*2},a.getEarthRadius=function(){return 3959},a.getAltitude=function(){return m.a.alt},a.getPixelRadius=function(){var e=a.getEarthRadius(),t=a.getHorizonLength()/2,n=g/2*e/t;return console.log(n),n},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({ctx:this.refs.canvas.getContext("2d")}),m.a.fov=m.a.fov?m.a.fov:60,m.a.alt=m.a.alt?m.a.alt:0}},{key:"componentDidUpdate",value:function(){this.renderCanvas()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Horizon Curvature Visualizer"),"Source code:"," ",o.a.createElement("a",{href:"https://github.com/DanFessler/horizon-curve-visualizer"},"https://github.com/DanFessler/horizon-curve-visualizer"),o.a.createElement("p",null,"This is a visualizer to give you a rough idea of how curved the horizon should appear at a given altitude with a known camera FOV.",o.a.createElement("br",null),"This is a work in progress and will continue to be improved. It makes some estimates and does not take into account fish eye lenses for the sake of simplicity."),o.a.createElement("br",null),o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{style:{paddingRight:32}},o.a.createElement("label",null,"FOV:"),o.a.createElement("br",null),o.a.createElement("input",{name:"FOV",type:"number",value:m.a.fov,onChange:this.handleFOVChange}),o.a.createElement("i",null," degrees")),o.a.createElement("div",null,o.a.createElement("label",null,"Altitude:"),o.a.createElement("br",null),o.a.createElement("input",{style:{height:21,boxSizing:"border-box"},name:"altitude",type:"number",value:m.a.alt,onChange:this.handleAltitudeChange}),o.a.createElement("select",{style:{height:21,boxSizing:"border-box"}},o.a.createElement("option",null,"miles"),o.a.createElement("option",null,"feet"),o.a.createElement("option",null,"meters"),o.a.createElement("option",null,"kilometers")))),o.a.createElement("br",null),o.a.createElement("div",{style:{border:"1px solid gray",display:"inline-block"}},o.a.createElement("div",{style:{position:"absolute",padding:8}},"Horizon Distance: \xa0",this.getHorizonDistance(m.a.alt).toFixed(2)," miles",o.a.createElement("br",null),"Horizon length: \xa0",this.getHorizonLength(m.a.alt).toFixed(2)," miles",o.a.createElement("br",null)),o.a.createElement("canvas",{ref:"canvas",width:g,height:v})))}}]),t}(n.Component),f=Object(d.a)(p);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.160204fc.chunk.js.map