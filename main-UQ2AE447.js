import{a as A,b as E,c as T,d as H,e as I,f as D}from"./chunk-4M2OJGKT.js";import{b as _}from"./chunk-OM6BBL2X.js";import{Aa as h,Ca as m,Da as b,Ha as e,Ia as n,Ja as i,La as w,Ma as C,O as v,Q as s,Ra as l,Sa as y,Va as p,Wa as x,Z as f,_ as g,db as S,pb as M,ra as a,rb as L,wa as k,wb as O}from"./chunk-WEFK3Z7T.js";import"./chunk-2VMXMS7J.js";var j=[{path:"",loadChildren:()=>import("./chunk-4ZTOFTR5.js")},{path:"cart",loadChildren:()=>import("./chunk-PDZKS2SH.js")},{path:"**",redirectTo:"",pathMatch:"full"}];var F={providers:[S({eventCoalescing:!0}),I(j,D()),_()]};var N=()=>({exact:!0});function P(t,r){if(t&1&&(e(0,"span",20),l(1),n()),t&2){let o=C();a(),y(o.cartState.count())}}function z(t,r){t&1&&(e(0,"span",23),l(1,"dark_mode"),n())}function G(t,r){t&1&&(e(0,"span",23),l(1,"light_mode"),n())}var c=class t{cartState=v(O).state;darkMode=k(!1);ngOninit(){this.loadTheme()}toggleTheme(){let r=document.documentElement;r.classList.contains("dark")?(r.classList.remove("dark"),localStorage.setItem("theme","light"),this.darkMode.set(!1)):(r.classList.add("dark"),localStorage.setItem("theme","dark"),this.darkMode.set(!0))}loadTheme(){localStorage.getItem("theme")==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=s({type:t,selectors:[["app-header"]],standalone:!0,features:[p],decls:28,vars:7,consts:[[1,"border-gray-200","dark:bg-gray-900","bg-green-300","border-b","mb-8","fixed","top-0","left-0","w-full"],[1,"max-w-screen-xl","flex","flex-wrap","items-center","justify-between","mx-auto","p-4"],["data-collapse-toggle","navbar-default","type","button","aria-controls","navbar-default","aria-expanded","false",1,"inline-flex","items-center","p-2","w-10","h-10","justify-center","text-sm","text-green-800","rounded-lg","md:hidden","hover:bg-gray-100","focus:outline-none","focus:ring-2","focus:ring-gray-200","dark:text-gray-400","dark:hover:bg-gray-700","dark:focus:ring-gray-600"],[1,"sr-only"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 17 14",1,"w-5","h-5"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M1 1h15M1 7h15M1 13h15"],["href","/",1,"flex","items-center","space-x-3","rtl:space-x-reverse"],["src","./img/logo.png","alt","Flowbite Logo",1,"h-8"],[1,"self-center","text-2xl","font-semibold","whitespace-nowrap","dark:text-white","text-green-900"],["id","navbar-default",1,"hidden","w-full","md:block","md:w-auto"],[1,"font-medium","flex","flex-col","p-4","md:p-0","mt-4","border","border-gray-100","rounded-lg","md:flex-row","md:space-x-8","rtl:space-x-reverse","md:mt-0","md:border-0","dark:border-gray-700"],["routerLink","/","routerLinkActive","text-green-900 dark:text-green-300","aria-current","page",1,"block","py-2","px-3","dark:text-white","text-green-600","rounded-sm","hover:bg-gray-100","md:hover:bg-transparent","md:border-0","md:hover:text-green-700","md:p-0","md:dark:hover:text-green-500","dark:hover:bg-gray-700","md:dark:hover:bg-transparent",3,"routerLinkActiveOptions"],[1,"flex","justify-between","space-x-3"],["routerLink","/cart","routerLinkActive","text-green-900 dark:text-green-300",1,"relative","cursor-pointer","mr-16",3,"routerLinkActiveOptions"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-shopping-cart","dark:text-white","text-green-800"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"],["d","M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"],["d","M17 17h-11v-14h-2"],["d","M6 5l14 1l-1 7h-13"],[1,"absolute","dark:bg-green-600","bg-orange-400","shadow","shadow-text","size-6","rounded-full","flex","items-center","justify-center","-right-2","-bottom-5",2,"text-shadow","1px 1px 4px rgba(0, 0, 0, 0.3)"],[1,"flex","transition-transform","hover:scale-125","cursor-pointer","dark:text-white","text-green-800",3,"click"],["class","material-icons",4,"ngIf"],[1,"material-icons"]],template:function(o,d){o&1&&(e(0,"nav",0)(1,"div",1)(2,"button",2)(3,"span",3),l(4,"Open main menu"),n(),f(),e(5,"svg",4),i(6,"path",5),n()(),g(),e(7,"a",6),i(8,"img",7),e(9,"span",8),l(10,"NeuroDiv"),n()(),e(11,"div",9)(12,"ul",10)(13,"li")(14,"a",11),l(15,"Productos"),n()()()(),e(16,"div",12)(17,"button",13),f(),e(18,"svg",14),i(19,"path",15)(20,"path",16)(21,"path",17)(22,"path",18)(23,"path",19),n(),h(24,P,2,1,"span",20),n(),g(),e(25,"button",21),w("click",function(){return d.toggleTheme()}),h(26,z,2,0,"span",22)(27,G,2,0,"span",22),n()()()()),o&2&&(a(14),m("routerLinkActiveOptions",x(5,N)),a(3),m("routerLinkActiveOptions",x(6,N)),a(7),b(d.cartState.count()>0?24:-1),a(2),m("ngIf",!d.darkMode()),a(),m("ngIf",d.darkMode()))},dependencies:[T,H,L,M]})};var u=class t{title="neurodiversity-shop";static \u0275fac=function(o){return new(o||t)};static \u0275cmp=s({type:t,selectors:[["app-root"]],standalone:!0,features:[p],decls:4,vars:0,consts:[[1,"flex","flex-col","min-h-screen","bg-green-100","dark:bg-gray-800"]],template:function(o,d){o&1&&(e(0,"div",0),i(1,"app-header"),e(2,"main"),i(3,"router-outlet"),n()())},dependencies:[E,c]})};A(u,F).catch(t=>console.error(t));
