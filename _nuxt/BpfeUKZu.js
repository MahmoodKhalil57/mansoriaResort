import{d as n,E as c,c as o,R as h,O as a,ar as p,Y as l,as as u,$ as d,p as f,at as m}from"./DGd0Q1Z6.js";const _=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,i=c(()=>{var e;if((e=t.src)!=null&&e.startsWith("/")&&!t.src.startsWith("//")){const s=u(d(f().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return m(s,t.src)}return t.src});return(e,s)=>(o(),h(p(a(l)),{src:a(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{_ as default};
