"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[745],{1745:(ct,A,s)=>{s.r(A),s.d(A,{MinuteModule:()=>rt});var I=s(4521),g=s(7579),r=s(2722),u=s(3075),m=s(8966),t=s(5e3),D=s(1135),p=s(4004),f=s(262),_=s(9646),w=s(2340),F=s(520);const h=w.N.base_url;let b=(()=>{class i{constructor(e){this._http=e,this._onlistenSubject=new g.x,this._minutes=new D.X(null)}get _minutes$(){return this._minutes.asObservable()}create(e){return this._http.post(`${h}/minute/create`,e,this._getHeaders).pipe((0,p.U)(n=>n.statusCode?n.statusCode:500),(0,f.K)(n=>(0,_.of)(n.status)))}disable(e){return this._http.delete(`${h}/minute/disable/${e}`,this._getHeaders).pipe((0,p.U)(n=>n.statusCode?n.statusCode:500),(0,f.K)(n=>(0,_.of)(n.status)))}enable(e){return this._http.put(`${h}/minute/enable/${e}`,null,this._getHeaders).pipe((0,p.U)(n=>n.statusCode?n.statusCode:500),(0,f.K)(n=>(0,_.of)(n.status)))}download(e){return this._http.get(`https://api.cocodecuilco.com/uploads/${e}`,{responseType:"blob"})}findMinutes(e){return this._http.post(`${h}/minute/find`,e,this._getHeaders).pipe((0,p.U)(n=>n.statusCode&&200==n.statusCode?(this._minutes.next(n.minutes),{page:n.page,total:n.total,pages:n.pages,minutes:n.minutes}):null),(0,f.K)(n=>(0,_.of)(null)))}listenDialog(){this._onlistenSubject.next()}get dialogStatus(){return this._onlistenSubject.asObservable()}get _getToken(){return localStorage.getItem("x-token")||""}get _getHeaders(){return{headers:{"x-token":this._getToken}}}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(F.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var x=s(1937),T=s(7322),S=s(7531),d=s(9808),v=s(7423);function N(i,l){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es requerido. "),t.qZA())}function L(i,l){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"La im\xe1gen debe ser en extensi\xf3n .jpg, .png o .jpeg"),t.qZA())}function Q(i,l){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"La im\xe1gen debe pesar menos o igual a 7mb"),t.qZA())}let Y=(()=>{class i{constructor(e,n,o,a,c){this.data=e,this._fb=n,this._dialogRef=o,this._service=a,this._snackbar=c,this.invalidSize=!1,this.invalidExtention=!1,this._unsubscribeAll=new g.x}ngOnInit(){this.initForm()}initForm(){this.form=this._fb.group({description:["",u.kI.required]})}uploadMinute(){if(this.form.invalid)return Object.values(this.form.controls).forEach(o=>o.markAsTouched());const{description:e}=this.form.getRawValue(),n=new FormData;n.append("description",e),n.append("evidence",this.selectedFile.fileRaw,this.selectedFile.filename),this._service.create(n).pipe((0,r.R)(this._unsubscribeAll)).subscribe(o=>{const a=200===o?"Se ha cargado el acta exit\xf3samente.":"Ha ocurrido un error al cargar el acta.";this.onClose(200===o),this._snackbar.open(a)})}onFileSelected(e){if(this.selectedFile=null,e.target.files&&e.target.files[0]){const o=["application/pdf"],a=e.target.files[0];if((null==a?void 0:a.size)>2e6)return void(this.invalidSize=!0);if(!o.includes(null==a?void 0:a.type))return void(this.invalidExtention=!0);const c=a.name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\xf1/g,"n").replace(/\s+/g,"_").replace(/[^\w.-]/g,"");this.selectedFile={fileRaw:a,filename:c}}}onClose(e=!1){this._dialogRef.close(e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.WI),t.Y36(u.qu),t.Y36(m.so),t.Y36(b),t.Y36(x.cw))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-dialog"]],decls:15,vars:6,consts:[["mat-dialog-title",""],["name","form",3,"formGroup","ngSubmit"],["matInput","","placeholder","Description del acta","formControlName","description"],[4,"ngIf"],[1,"mt-4"],["type","file","name","image","accept",".pdf",3,"change"],["mat-dialog-actions",""],["mat-button","","type","button",3,"click"],["mat-flat-button","","type","submit",3,"color","disabled"]],template:function(e,n){1&e&&(t.TgZ(0,"h2",0),t._uU(1,"Subir acta"),t.qZA(),t.TgZ(2,"form",1),t.NdJ("ngSubmit",function(){return n.uploadMinute()}),t.TgZ(3,"mat-form-field"),t._UZ(4,"input",2),t.YNc(5,N,2,0,"mat-error",3),t.qZA(),t.TgZ(6,"div",4)(7,"input",5),t.NdJ("change",function(a){return n.onFileSelected(a)}),t.qZA(),t.YNc(8,L,2,0,"mat-error",3),t.YNc(9,Q,2,0,"mat-error",3),t.qZA(),t.TgZ(10,"div",6)(11,"button",7),t.NdJ("click",function(){return n.onClose()}),t._uU(12,"Cancelar"),t.qZA(),t.TgZ(13,"button",8),t._uU(14," Crear "),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("formGroup",n.form),t.xp6(3),t.Q6J("ngIf",n.form.get("description").invalid&&n.form.get("description").touched),t.xp6(3),t.Q6J("ngIf",n.invalidExtention),t.xp6(1),t.Q6J("ngIf",n.invalidSize),t.xp6(4),t.Q6J("color","primary")("disabled",n.form.invalid||n.form.pristine||!n.selectedFile))},directives:[m.uh,u._Y,u.JL,u.sg,T.KE,S.Nt,u.Fj,u.JJ,u.u,d.O5,T.TO,m.H8,v.lW],styles:[".mat-form-field[_ngcontent-%COMP%]{display:grid!important;width:100%;margin-bottom:10px}.doc-file[_ngcontent-%COMP%]{color:#fff;text-align:center;font-weight:700;font-style:italic}"]}),i})();var U=s(7495),Z=s(5245),R=s(3844),C=s(6087),y=s(4847),k=s(1683),J=s(7238);function O(i,l){1&i&&(t.TgZ(0,"div"),t._uU(1,"Estado"),t.qZA())}function H(i,l){1&i&&t._UZ(0,"mat-icon",16),2&i&&t.Q6J("matTooltip","Inhabilitado")}function z(i,l){1&i&&t._UZ(0,"mat-icon",17),2&i&&t.Q6J("matTooltip","Habilitado")}function j(i,l){if(1&i&&(t.TgZ(0,"div",9),t.YNc(1,H,1,1,"mat-icon",14),t.YNc(2,z,1,1,"mat-icon",15),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",null==e?null:e.DeletedAt),t.xp6(1),t.Q6J("ngIf",!(null!=e&&e.DeletedAt))}}function $(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit;return t.oxw(3).enableMinute(o.Id)}),t._UZ(1,"mat-icon",18),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.Q6J("matTooltip","Habilitar acta")("disabled",null===(null==e?null:e.DeletedAt))}}function E(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit;return t.oxw(3).disableMinute(o.Id)}),t._UZ(1,"mat-icon",19),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.Q6J("matTooltip","Deshabilitar acta")("disabled",null!==(null==e?null:e.DeletedAt))}}function G(i,l){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",5)(2,"div",6)(3,"div",7)(4,"div",8),t._uU(5," NO THUMB "),t.qZA()()(),t.TgZ(6,"div",9),t._uU(7),t.qZA(),t.TgZ(8,"div",9),t._uU(9),t.qZA(),t.TgZ(10,"div",9),t._uU(11),t.qZA(),t.YNc(12,j,3,2,"div",10),t.TgZ(13,"div")(14,"button",11),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(3).downloadMinute(null==a?null:a.Filename)}),t._UZ(15,"mat-icon",12),t.qZA(),t.YNc(16,$,2,2,"button",13),t.YNc(17,E,2,2,"button",13),t.qZA()(),t.BQk()}if(2&i){const e=l.$implicit,n=t.oxw(3);t.xp6(7),t.hij(" ",null==e?null:e.Author," "),t.xp6(2),t.hij(" ",null==e?null:e.Description," "),t.xp6(2),t.hij(" ",n.convertDate(null==e?null:e.CreatedAt)," "),t.xp6(1),t.Q6J("ngIf",1===(null==n.user?null:n.user.role)),t.xp6(2),t.Q6J("matTooltip","Descargar acta")("disabled",null!==(null==e?null:e.DeletedAt)),t.xp6(2),t.Q6J("ngIf",1===(null==n.user?null:n.user.role)),t.xp6(1),t.Q6J("ngIf",1===(null==n.user?null:n.user.role))}}function B(i,l){if(1&i&&(t.ynx(0),t.YNc(1,G,18,8,"ng-container",4),t.BQk()),2&i){const e=l.ngIf,n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e)("ngForTrackBy",n.trackByFn)}}const K=function(i){return{"pointer-events-none":i}};function W(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"div",1)(2,"div",2),t._UZ(3,"div"),t.TgZ(4,"div"),t._uU(5,"Autor"),t.qZA(),t.TgZ(6,"div"),t._uU(7,"Titulo"),t.qZA(),t.TgZ(8,"div"),t._uU(9,"Fecha de subida"),t.qZA(),t.YNc(10,O,2,0,"div",0),t.TgZ(11,"div"),t._uU(12,"Opciones"),t.qZA()(),t.YNc(13,B,2,2,"ng-container",0),t.ALo(14,"async"),t.qZA(),t._UZ(15,"mat-paginator",3),t.BQk()),2&i){const e=t.oxw();t.xp6(10),t.Q6J("ngIf",1===(null==e.user?null:e.user.role)),t.xp6(3),t.Q6J("ngIf",t.lcZ(14,5,e.minutes$)),t.xp6(2),t.Q6J("length",e.count)("pageSizeOptions",e.pageSizeOptions)("ngClass",t.VKq(7,K,e.loading))}}function X(i,l){1&i&&(t.ynx(0),t.TgZ(1,"div",20),t._UZ(2,"mat-icon",21),t.TgZ(3,"div",22),t._uU(4," No se han encontrado actas. "),t.qZA()(),t.BQk()),2&i&&(t.xp6(2),t.Q6J("svgIcon","heroicons_outline:document"))}let P=(()=>{class i{constructor(e,n,o,a,c){this._user=e,this._minute=n,this._snackbar=o,this._changeDetectorRef=a,this._fuseConfirmationService=c,this.minutes=[],this.page=1,this.count=0,this.pages=0,this.pageSize=10,this.pageSizeOptions=[10,15,25],this._unsubscribeAll=new g.x}ngOnInit(){this._onGetSession(),this._onGetMinutes(),this._onListenDialog()}disableMinute(e){this._fuseConfirmationService.open({icon:{name:"heroicons_outline:eye-off"},title:"Deshabilitar acta",message:"\xbfEst\xe1 seguro en deshabilitar el acta?",actions:{confirm:{label:"Deshabilitar"},cancel:{label:"Cancelar"}}}).afterClosed().pipe((0,r.R)(this._unsubscribeAll)).subscribe(n=>{"confirmed"===n&&this._minute.disable(e).pipe((0,r.R)(this._unsubscribeAll)).subscribe(o=>{const a=200===o?"Se ha deshabilitado el acta exit\xf3samente":"Ha ocurrido un error al deshabilitar el acta.";this._onGetMinutes(),this._snackbar.open(a)})})}enableMinute(e){this._fuseConfirmationService.open({icon:{color:"accent",name:"heroicons_outline:eye"},title:"Habilitar acta",message:"\xbfEst\xe1 seguro en habilitar el acta?",actions:{confirm:{label:"Habilitar"},cancel:{label:"Cancelar"}}}).afterClosed().pipe((0,r.R)(this._unsubscribeAll)).subscribe(n=>{"confirmed"===n&&this._minute.enable(e).pipe((0,r.R)(this._unsubscribeAll)).subscribe(o=>{const a=200===o?"Se ha habilitado el acta exit\xf3samente.":"Ha ocurrido un error al habilitar el acta.";this._onGetMinutes(),this._snackbar.open(a)})})}downloadMinute(e){this._minute.download(e).pipe((0,r.R)(this._unsubscribeAll)).subscribe(n=>{const o=null==e?void 0:e.replace(/.*_/,""),a=new Blob([n],{type:"application/pdf"}),c=window.URL.createObjectURL(a),M=document.createElement("a");M.href=c,M.download=o,M.click(),window.URL.revokeObjectURL(c)})}convertDate(e){return(0,x.Mu)(e)}_onGetSession(){this._user.user$.pipe((0,r.R)(this._unsubscribeAll)).subscribe(e=>{this.user=e})}_onGetMinutes(e=1,n=10){try{this.loading=!0,this._minute.findMinutes({page:e,pageSize:n}).pipe((0,r.R)(this._unsubscribeAll)).subscribe(o=>{this.loading=!1,this.page=o.page,this.count=o.total,this.pages=o.pages,this.minutes=o.minutes,this._changeDetectorRef.markForCheck()}),this.minutes$=this._minute._minutes$}catch(o){console.log(o)}}_onListenDialog(){this._minute.dialogStatus.pipe((0,r.R)(this._unsubscribeAll)).subscribe(e=>{this._onGetMinutes(this.page,this.pageSize)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(U.K),t.Y36(b),t.Y36(x.cw),t.Y36(t.sBO),t.Y36(k.R))},i.\u0275cmp=t.Xpm({type:i,selectors:[["minute-list"]],viewQuery:function(e,n){if(1&e&&(t.Gf(C.NW,5),t.Gf(y.YE,5)),2&e){let o;t.iGM(o=t.CRH())&&(n._paginator=o.first),t.iGM(o=t.CRH())&&(n._sort=o.first)}},decls:2,vars:2,consts:[[4,"ngIf"],[1,"grid"],["matSort","","matSortDisableClear","",1,"inventory-grid-minute","z-10","sticky","top-0","grid","gap-4","py-4","px-6","md:px-8","shadow","text-md","font-semibold","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[1,"sm:absolute","sm:inset-x-0","sm:bottom-0","border-b","sm:border-t","sm:border-b-0","z-10","bg-gray-50","dark:bg-transparent",3,"length","pageSizeOptions","ngClass"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"inventory-grid-minute","grid","items-center","gap-4","py-3","px-6","md:px-8","border-b"],[1,"flex","items-center"],[1,"relative","flex","flex-0","items-center","justify-center","w-12","h-12","mr-6","rounded","overflow-hidden","border"],[1,"flex","items-center","justify-center","w-full","h-full","text-xs","font-semibold","leading-none","text-center","uppercase"],[1,"truncate"],["class","truncate",4,"ngIf"],["mat-stroked-button","",1,"min-w-10","min-h-7","h-7","px-2","leading-6","ml-2",3,"matTooltip","disabled","click"],["svgIcon","heroicons_outline:folder-download"],["mat-stroked-button","","class","min-w-10 min-h-7 h-7 px-2 leading-6 ml-2",3,"matTooltip","disabled","click",4,"ngIf"],["style","color: red","svgIcon","heroicons_outline:x-circle",3,"matTooltip",4,"ngIf"],["style","color: green","svgIcon","heroicons_outline:check-circle",3,"matTooltip",4,"ngIf"],["svgIcon","heroicons_outline:x-circle",2,"color","red",3,"matTooltip"],["svgIcon","heroicons_outline:check-circle",2,"color","green",3,"matTooltip"],["svgIcon","heroicons_outline:folder-add"],["svgIcon","heroicons_outline:folder-remove"],[1,"flex","flex-col","flex-auto","items-center","justify-center",2,"margin-top","17%"],[1,"icon-size-24",3,"svgIcon"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(e,n){1&e&&(t.YNc(0,W,16,9,"ng-container",0),t.YNc(1,X,5,1,"ng-container",0)),2&e&&(t.Q6J("ngIf",n.count),t.xp6(1),t.Q6J("ngIf",!n.count&&!n.loading))},directives:[d.O5,y.YE,d.sg,Z.Hw,J.gM,v.lW,C.NW,d.mk],pipes:[d.Ov],styles:[".inventory-grid-minute{grid-template-columns:3.5fr 1.5fr 1fr}@media (min-width: 600px){.inventory-grid-minute{grid-template-columns:.5fr 1.5fr 2fr 1fr .5fr 1fr}}@media (min-width: 960px){.inventory-grid-minute{grid-template-columns:.5fr 1.5fr 2fr 1fr .5fr 1fr}}@media (min-width: 1280px){.inventory-grid-minute{grid-template-columns:.5fr 1.5fr 2fr 1fr .5fr 1fr}}.minute-photo-list{height:100%;width:100%}\n"],encapsulation:2,data:{animation:R.L},changeDetection:0}),i})();function V(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){return t.CHM(e),t.oxw().openDialog()}),t._UZ(1,"mat-icon",8),t.TgZ(2,"span",9),t._uU(3,"Subir acta"),t.qZA()()}2&i&&(t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:plus"))}const q=[{path:"",component:(()=>{class i{constructor(e,n,o){this._user=e,this._dialog=n,this._minute=o,this._unsubscribeAll=new g.x}ngOnInit(){this._onGetSession()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}openDialog(){this._dialog.open(Y,{width:"500px"}).afterClosed().pipe((0,r.R)(this._unsubscribeAll)).subscribe(n=>this._minute.listenDialog())}_onGetSession(){this._user.user$.pipe((0,r.R)(this._unsubscribeAll)).subscribe(e=>{this.user=e})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(U.K),t.Y36(m.uw),t.Y36(b))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-minute"]],decls:9,vars:1,consts:[[1,"sm:absolute","sm:inset-0","flex","flex-col","flex-auto","min-w-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","py-8","px-6","md:px-8","border-b"],[1,"text-4xl","font-extrabold","tracking-tight"],[1,"flex","flex-shrink-0","items-center","mt-6","sm:mt-0","sm:ml-4"],["mat-flat-button","","class","ml-4 mr-4",3,"color","click",4,"ngIf"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","sm:mb-18","overflow-hidden","sm:overflow-y-auto"],["mat-flat-button","",1,"ml-4","mr-4",3,"color","click"],[3,"svgIcon"],[1,"ml-2","mr-1"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Actas"),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,V,4,2,"button",4),t.qZA()(),t.TgZ(6,"div",5)(7,"div",6),t._UZ(8,"minute-list"),t.qZA()()()),2&e&&(t.xp6(5),t.Q6J("ngIf",1===(null==n.user?null:n.user.role)))},directives:[d.O5,v.lW,Z.Hw,P],styles:[""]}),i})()}];let tt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[I.Bz.forChild(q)],I.Bz]}),i})();var et=s(4466),nt=s(7446),it=s(2181),ot=s(5899),st=s(508),lt=s(4102),at=s(2368);let rt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[b],imports:[[et.m,tt,v.ot,nt.p9,T.lN,Z.Ps,S.c,it.Tx,C.TU,ot.Cv,st.si,y.JX,lt.LD,at.rP,J.AV,m.Is]]}),i})()}}]);