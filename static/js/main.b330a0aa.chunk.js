(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{36:function(e,t,r){},37:function(e,t,r){},52:function(e,t,r){"use strict";r.r(t);var i=r(6),o=r.n(i),s=r(26),n=r.n(s),c=(r(36),r(37),r(10)),a=r(11),l=r(13),d=r(12),h=r(14),m=r.n(h),p=r(27),u=r(23),b=r(2);var j=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"btn btn-success w-100",style:{borderRadius:30},onClick:Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.b)("How much do you want to bid?",{isRequired:!0,defaultValue:100});case 2:(t=e.sent)&&Object(u.a)("Your bid of $".concat(t," has been registered"),"Success!");case 4:case"end":return e.stop()}}),e)}))),children:Object(b.jsx)("strong",{children:"Make a Bid"})})})},f=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(c.a)(this,r);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={nft:e.props.value},e}return Object(a.a)(r,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"card w-75 mx-auto",style:{borderRadius:30,margin:24,boxShadow:"3px 3px 3px gray"},children:[Object(b.jsx)("img",{className:"card-img-top",src:"".concat("/GroupsDemo","/assets/images/").concat(this.state.nft.imageSource),alt:"...",style:{borderTopLeftRadius:30,borderTopRightRadius:30}}),Object(b.jsxs)("div",{className:"card-body",style:{fontFamily:"Montserrat",padding:8,paddingLeft:16,paddingRight:16},children:[Object(b.jsx)("h3",{className:"card-title",style:{marginBottom:0},children:Object(b.jsx)("strong",{children:this.state.nft.title})}),Object(b.jsx)("h6",{className:"card-text",style:{color:"gray",paddingTop:0},children:"by "+this.state.nft.creator}),Object(b.jsx)("h4",{className:"card-title",children:"Current bid $"+this.state.nft.price}),Object(b.jsx)(j,{})]})]})})}}]),r}(i.Component),x=f,g=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(c.a)(this,r);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={proposals:[{id:1,imageSource:"nft1.jpeg",title:"Astronaut Crystal",creator:"Bobby Bob",price:1500},{id:2,imageSource:"nft2.jpeg",title:"Comics - Post-Covid",creator:"Nobby Nob",price:200},{id:3,imageSource:"nft3.jpeg",title:"Patience",creator:"Robby Rob",price:250},{id:4,imageSource:"nft4.jpeg",title:"Coming Alive",creator:"Bob Ross",price:500},{id:5,imageSource:"nft5.jpeg",title:"Meme Army",creator:"Kirk Lee",price:150}]},e}return Object(a.a)(r,[{key:"render",value:function(){return Object(b.jsx)("ul",{style:{listStyleType:"none",padding:0},children:this.state.proposals.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(x,{value:e})},e.id)}))})}}]),r}(i.Component),y=g;var O=function(){return Object(b.jsx)(y,{})},v=r(19),C=r(3),w=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(c.a)(this,r);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={circleColor:e.props.value.circleColor,circleText:e.props.value.circleText,name:e.props.value.name,moto:e.props.value.moto,memberCount:e.props.value.memberCount,profit:e.props.value.profit},e}return Object(a.a)(r,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"card",style:{fontFamily:"Montserrat",margin:"1% 8% 8% 8%",borderRadius:15,borderWidth:0,boxShadow:"0px 0px 6px lightgray",padding:10,backgroundColor:"#fafafa"},children:Object(b.jsxs)("div",{className:"d-flex align-items-top",style:{display:"flex",flexDirection:"row"},children:[Object(b.jsx)("div",{children:Object(b.jsx)("span",{className:"square rounded-circle d-flex align-items-center justify-content-center",style:{backgroundColor:"".concat(this.state.circleColor),width:50,height:50,margin:10,verticalAlign:"top"},children:Object(b.jsx)("h4",{style:{fontWeight:800,marginTop:8,color:"white"},children:this.state.circleText})})}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexGrow:1},children:[Object(b.jsx)("h4",{className:"card-title",style:{marginTop:10,fontWeight:800,color:"black",marginBottom:4},children:this.state.name}),Object(b.jsx)("h6",{style:{fontSize:12,color:"black",marginBottom:4},children:this.state.moto}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(b.jsxs)("h6",{style:{fontSize:12,color:"gray",flexGrow:2,flexBasis:0,margin:0},children:[this.state.memberCount," Members"]}),Object(b.jsx)("h6",{style:{fontSize:12,fontWeight:800,color:this.state.profit>=0?"green":"red",flexGrow:2,flexBasis:0,textAlign:"right",margin:0},children:this.state.profit+"%"}),Object(b.jsx)("img",{src:"".concat("/GroupsDemo","/assets/images/caret.png"),alt:"...",style:{flexGrow:1,flexBasis:0,objectFit:"scale-down",height:16}})]})]})]})})}}]),r}(i.Component),S=w,k=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(c.a)(this,r);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={groups:[{id:1,circleColor:"blue",circleText:"AA",name:"A-Listers",moto:"We Are all about them celebrities & their stuff",memberCount:4,profit:5.9},{id:2,circleColor:"green",circleText:"WS",name:"Speculating Apes",moto:"Find the right pick and we're off to the moon! \ud83d\ude80\ud83d\ude80\ud83d\ude80",memberCount:8,profit:27.2},{id:3,circleColor:"pink",circleText:"LP",name:"Awesome Audiophiles",moto:"We can't wait to hear all of the earliest releases!!",memberCount:25,profit:-72.2},{id:4,circleColor:"black",circleText:"NF",name:"NFT4Life",moto:"We can stand some losses as long as we're on the Crypto bleeding edge",memberCount:2,profit:-353.1},{id:5,circleColor:"red",circleText:"ST",name:"SuperStarz",moto:"We sure do love our sports stuff!!!",memberCount:17,profit:48.9},{id:6,circleColor:"blue",circleText:"GC",name:"Garbage Collectors",moto:"\"One man's trash, that's another man's come up\" - Macklemore",memberCount:5,profit:-3.4},{id:7,circleColor:"purple",circleText:"CS",name:"Clueless Spenders",moto:"We may not know art, but we know what we like!!!",memberCount:327,profit:66.7}]},e}return Object(a.a)(r,[{key:"render",value:function(){return Object(b.jsx)("ul",{style:{listStyleType:"none",padding:0},children:this.state.groups.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(v.b,{to:"/groups/".concat(parseInt(e.id)-1),style:{textDecoration:"none"},children:Object(b.jsx)(S,{value:e})})},e.id)}))})}}]),r}(i.Component),T=k,A=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(c.a)(this,r);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={id:e.props.match.params.id,groupName:"",groups:[{id:1,circleColor:"blue",circleText:"AA",name:"A-Listers",moto:"We Are all about them celebrities & their stuff",memberCount:4,profit:5.9},{id:2,circleColor:"green",circleText:"WS",name:"Speculating Apes",moto:"Find the right pick and we're off to the moon! \ud83d\ude80\ud83d\ude80\ud83d\ude80",memberCount:8,profit:27.2},{id:3,circleColor:"pink",circleText:"LP",name:"Awesome Audiophiles",moto:"We can't wait to hear all of the earliest releases!!",memberCount:25,profit:-72.2},{id:4,circleColor:"black",circleText:"NF",name:"NFT4Life",moto:"We can stand some losses as long as we're on the Crypto bleeding edge",memberCount:2,profit:-353.1},{id:5,circleColor:"red",circleText:"ST",name:"SuperStarz",moto:"We sure do love our sports stuff!!!",memberCount:17,profit:48.9},{id:6,circleColor:"blue",circleText:"GC",name:"Garbage Collectors",moto:"\"One man's trash, that's another man's come up\" - Macklemore",memberCount:5,profit:-3.4},{id:7,circleColor:"purple",circleText:"CS",name:"Clueless Spenders",moto:"We may not know art, but we know what we like!!!",memberCount:327,profit:66.7}],date:new Date},e}return Object(a.a)(r,[{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"card",style:{fontFamily:"Montserrat",margin:0,borderBottomLeftRadius:50,borderBottomRightRadius:50,borderWidth:0,boxShadow:"0px 0px 10px gray",padding:10,backgroundColor:"#fafafa"},children:[Object(b.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:Object(b.jsx)("span",{className:"square rounded-circle d-flex align-items-center justify-content-center",style:{backgroundColor:"".concat(this.state.groups[this.state.id].circleColor),width:70,height:70,margin:10,verticalAlign:"top"},children:Object(b.jsx)("h4",{style:{fontWeight:800,marginTop:8,color:"white",fontSize:30},children:this.state.groups[this.state.id].circleText})})}),Object(b.jsx)("h1",{style:{marginTop:10,fontWeight:800,color:"black",marginBottom:4,textAlign:"center"},children:this.state.groups[this.state.id].name}),Object(b.jsx)("div",{className:"d-flex align-items-top",style:{display:"flex",flexDirection:"row"},children:Object(b.jsx)("div",{style:{display:"flex",flexDirection:"column",flexGrow:1},children:Object(b.jsxs)("div",{className:"w-75 mx-auto",style:{display:"flex",flexDirection:"row",margin:10},children:[Object(b.jsx)("h5",{style:{flexGrow:2,flexBasis:0,textAlign:"center"},children:"$11,572"}),Object(b.jsx)("h5",{style:{fontWeight:700,color:this.state.groups[this.state.id].profit>=0?"green":"red",flexGrow:2,flexBasis:0,textAlign:"center"},children:this.state.groups[this.state.id].profit+"%"})]})})}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row",textAlign:"center",marginRight:"5%",marginLeft:"5%",fontSize:8},children:[Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,flexBasis:0},children:[Object(b.jsx)("h6",{style:{fontSize:12,color:"gray"},children:"Owns"}),Object(b.jsx)("h6",{style:{fontSize:12,color:"black"},children:"34%"})]}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,flexBasis:0},children:[Object(b.jsx)("h6",{style:{fontSize:12,color:"gray"},children:"Proposals"}),Object(b.jsx)("h6",{style:{fontSize:12,color:"black"},children:"3"})]}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,flexBasis:0},children:[Object(b.jsx)("h6",{style:{fontSize:12,color:"gray"},children:"Last Updated"}),Object(b.jsx)("h6",{style:{fontSize:12,color:"black"},children:this.state.date.toLocaleTimeString("he-IL",{hour:"2-digit",minute:"2-digit"})+" "+this.state.date.toLocaleDateString()})]}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,flexBasis:0},children:[Object(b.jsx)("h6",{style:{fontSize:12,color:"gray"},children:"Members"}),Object(b.jsx)("h6",{style:{fontSize:12,color:"black"},children:this.state.groups[this.state.id].memberCount})]})]})]}),Object(b.jsxs)("div",{style:{fontFamily:"Montserrat",margin:0,padding:20},children:[Object(b.jsx)("button",{className:"btn btn-primary w-100",onClick:function(){return e.nextPath("/proposals")},style:{borderRadius:20,height:60,marginTop:40,fontSize:22,fontWeight:800},children:"Submit a new proposal"}),Object(b.jsx)("button",{className:"btn btn-secondary w-100",style:{borderRadius:20,height:60,marginTop:20,fontSize:22,fontWeight:800},disabled:!0,children:"Join an existing proposal"})]})]})}}]),r}(i.Component),N=A;r(51);var W=function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(b.jsx)("h1",{className:"w-75",style:{fontFamily:"Montserrat",margin:30},children:Object(b.jsx)("strong",{children:"Your Groups"})}),Object(b.jsx)("img",{className:"",src:"".concat("/GroupsDemo","/assets/images/avatar1.jpeg"),alt:"...",style:{margin:30,width:36,height:36}})]}),Object(b.jsx)(T,{})]})},B=function(){return Object(b.jsx)(v.a,{children:Object(b.jsx)("div",{children:Object(b.jsxs)(C.c,{children:[Object(b.jsx)(C.a,{exact:!0,path:"/",component:W}),Object(b.jsx)(C.a,{path:"/groups/:id",component:N}),Object(b.jsx)(C.a,{path:"/proposals",component:O})]})})})},D=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,55)).then((function(t){var r=t.getCLS,i=t.getFID,o=t.getFCP,s=t.getLCP,n=t.getTTFB;r(e),i(e),o(e),s(e),n(e)}))};r(50);n.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),D()}},[[52,1,2]]]);
//# sourceMappingURL=main.b330a0aa.chunk.js.map