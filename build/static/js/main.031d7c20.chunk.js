(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__2YnLQ",control:"Checkout_control__2w9Os",actions:"Checkout_actions__N9XVn",submit:"Checkout_submit__2UOaD",invalid:"Checkout_invalid__3hMjK"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3KtbN",total:"Cart_total__2AubQ",actions:"Cart_actions__1JBLA","button--alt":"Cart_button--alt__1Q4-5",button:"Cart_button__1w04f"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3pX1N",summary:"CartItem_summary__2bjXR",price:"CartItem_price__3Xzp6",amount:"CartItem_amount__1wItn",actions:"CartItem_actions__20MTk"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__32wcE",icon:"HeaderCartButton_icon__3t-_S",badge:"HeaderCartButton_badge__28bbf",bump:"HeaderCartButton_bump__3UDj9"}},,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__2DTIz","meals-appear":"AvailableMeals_meals-appear__U_nJ_",error:"AvailableMeals_error___v9bM"}},function(e,t,n){e.exports={meal:"MealItem_meal__60p-P",description:"MealItem_description__2qiJo",price:"MealItem_price__t1w9a"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__330sE",content:"Modal_content__3xnNq",modal:"Modal_modal__2paS7","slide-down":"Modal_slide-down__4pxCW"}},,function(e,t,n){e.exports={header:"Header_header__m18iX","main-image":"Header_main-image__32TTB"}},,function(e,t,n){e.exports={card:"Card_card__3Ns9y"}},function(e,t,n){e.exports={form:"MealItemForm_form__3Jqc-"}},function(e,t,n){e.exports={input:"Input_input__3yYtR"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__2xIro"}},,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(9),c=n.n(a),r=(n(27),n(2)),s=n(6),i=n(18),o=n.n(i),l=n.p+"static/media/meal.34fa9658.jpg",u=n(11),d=n.n(u),j=n(0),m=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},b=n(1),O=n.n(b),h=O.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),p=function(e){var t=Object(b.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(b.useContext)(h).items,i=s.reduce((function(e,t){return e+t.amount}),0),o="".concat(d.a.button," ").concat(a?d.a.bump:"");return Object(b.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(j.jsxs)("button",{onClick:e.onShowModal,className:o,children:[Object(j.jsx)("span",{className:d.a.icon,children:Object(j.jsx)(m,{})}),Object(j.jsx)("span",{children:"Your Items"}),Object(j.jsx)("span",{className:d.a.badge,children:i})]})},x=function(e){return Object(j.jsxs)(s.Fragment,{children:[Object(j.jsxs)("header",{className:o.a.header,children:[Object(j.jsx)("h1",{children:"Meals"}),Object(j.jsx)(p,{onShowModal:e.onShowModal})]}),Object(j.jsx)("div",{className:o.a["main-image"],children:Object(j.jsx)("img",{src:l,alt:"The meal on canvas"})})]})},f=n(14),_=n.n(f),v=n(20),C=n.n(v),y=function(e){return Object(j.jsx)("div",{className:C.a.card,children:e.children})},N=n(15),g=n.n(N),M=n(21),k=n.n(M),w=n(4),A=n(22),I=n.n(A),S=O.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:I.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(w.a)(Object(w.a)({},e.input),{},{ref:t}))]})})),R=function(e){var t=Object(b.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(b.useRef)();return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a>5||a<1?c(!1):e.onSendAmount(a)},className:k.a.form,children:[Object(j.jsx)(S,{ref:s,label:"Amount",input:{id:"amount_"+e.id,min:"1",max:"5",step:"1",defaultValue:"1",type:"number"}}),Object(j.jsx)("button",{children:"+ Add"}),!a&&Object(j.jsx)("p",{children:"Please enter a valid amount. (1-5)."})]})},F=function(e){var t="$ ".concat(e.price.toFixed(2)),n=Object(b.useContext)(h);return Object(j.jsxs)("li",{className:g.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("h3",{children:[" ",e.name]}),Object(j.jsx)("div",{className:g.a.description,children:e.description}),Object(j.jsx)("div",{className:g.a.price,children:t})]}),Object(j.jsx)("div",{children:Object(j.jsx)(R,{onSendAmount:function(t){n.addItem({amount:t,price:e.price,id:e.id,name:e.name})},id:e.id})})]})},D=n(7),E=n.n(D),T=n(13),P=function(){var e=Object(b.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(b.useState)(!1),s=Object(r.a)(c,2),i=s[0],o=s[1],l=Object(b.useState)(!1),u=Object(r.a)(l,2),d=u[0],j=u[1],m=Object(b.useCallback)(function(){var e=Object(T.a)(E.a.mark((function e(t){var n,c,r,s=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:null,o(!0),e.prev=2,e.next=5,fetch(t.url,{method:t.method?t.method:"GET",body:t.body?JSON.stringify(t.body):null,headers:t.headers?t.headers:{}});case 5:if((c=e.sent).ok){e.next=8;break}throw new Error("there is a failure, please check ...");case 8:return e.next=10,c.json();case 10:r=e.sent,n&&n(r),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),j(e.t0.message),console.log(e.t0);case 18:o(!1),"POST"===t.method&&(console.log("this is a post"),a(!0),console.log("it is working"));case 20:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{isLoading:i,dataSent:n,sendRequest:m,error:d}},H=function(e){var t=Object(b.useState)([]),n=Object(r.a)(t,2),a=n[0],c=n[1],s=P(),i=s.isLoading,o=s.sendRequest,l=s.error;Object(b.useEffect)((function(){o({url:"https://food-react-47e6c-default-rtdb.firebaseio.com/.json"},(function(e){var t=e.menu,n=[];for(var a in t)n.push({id:a,name:t[a].name,description:t[a].description,price:t[a].price});c(n)}))}),[o]);var u,d=a.map((function(e){return Object(j.jsx)(F,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return u=i?Object(j.jsx)("p",{className:_.a.error,children:"Loading ..."}):l?Object(j.jsx)("p",{className:_.a.error,children:l}):Object(j.jsx)("ul",{children:d}),Object(j.jsx)("section",{className:_.a.meals,children:Object(j.jsx)(y,{children:u})})},B=n(23),q=n.n(B),J=function(){return Object(j.jsxs)("section",{className:q.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(j.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},L=function(){return Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)(J,{}),Object(j.jsx)(H,{})]})},Y=n(5),V=n.n(Y),z=n(16),U=n.n(z),X=function(e){return Object(j.jsx)("div",{onClick:e.onClose,className:U.a.backdrop})},Q=function(e){return Object(j.jsx)("div",{className:U.a.modal,children:Object(j.jsx)("div",{className:U.a.content,children:e.children})})},$=function(e){var t=document.getElementById("overlays");return Object(j.jsxs)(s.Fragment,{children:[c.a.createPortal(Object(j.jsx)(X,{onClose:e.onClose}),t),c.a.createPortal(Object(j.jsx)(Q,{children:e.children}),t)]})},K=n(8),G=n.n(K),W=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:G.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:G.a.summary,children:[Object(j.jsx)("span",{className:G.a.price,children:t}),Object(j.jsxs)("span",{className:G.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:G.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Z=n(3),ee=n.n(Z),te=function(e){return console.log("string"===typeof e),{valid:"number"===typeof e?5===(""+e).length:""!==e.trim(),value:e}},ne=function(e){var t=Object(b.useState)({name:!0,city:!0,postal:!0,street:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(b.useRef)(),i=Object(b.useRef)(),o=Object(b.useRef)(),l=Object(b.useRef)(),u="".concat(ee.a.control," ").concat(a.name?"":ee.a.invalid),d="".concat(ee.a.control," ").concat(a.city?"":ee.a.invalid),m="".concat(ee.a.control," ").concat(a.postal?"":ee.a.invalid),O="".concat(ee.a.control," ").concat(a.street?"":ee.a.invalid);return Object(j.jsxs)("form",{className:ee.a.form,onSubmit:function(t){t.preventDefault();var n=te(s.current.value),a=n.valid,r=n.value,u=te(i.current.value),d=u.valid,j=u.value,m=te(+o.current.value),b=m.valid,O=m.value,h=te(l.current.value),p=h.valid,x=h.value;c({name:a,city:p,street:d,postal:b}),p&&a&&b&&d&&e.onValidUserData({name:r,street:j,postal:O,city:x})},children:[Object(j.jsxs)("div",{className:u,children:[Object(j.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(j.jsx)("input",{type:"text",id:"name",ref:s}),!a.name&&Object(j.jsx)("p",{children:"Please enter a valid name."})]}),Object(j.jsxs)("div",{className:O,children:[Object(j.jsx)("label",{htmlFor:"street",children:"Street"}),Object(j.jsx)("input",{type:"text",id:"street",ref:i}),!a.street&&Object(j.jsx)("p",{children:"Please enter a valid street."})]}),Object(j.jsxs)("div",{className:m,children:[Object(j.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(j.jsx)("input",{type:"number",id:"postal",ref:o}),!a.postal&&Object(j.jsx)("p",{children:"Please enter a valid postal (5 digits code)."})]}),Object(j.jsxs)("div",{className:d,children:[Object(j.jsx)("label",{htmlFor:"city",children:"City"}),Object(j.jsx)("input",{type:"text",id:"city",ref:l})," ",!a.city&&Object(j.jsx)("p",{children:"Please enter a valid city."})]}),Object(j.jsxs)("div",{className:ee.a.actions,children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{className:ee.a.submit,children:"Confirm"})]})]})},ae=function(e){var t=Object(b.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=P(),i=s.isLoading,o=s.dataSent,l=s.sendRequest,u=Object(b.useContext)(h),d="$".concat(u.totalAmount.toFixed(2)),m=u.items.length>0,p=function(e){u.removeItem(e)},x=function(e){u.addItem(Object(w.a)(Object(w.a)({},e),{},{amount:1}))},f=function(){var e=Object(T.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l({url:"https://food-react-47e6c-default-rtdb.firebaseio.com/orders.json",method:"POST",body:{user:t,orderedItem:u.items}}),u.clearCart();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=u.items.map((function(e,t){return Object(j.jsx)(W,{onRemove:p.bind(null,e.id),onAdd:x.bind(null,e),amount:u.items[t].amount,price:u.items[t].price,name:u.items[t].name},u.items[t].id)})),v=Object(j.jsxs)("div",{className:V.a.actions,children:[Object(j.jsx)("button",{onClick:e.onCloseModal,className:V.a["button--alt"],children:"Close"}),m&&Object(j.jsx)("button",{onClick:function(){c(!0)},className:V.a.button,children:"Order"})]}),C=Object(j.jsxs)(O.a.Fragment,{children:[Object(j.jsx)("ul",{className:V.a["cart-items"],children:_}),Object(j.jsxs)("div",{className:V.a.total,children:[Object(j.jsx)("span",{children:"Total amount"}),Object(j.jsxs)("span",{children:[" ",d]})]}),a&&Object(j.jsx)(ne,{onValidUserData:f,onCancel:e.onCloseModal}),!a&&v]}),y=Object(j.jsx)("p",{children:" Your order is being sending ..."}),N=Object(j.jsxs)(O.a.Fragment,{children:[Object(j.jsx)("p",{children:"Your order has been sent successfully \ud83d\ude0a"}),Object(j.jsx)("div",{className:V.a.actions,children:Object(j.jsx)("button",{onClick:e.onCloseModal,className:V.a["button--alt"],children:"Close"})})]}),g=Object(j.jsxs)(O.a.Fragment,{children:[Object(j.jsx)("p",{children:"There has been an error, please check your internet connection!"}),Object(j.jsx)("div",{className:V.a.actions,children:Object(j.jsx)("button",{onClick:e.onCloseModal,className:V.a["button--alt"],children:"Close"})})]});return Object(j.jsxs)($,{onClose:e.onCloseModal,children:[!i&&!o&&C,i&&y,o&&!i&&N,o&&i&&g]})},ce=n(19),re={items:[],totalAmount:0},se=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var s=Object(w.a)(Object(w.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ce.a)(e.items))[c]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(w.a)(Object(w.a)({},l),{},{amount:l.amount-1});(i=Object(ce.a)(e.items))[o]=d}return{items:i,totalAmount:u}}return t.type,re},ie=function(e){var t=Object(b.useReducer)(se,re),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:Math.abs(a.totalAmount),addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(j.jsx)(h.Provider,{value:s,children:e.children})};var oe=function(){var e=Object(b.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)(ie,{children:[n&&Object(j.jsx)(ae,{onCloseModal:function(){a(!1)}}),Object(j.jsx)(x,{onShowModal:function(){a(!0)}}),Object(j.jsx)("body",{children:Object(j.jsx)(L,{})})]})};c.a.render(Object(j.jsx)(oe,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.031d7c20.chunk.js.map