(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[869],{6813:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/[event]",function(){return n(8554)}])},3576:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var s=n(5893),i=n(4949),u=n.n(i),r=n(9004),a=n.n(r),o=n(765),c=n(7294),l=n(1163),d=n.n(l),f=n(5152),h=(n(2462),(0,f.default)((function(){return Promise.all([n.e(714),n.e(876),n.e(829)]).then(n.t.bind(n,1288,23))}),{loadableGenerated:{webpack:function(){return[1288]}},ssr:!1}));function p(e){var t=e.id,n=e.type,i=e.name,u=e.strass,r=e.setPublisMounted,l=(0,c.useState)(),f=l[0],p=l[1],m=(0,c.useState)(),v=m[0],b=m[1],j=(0,c.useState)(!1),x=j[0],y=j[1],N=(0,c.useState)(!1),S=N[0],E=N[1];(0,c.useEffect)((function(){d().query.id?(0,o.Z)("/publis/id/"+t).then((function(e){p(e[0].title),b(e[0].content),y(!0)})):y(!0)}),[d().query.id]),(0,c.useEffect)((function(){S&&setTimeout((function(){alert("Nouveau contenu ajout\xe9 !"),E(!1)}),100)}),[S]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Ajouter un nouveau contenu - "+i}),(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var s="POST",i=function(){var e=new Date,t=function(e,t,n){var s=6e4*e.getTimezoneOffset();return new Date(e.valueOf()+s).toLocaleDateString(t,n)}(e,"fr-FR",{weekday:"short",year:"numeric",month:"numeric",day:"2-digit"}),n=("0"+e.getHours()).slice(-2)+" h "+("0"+e.getMinutes()).slice(-2);return(t+" \xe0 "+n).replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()}))}();d().query.id&&(s="PUT"),(0,o.W)("/publis",s,{title:f,content:v,date:i,strass:u,type:n,id:t}).then((function(e){200==e&&(d().push(d().asPath.split("?")[0]),E(!0),r(!1))}))},className:a().formulaire,children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("p",{className:"texte",children:"Ajouter un titre"}),(0,s.jsx)("input",{type:"text",onChange:function(e){return p(e.target.value)},className:"field",placeholder:"Titre ...",value:f,required:!0})]}),(0,s.jsxs)("div",{className:a().editor,children:[(0,s.jsx)("p",{className:"texte",children:"Contenu"}),x?(0,s.jsx)(h,{setContents:v,onChange:function(e){return b(e)},height:"200px",placeholder:"Contenu ...",setOptions:{buttonList:[["font","fontSize","fontColor","hiliteColor"],["bold","underline","italic","strike","subscript","superscript"],["image","video","audio","link"]]}}):void 0]}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{type:"submit",className:"submit",children:"Publier"})})]})]})}var m=n(1664),v=n.n(m),b=n(9424);function j(e){var t=e.type,n=e.name,i=e.authStrass,r=e.selectStrass,a=(0,c.useState)(!1),l=a[0],f=a[1],h=(0,c.useState)([]),m=h[0],j=h[1],x=(0,c.useState)(!1),y=x[0],N=x[1];(0,c.useEffect)((function(){l&&setTimeout((function(){alert("Contenu supprim\xe9"),f(!1)}),100)}),[l]),(0,c.useEffect)((function(){y||(0,o.Z)("/publis/type/"+t).then((function(e){j(e),N(!0)}))}),[y]);switch(d().query.action){case"add":if(i.includes(r.cn))return(0,s.jsx)("div",{className:u().global,children:(0,s.jsx)(p,{strass:r,type:t,name:n,setPublisMounted:N})});case"modify":if(d().query.id&&i.includes(r.cn))return(0,s.jsx)("div",{className:u().global,children:(0,s.jsx)(p,{id:d().query.id,type:t,name:n,setPublisMounted:N})});default:return(0,s.jsxs)("div",{className:u().global,children:[(0,s.jsx)("h1",{children:n}),i.includes(r.cn)?(0,s.jsx)(v(),{href:d().asPath.split("?")[0]+"?action=add",passHref:!0,children:(0,s.jsx)("h4",{className:"boutonAjout",children:"Ajouter une publication"})}):void 0,null===m||void 0===m?void 0:m.map((function(e){return(0,s.jsx)(b.Z,{publi:e,children:e.strass==r.cn||"AE"==r.cn?(0,s.jsxs)("div",{className:u().sectionEdit,children:[(0,s.jsx)(v(),{href:d().asPath.split("?")[0]+"?action=modify&id="+e.id,passHref:!0,children:(0,s.jsx)("h4",{className:"boutonEdit",children:"Modifier"})}),(0,s.jsx)("button",{onClick:function(){return t=e.id,void(0,o.W)("/publis","DELETE",{id:t}).then((function(e){200==e&&(N(!1),f(!0))}));var t},children:(0,s.jsx)("h4",{className:"boutonEdit",children:"Supprimer"})})]}):void 0},e.id)}))]})}}},8554:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var s=n(5893),i=n(1163),u=n.n(i),r=n(7294),a=n(3576),o=n(765);function c(e){var t=e.selectStrass,n=u().asPath.substring(8).split("?")[0],i=(0,r.useState)([]),c=i[0],l=i[1],d=(0,r.useState)([]),f=d[0],h=d[1];return(0,r.useEffect)((function(){"[event]"!=n&&(0,o.Z)("/events/"+n).then((function(e){h(e),l(["AE",e.strass])}))}),[n]),(0,s.jsx)(a.Z,{type:n,name:f.title,authStrass:c,selectStrass:t})}},9004:function(e){e.exports={formulaire:"Formulaire_formulaire__030Vg"}}},function(e){e.O(0,[719,774,888,179],(function(){return t=6813,e(e.s=t);var t}));var t=e.O();_N_E=t}]);