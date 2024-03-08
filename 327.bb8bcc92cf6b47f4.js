"use strict";(self.webpackChunkFE_TEST_2024_Angular=self.webpackChunkFE_TEST_2024_Angular||[]).push([[327],{3327:(I,p,s)=>{s.r(p),s.d(p,{UpsertBlogPageModule:()=>B});var l=s(6814),c=s(7483),f=s(8645),d=s(2096),h=s(8180),v=s(9274),t=s(5879),a=s(9597),b=s(1863),g=s(4221),n=s(95);function T(i,C){if(1&i&&(t.TgZ(0,"b"),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" Edit ",e.titlePage,"")}}function U(i,C){if(1&i&&(t.TgZ(0,"b"),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" Create ",e.titlePage,"")}}let Z=(()=>{class i{set item(e){e.data?.id?this.formGroup.setValue({id:e.data?.id,title:e.data.title,content:e.data.content,comments_count:e.data.comments_count,image:e.data?.image?.url}):this.formGroup=this.fb.group({id:["",[]],title:["",n.kI.required],content:["",[n.kI.required]],comments_count:[""],image:["",n.kI.required]})}constructor(e){this.fb=e,this.titlePage="Blog Detail",this.emitActionSubmit=new t.vpe,this.formGroup=this.fb.group({id:["",[]],title:["",n.kI.required],content:["",[n.kI.required]],comments_count:[""],image:["",n.kI.required]})}ngOnChanges(e){}askSave(){this.emitActionSubmit.emit({action:this.formGroup.value.id?"edit":"create",value:{id:this.formGroup.value.id||null,blog:{title:this.formGroup.value.title,content:this.formGroup.value.title,image:this.formGroup.value.image}}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(n.qu))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-upsert-blog-tpml"]],inputs:{titlePage:"titlePage",item:"item"},outputs:{emitActionSubmit:"emitActionSubmit"},features:[t.TTD],decls:23,vars:4,consts:[[1,"header"],[1,"table-title"],[1,"row"],[4,"ngIf"],[3,"formGroup","submit"],[1,"form-group"],["for","exampleInputTitle"],["type","text","id","exampleInputTitle","formControlName","title","aria-describedby","title",1,"form-control"],["id","emailHelp",1,"form-text","text-muted"],["for","exampleInputContent"],["formControlName","content","id","exampleInputContent",1,"form-control"],["for","exampleInputURLImage"],["type","text","id","exampleInputURLImage","formControlName","image",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),t.YNc(4,T,2,1,"b",3),t.YNc(5,U,2,1,"b",3),t.qZA()()()(),t.TgZ(6,"form",4),t.NdJ("submit",function(){return r.askSave()}),t.TgZ(7,"div",5)(8,"label",6),t._uU(9,"Title"),t.qZA(),t._UZ(10,"input",7),t.TgZ(11,"small",8),t._uU(12,"Title of blog"),t.qZA()(),t.TgZ(13,"div",5)(14,"label",9),t._uU(15,"Content"),t.qZA(),t._UZ(16,"textarea",10),t.qZA(),t.TgZ(17,"div",5)(18,"label",11),t._uU(19,"URl Image"),t.qZA(),t._UZ(20,"input",12),t.qZA(),t.TgZ(21,"button",13),t._uU(22," Submit "),t.qZA()()),2&o&&(t.xp6(4),t.Q6J("ngIf",r.formGroup.value.id),t.xp6(1),t.Q6J("ngIf",!r.formGroup.value.id),t.xp6(1),t.Q6J("formGroup",r.formGroup),t.xp6(15),t.Q6J("disabled",!r.formGroup.valid))},dependencies:[l.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]})}return i})(),A=(()=>{class i{constructor(e,o,r,m,u){this.route=e,this.service=o,this.store=r,this.router=m,this.actionListener$=u,this.notifier=new f.x}ngOnDestroy(){this.item=(0,d.of)(null),this.notifier.unsubscribe()}ngOnInit(){this.route.paramMap.subscribe(e=>{e?.params?.id?this.service.fetchBlogDetailData(e?.params?.id):this.service.clearStore()}),this.item=this.service.getBlogDetailData(),this.actionListener$.pipe((0,c.l4)(v.hu),(0,h.q)(1)).subscribe(()=>{this.router.navigate(["blogs"])})}upsertBlog(e){const{value:r}=e;this.service.upsertBlog(r)}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(a.gz),t.Y36(b.G),t.Y36(g.yh),t.Y36(a.F0),t.Y36(g.UO))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-upsert-blog-page"]],decls:2,vars:3,consts:[[3,"item","emitActionSubmit"]],template:function(o,r){1&o&&(t.TgZ(0,"app-upsert-blog-tpml",0),t.NdJ("emitActionSubmit",function(u){return r.upsertBlog(u)}),t.ALo(1,"async"),t.qZA()),2&o&&t.Q6J("item",t.lcZ(1,1,r.item))},dependencies:[Z,l.Ov]})}return i})(),x=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[l.ez,n.UX]})}return i})(),B=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[l.ez,c.sQ,x,a.Bz.forChild([{path:"",component:A}])]})}return i})()}}]);