(this.webpackJsonpnftcars=this.webpackJsonpnftcars||[]).push([[0],{169:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return g}));var r=n(2),c=n.n(r),a=n(3),i=n(31),o=n(62),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),b=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),d=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,b,d=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=d.length>3&&void 0!==d[3]?d[3]:"recent",o=d.length>4&&void 0!==d[4]&&d[4],s=!1,u={slot:0,confirmations:0,err:null},b=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(d,f){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),f({timeout:!0}))}),n);try{b=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),f(u)):(console.log("Resolved via websocket",e),d(u))}),i)}catch(l){s=!0,console.error("WS error in setup",t,l)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,f(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,O(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[b]&&r.removeSignatureListener(b),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),f=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},l=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,b,d,f,l,p,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),b={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return d=e.sent,f=d.data.itemsAvailable.toNumber(),l=d.itemsRedeemed.toNumber(),p=f-l,m=d.data.goLiveDate.toNumber(),m=new Date(1e3*m),console.log({itemsAvailable:f,itemsRedeemed:l,itemsRemaining:p,goLiveDate:m}),e.abrupt("return",{candyMachine:b,itemsAvailable:f,itemsRedeemed:l,itemsRemaining:p,goLiveDate:m});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer(),e.from("edition")],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,d,l,g,O,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,j(r,s.publicKey);case 3:return u=e.sent,d=t.connection,l=t.program,e.next=7,m(s.publicKey);case 7:return g=e.sent,e.next=10,p(s.publicKey);case 10:return O=e.sent,e.next=13,d.getMinimumBalanceForRentExemption(o.a.span);case 13:return x=e.sent,e.next=16,l.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:g,masterEdition:O,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:b,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:x,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),f(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(8).Buffer)},349:function(e,t,n){},350:function(e,t,n){},353:function(e,t){},355:function(e,t){},371:function(e,t){},372:function(e,t){},458:function(e,t){},460:function(e,t){},475:function(e,t){},479:function(e,t){},481:function(e,t){},491:function(e,t){},493:function(e,t){},520:function(e,t){},522:function(e,t){},527:function(e,t){},529:function(e,t){},536:function(e,t){},548:function(e,t){},551:function(e,t){},563:function(e,t){},564:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(1),s=n.n(o),u=n(28),b=n.n(u),d=(n(349),n(350),n(16)),f=n(2),l=n.n(f),p=n(3),m=n(13),j=n(129),g=n(130),O=n(307),x=n(591),v=n(599),h=n(598),y=n(6),w=n(51),S=n(167),k=n(169),P=n(27),R=Object(g.a)(S.a)(r||(r=Object(j.a)(["\n&&{\n  color: black;\n  background-color: white;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  &:hover {\n    color: white;\n    background-color: #000;\n  }\n}\n"]))),A=g.a.span(c||(c=Object(j.a)([""]))),K=g.a.div(a||(a=Object(j.a)([""]))),T=Object(g.a)(x.a)(i||(i=Object(j.a)(["\n&&{\n  color: black;\n  background-color: white;\n  border-radius: 50px;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 0.5rem 2rem;\n  &:hover {\n    color: white;\n    background-color: #000;\n  }\n  &:disabled {\n    padding: 0.5rem 2rem 0.4rem 2rem;\n  }\n}\n\n"]))),M=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(P.jsxs)(A,{children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})},L=function(e){var t=Object(o.useState)(),n=Object(m.a)(t,2),r=(n[0],n[1]),c=Object(o.useState)(!1),a=Object(m.a)(c,2),i=a[0],s=a[1],u=Object(o.useState)(!1),b=Object(m.a)(u,2),f=b[0],j=b[1],g=Object(o.useState)(!1),x=Object(m.a)(g,2),S=x[0],A=x[1],L=Object(o.useState)(0),B=Object(m.a)(L,2),E=B[0],D=B[1],I=Object(o.useState)(0),C=Object(m.a)(I,2),N=C[0],W=C[1],U=Object(o.useState)(0),Y=Object(m.a)(U,2),_=Y[0],F=Y[1],q=Object(o.useState)({open:!1,message:"",severity:void 0}),z=Object(m.a)(q,2),G=z[0],V=z[1],H=Object(o.useState)(new Date(e.startDate)),X=Object(m.a)(H,2),J=X[0],Z=X[1],Q=Object(w.c)(),$=Object(o.useState)(),ee=Object(m.a)($,2),te=ee[0],ne=ee[1],re=function(){Object(p.a)(l.a.mark((function t(){var n,r,c,a,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Q){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(k.b)(Q,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,o=n.itemsRedeemed,D(a),F(i),W(o),j(0===i),Z(c),ne(r);case 16:case"end":return t.stop()}}),t)})))()},ce=function(){var t=Object(p.a)(l.a.mark((function t(){var n,c,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,A(!0),!Q||!(null===te||void 0===te?void 0:te.program)){t.next=10;break}return t.next=5,Object(k.c)(te,e.config,Q.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(k.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(c=t.sent)||void 0===c?void 0:c.err)?V({open:!0,message:"FAILED",severity:"error"}):V({open:!0,message:"Success!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Failed",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",j(!0)):312===t.t0.code&&(a="Not Started"):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="No Funds.")),V({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!Q){t.next=23;break}return t.next=21,e.connection.getBalance(Q.publicKey);case 21:i=t.sent,r(i/y.LAMPORTS_PER_SOL);case 23:return A(!1),re(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Q){t.next=5;break}return t.next=3,e.connection.getBalance(Q.publicKey);case 3:n=t.sent,r(n/y.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[Q,e.connection]),Object(o.useEffect)(re,[Q,e.candyMachineId,e.connection]),Object(P.jsxs)("div",{children:[Q&&Object(P.jsxs)("div",{className:"MintInfo",children:[Object(P.jsxs)("p",{children:[Object(P.jsx)("b",{children:"Total Available:"})," ",E]}),Object(P.jsxs)("p",{children:[Object(P.jsx)("b",{children:"Redeemed:"})," ",N]}),Object(P.jsxs)("p",{children:[Object(P.jsx)("b",{children:"Remaining:"})," ",_]})]}),Object(P.jsx)(K,{children:Q?Object(P.jsx)("div",{style:{margin:"1rem auto",textAlign:"center"},children:Object(P.jsx)(T,{disabled:f||S||!i,onClick:ce,variant:"contained",children:f?"SOLD OUT":i?S?Object(P.jsx)("p",{children:"Minting..."}):"MINT":Object(P.jsx)(O.a,{date:J,onMount:function(e){return e.completed&&s(!0)},onComplete:function(){return s(!0)},renderer:M})})}):Object(P.jsx)(R,{children:"CONNECT"})}),Object(P.jsx)(v.a,{open:G.open,autoHideDuration:6e3,onClose:function(){return V(Object(d.a)(Object(d.a)({},G),{},{open:!1}))},children:Object(P.jsx)(h.a,{onClose:function(){return V(Object(d.a)(Object(d.a)({},G),{},{open:!1}))},severity:G.severity,children:G.message})})]})},B=n(31),E=n(112),D=n(336),I=n(596),C=new B.d.PublicKey("8MvgnaqTCL59hDevGoLEBo2EXccwtYt2Cg8NwgXSDYX5"),N=new B.d.PublicKey("5rYVqctA7z71W2YtKGRwv9p6cArNniE9679UDxvvWDnC"),W=new B.d.PublicKey("9U3krB5RpoMvUcHBwiMDtt1ag6LfWjAnyvnt3dS2Cn4s"),U="mainnet-beta",Y=new B.d.Connection("https://explorer-api.mainnet-beta.solana.com"),_=parseInt("1633680000",10),F=Object(D.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),q=function(){var e=Object(o.useMemo)((function(){return Object(y.clusterApiUrl)(U)}),[]),t=Object(o.useMemo)((function(){return[Object(E.a)(),Object(E.b)(),Object(E.c)(),Object(E.e)({network:U}),Object(E.d)({network:U})]}),[]);return Object(P.jsx)(I.a,{theme:F,children:Object(P.jsx)(w.a,{endpoint:e,children:Object(P.jsx)(w.b,{wallets:t,autoConnect:!0,children:Object(P.jsx)(S.b,{children:Object(P.jsx)(L,{candyMachineId:W,config:N,connection:Y,startDate:_,treasury:C,txTimeout:3e4})})})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,600)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};b.a.render(Object(P.jsx)(s.a.StrictMode,{children:Object(P.jsx)(q,{})}),document.getElementById("root")),z()}},[[564,1,2]]]);
//# sourceMappingURL=main.2388bb0a.chunk.js.map