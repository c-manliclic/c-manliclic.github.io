(this.webpackJsonpcolinmanliclicportfolio=this.webpackJsonpcolinmanliclicportfolio||[]).push([[0],{140:function(e,t,a){},141:function(e,t,a){},403:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(18),c=a.n(i),o=(a(140),a(141),a(13)),s=a(51),l=a(30),j=a(426),x=a(118),d=a.n(x),h=a(120),b=a.n(h),m=a(121),O=a.n(m),p=a(428),u=a(430),y=a(431),v=a(448),g=a(433),f=a(38),P=a(1),w=Object(j.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1,backgroundColor:"transparent",boxShadow:"none"},titleText:{fontSize:"1.25rem",fontWeight:900,textTransform:"none",left:"10px"},titleContainer:{flex:1,textAlign:"left",paddingLeft:"16px"}}}));function N(e){var t=w(),a=n.a.useState("light"),r=Object(l.a)(a,2),i=r[0],c=r[1];n.a.useEffect((function(){c(window.localStorage.getItem("theme")),e.theme(window.localStorage.getItem("theme"))}));var o=function(){e.toggleSidebar(!1)};return Object(P.jsx)(p.a,{position:"fixed",className:t.appBar,children:Object(P.jsxs)(u.a,{disableGutters:!0,children:[Object(P.jsxs)("div",{className:t.titleContainer,children:[Object(P.jsx)(y.a,{"aria-label":"open drawer",onClick:!1===e.openSidebar?function(){e.toggleSidebar(!0)}:o,edge:"start",children:Object(P.jsx)(d.a,{})}),Object(P.jsx)(v.a,{title:"That's me!",children:Object(P.jsx)(g.a,{onClick:o,to:"/portfolio",component:f.b,className:t.titleText,children:"Colin"})})]}),Object(P.jsx)(v.a,{title:"light"===i?"Dark Mode":"Light Mode",children:Object(P.jsx)(y.a,{className:t.themeButton,"aria-label":"theme mode",onClick:"light"===i?function(){window.localStorage.setItem("theme","dark"),c("dark"),e.theme("dark")}:function(){window.localStorage.setItem("theme","light"),c("light"),e.theme("light")},children:"light"===i?Object(P.jsx)(b.a,{}):Object(P.jsx)(O.a,{})})})]})})}var C=a(124),S=a.n(C),k=a(122),I=a.n(k),F=a(123),z=a.n(F),T=a(447),B=a(434),A=a(435),E=a(436),M=a(437),W=a(438),D=a(77),R=a(450),G=[{href:"/skills",icon:Object(P.jsx)(I.a,{}),title:"Skills"},{href:"/experience",icon:Object(P.jsx)(z.a,{}),title:"Experience"},{href:"/projects",icon:Object(P.jsx)(S.a,{}),title:"Projects"}],L=Object(j.a)((function(e){return{drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerText:{fontSize:"1.25rem",fontWeight:500},backdrop:{zIndex:e.zIndex.drawer+1,left:"239px"},bottomPush:{position:"fixed",bottom:0,textAlign:"center",padding:15,opacity:.5}}}));function _(e){var t=L(),a=function(){e.toggleSidebar(!1)};return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(T.a,{className:t.drawer,variant:"persistent",anchor:"left",open:e.open,classes:{paper:t.drawerPaper},children:[Object(P.jsx)(u.a,{}),Object(P.jsx)(B.a,{}),Object(P.jsx)(A.a,{children:G.map((function(e){return Object(P.jsxs)(E.a,{className:t.listItem,component:f.b,button:!0,to:e.href,onClick:a,children:[Object(P.jsx)(M.a,{children:e.icon}),Object(P.jsx)(W.a,{classes:{primary:t.drawerText},primary:e.title})]},e.title)}))}),Object(P.jsx)("div",{className:t.bottomPush,children:Object(P.jsx)(D.a,{variant:"caption",color:"textPrimary",component:"p",children:"\xa9 2021 - Colin Manliclic"})})]}),Object(P.jsx)(R.a,{className:t.backdrop,open:e.open,onClick:a})]})}var H=a(125),J=a.n(H),Q=a(439),Y=a(131),U=Object(Y.a)({typography:{fontFamily:["Playfair Display","sans-serif"].join(","),h1:{"@media (max-width:600px)":{fontSize:"3.1rem"}}}}),V=Object(Y.a)(Object(s.a)(Object(s.a)({},U),{},{palette:{type:"dark"}})),q=Object(Y.a)(Object(s.a)(Object(s.a)({},U),{},{palette:{type:"light"}})),K=a(449),X=Object(j.a)((function(){return Object(K.a)({"@global":{"*":{boxSizing:"border-box",margin:0,padding:0},html:{"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",height:"100%",width:"100%"},body:{height:"100%",width:"100%"},a:{textDecoration:"none"},"#root":{textAlign:"left",height:"100%",width:"100%"}}})})),Z=function(){return X(),null},$=a(440),ee=Object(j.a)((function(e){return{}}));function te(){ee();var e=n.a.useState(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],i=n.a.useState(V),c=Object(l.a)(i,2),j=c[0],x=c[1],d=function(e){r(e)};return Object(P.jsxs)(Q.a,{theme:Object(s.a)({},j),children:[Object(P.jsx)($.a,{}),Object(P.jsx)(Z,{}),Object(P.jsx)(N,{openSidebar:a,toggleSidebar:d,theme:function(e){x("light"===e?q:V)}}),Object(P.jsx)(_,{open:a,toggleSidebar:d}),Object(P.jsx)(J.a,{id:"tsparticles",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%"},options:{fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!1,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},repulse:{distance:200,duration:.4}}},particles:{color:{value:j===q?"#000":"#FFF"},links:{color:j===q?"#000":"#FFF",distance:150,enable:!0,opacity:1,width:.3},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!0,speed:3,straight:!1},number:{density:{enable:!0,value_area:10},value:1},opacity:{value:.5},shape:{type:"line"},size:{random:!1,value:5}},detectRetina:!0}}),Object(P.jsx)(u.a,{}),Object(P.jsx)(o.b,{})]})}var ae=a(44),re=a(441),ne=a(442),ie=a(443),ce=a(444),oe=a(46),se=Object(j.a)((function(e){return{card:{backgroundColor:"transparent"},container:{paddingBottom:75},grid:{marginBottom:25}}}));function le(){var e=se();return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(ae.a,{children:Object(P.jsx)("title",{children:"Experience | Colin"})}),Object(P.jsx)(re.a,{className:e.container,children:Object(P.jsxs)(oe.a,{opacity:[0,1],translateY:"1em",delay:function(e,t){return 1e3*t},children:[Object(P.jsx)(D.a,{variant:"h3",paragraph:!0,style:{fontWeight:800},children:"Experience"}),Object(P.jsxs)(ne.a,{container:!0,direction:"column",justifyContent:"flex-start",alignItems:"stretch",spacing:1,children:[Object(P.jsx)(ne.a,{item:!0,xs:12,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Computer Programmer Analyst (4.07 GPA)"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"Fanshawe College (Ontario College Advanced Diploma)"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Software Developer (Co-op)"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"Apparatus Global Solutions"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Peer Mentor"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"Fanshawe College"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Dean's Honour Roll 2018"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"Fanshawe College"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Dean's Honour Roll 2019"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"Fanshawe College"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Dean's Honour Roll 2020"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"Fanshawe College"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Dean's Honour Roll 2021"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"Fanshawe College"})]})})})]})]})})]})}var je=a(445),xe=a(446),de=a(50),he=a.n(de),be=a(128),me=a.n(be),Oe=Object(j.a)((function(e){return{cardContent:{backgroundColor:"transparent"},container:{paddingBottom:75}}}));function pe(){var e=Oe();return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(ae.a,{children:Object(P.jsx)("title",{children:"Projects | Colin"})}),Object(P.jsx)(re.a,{className:e.container,children:Object(P.jsxs)(oe.a,{opacity:[0,1],translateY:"1em",delay:function(e,t){return 1e3*t},children:[Object(P.jsx)(D.a,{variant:"h3",paragraph:!0,style:{fontWeight:800},children:"Projects"}),Object(P.jsxs)(ne.a,{container:!0,direction:"row",justifyContent:"space-evenly",alignItems:"flex-start",spacing:4,children:[Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsxs)(ie.a,{variant:"outlined",className:e.cardContent,children:[Object(P.jsx)(je.a,{component:"img",height:"175",image:"/portfolio/assets/images/art.jpg"}),Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Digital Art (Processing)"}),Object(P.jsx)(D.a,{variant:"body2",color:"textPrimary",component:"p",children:"These are digital art pieces created by me by using the programming tool Processing (similar to Java). I like to explore all types of coding, even creative coding, where the goal is to create something expressive than functional. I upload all my pieces to my personal art Twitter account."})]}),Object(P.jsx)(xe.a,{children:Object(P.jsx)(v.a,{title:"Twitter",children:Object(P.jsx)(y.a,{size:"small",color:"inherit",edge:"start",href:"https://twitter.com/lawyu3",target:"_blank",children:Object(P.jsx)(me.a,{fontSize:"large"})})})})]})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsxs)(ie.a,{variant:"outlined",className:e.cardContent,children:[Object(P.jsx)(je.a,{component:"img",height:"175",image:"/portfolio/assets/images/expressionTreeEval.jpg"}),Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Expression Tree Evaluator (INFO5101 C# Advanced Topics Project)"}),Object(P.jsx)(D.a,{variant:"body2",color:"textPrimary",component:"p",children:"C# program reads a CSV file filled with infix notation expressions which are then converted into postfix and finally prefix notation using expression trees."})]}),Object(P.jsx)(xe.a,{children:Object(P.jsx)(v.a,{title:"Github Repo",children:Object(P.jsx)(y.a,{size:"small",color:"inherit",edge:"start",href:"https://github.com/AnthonyJM18/ExpressionTreeEvaluator",target:"_blank",children:Object(P.jsx)(he.a,{fontSize:"large"})})})})]})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsxs)(ie.a,{variant:"outlined",className:e.cardContent,children:[Object(P.jsx)(je.a,{component:"img",height:"175",image:"/portfolio/assets/images/rideTheBus.jpg"}),Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Ride The Bus Multiplayer Game (INFO5060 Component-based Programming with .NET Project)"}),Object(P.jsx)(D.a,{variant:"body2",color:"textPrimary",component:"p",children:"Ride The Bus card game application built on C# . It utilizes that Windows Communication Foundation framework to simulate a LAN computing environment for multiplayer."})]}),Object(P.jsx)(xe.a,{children:Object(P.jsx)(v.a,{title:"Github Repo",children:Object(P.jsx)(y.a,{size:"small",color:"inherit",edge:"start",href:"https://github.com/c-manliclic/INFO5060_Project2",target:"_blank",children:Object(P.jsx)(he.a,{fontSize:"large"})})})})]})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsxs)(ie.a,{variant:"outlined",className:e.cardContent,children:[Object(P.jsx)(je.a,{component:"img",height:"175",image:"/portfolio/assets/images/sprintCompass.jpg"}),Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"SprintCompass (INFO3112 Managing Software Projects Applied 1 Project)"}),Object(P.jsx)(D.a,{variant:"body2",color:"textPrimary",component:"p",children:"Project management application similar to Clickup. Functionality includes creating users, login functionality, and sprint creation and management. It is built on C# and uses Window Forms for its GUI."})]}),Object(P.jsx)(xe.a,{children:Object(P.jsx)(v.a,{title:"Github Repo",children:Object(P.jsx)(y.a,{size:"small",color:"inherit",edge:"start",href:"https://github.com/AnthonyJM18/SprintCompass",target:"_blank",children:Object(P.jsx)(he.a,{fontSize:"large"})})})})]})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsxs)(ie.a,{variant:"outlined",className:e.cardContent,children:[Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Portfolio Website"}),Object(P.jsx)(D.a,{variant:"body2",color:"textPrimary",component:"p",children:"Portfolio website built on React. It uses external tools such as tsParticles, react-anime, react-helmet, react-router, Material UI and Github Pages."})]}),Object(P.jsx)(xe.a,{children:Object(P.jsx)(v.a,{title:"Github Repo",children:Object(P.jsx)(y.a,{size:"small",color:"inherit",edge:"start",href:"https://github.com/c-manliclic",target:"_blank",children:Object(P.jsx)(he.a,{fontSize:"large"})})})})]})})]})]})})]})}var ue=Object(j.a)((function(e){return{card:{backgroundColor:"transparent"},container:{paddingBottom:75},grid:{marginBottom:25}}}));function ye(){var e=ue();return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(ae.a,{children:Object(P.jsx)("title",{children:"Skills | Colin"})}),Object(P.jsx)(re.a,{className:e.container,children:Object(P.jsxs)(oe.a,{opacity:[0,1],translateY:"1em",delay:function(e,t){return 1e3*t},children:[Object(P.jsx)(D.a,{variant:"h3",paragraph:!0,style:{fontWeight:800},children:"Skills"}),Object(P.jsxs)(ne.a,{className:e.grid,container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",spacing:1,children:[Object(P.jsx)(ne.a,{item:!0,xs:12,children:Object(P.jsx)(D.a,{variant:"h4",paragraph:!0,style:{fontWeight:800},children:"Front End"})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"HTML"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"2 years of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"CSS"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"2 years of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Javascript"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"2 years of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"jQuery"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"1 year of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"React"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"1 year of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Vue"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"1 year of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Material UI"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"1 year of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Bootstrap"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"1 year of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Material Design"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"1 year of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"DevExpress"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"4 months of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Angular"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"4 months of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Typescript"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"4 months of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"SASS"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"4 months of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})})]}),Object(P.jsxs)(ne.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",spacing:1,children:[Object(P.jsx)(ne.a,{item:!0,xs:12,children:Object(P.jsx)(D.a,{variant:"h4",paragraph:!0,style:{fontWeight:800},children:"Back End"})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"C#"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"2 years of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Java"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"2 years of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"C++"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"2 years of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"ASP.NET"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"2 years of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Node.js"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"2 years of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Expo"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"1 year of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"SQL Server"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"1 year of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"MySQL"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"1 year of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Oracle SQL"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"1 year of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Postman"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"4 months of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Spring"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"4 months of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"Firebase"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"4 months of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})}),Object(P.jsx)(ne.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ie.a,{variant:"outlined",className:e.card,children:Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(D.a,{variant:"h5",color:"textPrimary",component:"h2",children:"GraphQL"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"subtitle2",children:"4 months of experience"}),Object(P.jsx)(D.a,{color:"textPrimary",variant:"body2",component:"p"})]})})})]})]})})]})}var ve=a(129),ge=a.n(ve),fe=a(130),Pe=a.n(fe),we=Object(j.a)((function(e){return{container:{paddingBottom:75}}}));function Ne(){var e=we();return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(ae.a,{children:Object(P.jsx)("title",{children:"Colin"})}),Object(P.jsx)(re.a,{className:e.container,children:Object(P.jsxs)(oe.a,{opacity:[0,1],translateY:"1em",delay:function(e,t){return 1e3*t},children:[Object(P.jsx)(D.a,{variant:"h1",paragraph:!0,style:{fontWeight:800},children:"Hi, I'm Colin!"}),Object(P.jsx)(D.a,{variant:"body1",paragraph:!0,style:{fontWeight:500},children:"I'm a programming student who is knowledgeable in both front and back-end languages and tools. I am also proficient in object-oriented, software, client/server, and database development."}),Object(P.jsx)(D.a,{variant:"body1",paragraph:!0,style:{fontWeight:500},children:"Programming is constantly evolving and changing, so I believe my most significant strength is learning and making myself comfortable with new technologies. I also prioritize a team's success rather than the individual because high morale can result in incredible innovations."}),Object(P.jsx)(D.a,{variant:"body1",paragraph:!0,style:{fontWeight:500},children:"My portfolio showcases the skills I have learned over the years. As well as awards, experiences, and projects."}),Object(P.jsx)(D.a,{variant:"body1",paragraph:!0,style:{fontWeight:500},children:"Welcome \ud83d\ude0a"}),Object(P.jsxs)(ne.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",children:[Object(P.jsx)(v.a,{title:"Github",children:Object(P.jsx)(y.a,{size:"small",color:"inherit",edge:"start",href:"https://github.com/c-manliclic",target:"_blank",children:Object(P.jsx)(he.a,{fontSize:"large"})})}),Object(P.jsx)(v.a,{title:"LinkedIn",children:Object(P.jsx)(y.a,{size:"small",color:"inherit",edge:"start",href:"https://www.linkedin.com/in/colinmanliclic/",target:"_blank",children:Object(P.jsx)(ge.a,{fontSize:"large"})})}),Object(P.jsx)(v.a,{title:"E-mail",children:Object(P.jsx)(y.a,{size:"small",color:"inherit",edge:"start",href:"mailto:colinmanliclic@gmail.com",children:Object(P.jsx)(Pe.a,{fontSize:"large"})})})]})]})})]})}var Ce=[{path:"/",element:Object(P.jsx)(te,{}),children:[{path:"portfolio",element:Object(P.jsx)(Ne,{})},{path:"skills",element:Object(P.jsx)(ye,{})},{path:"experience",element:Object(P.jsx)(le,{})},{path:"projects",element:Object(P.jsx)(pe,{})},{path:"",element:Object(P.jsx)(o.a,{to:"/portfolio"})},{path:"*",element:Object(P.jsx)(o.a,{to:"/portfolio"})}]}];var Se=function(){return Object(o.i)(Ce)},ke=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,452)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),i(e),c(e)}))};c.a.render(Object(P.jsx)(n.a.StrictMode,{children:Object(P.jsx)(f.a,{children:Object(P.jsx)(Se,{})})}),document.getElementById("root")),ke()}},[[403,1,2]]]);
//# sourceMappingURL=main.db423a54.chunk.js.map