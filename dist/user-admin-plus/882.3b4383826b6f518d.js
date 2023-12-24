"use strict";(self.webpackChunkuser_admin_plus=self.webpackChunkuser_admin_plus||[]).push([[882],{4882:(h,d,t)=>{t.r(d),t.d(d,{RecoverPasswordModule:()=>x});var l=t(6895),n=t(433),f=t(2687),o=t(8256),i=t(2216),u=t(4736);function m(r,a){if(1&r&&(o.TgZ(0,"span",13),o._UZ(1,"fa-icon",14),o._uU(2," The new password field is required "),o.qZA()),2&r){const s=o.oxw();o.xp6(1),o.Q6J("icon",s.faTriangleExclamation)}}function w(r,a){if(1&r&&(o.TgZ(0,"span",13),o._UZ(1,"fa-icon",14),o._uU(2," The password confirmation field is required "),o.qZA()),2&r){const s=o.oxw();o.xp6(1),o.Q6J("icon",s.faTriangleExclamation)}}const p=function(r){return{"border-red-500":r}},c=function(r){return{"text-red-500":r}},g=function(){return["/auth"]},b=[{path:"",component:(()=>{class r{constructor(s){this._formBuilder=s,this.faTriangleExclamation=f.ik8,this.form=this.buildForm()}ngOnInit(){}buildForm(){return this._formBuilder.group({password:[null,[n.kI.required]],password_confirmation:[null,[n.kI.required]]})}recoverPassword(){}}return r.\u0275fac=function(s){return new(s||r)(o.Y36(n.qu))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-recover-password"]],decls:24,vars:17,consts:[[1,"w-full","flex","flex-col","space-y-5"],[1,"text-lg","font-light","text-gray-500","text-center"],[1,"font-bold"],[1,"w-full",3,"formGroup","submit"],[1,"relative","z-0","mb-6","w-full","group"],["type","password","name","password","id","password","formControlName","password","placeholder"," ",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-white","dark:border-gray-400","dark:focus:border-blue-500","focus:outline-none","focus:ring-0","focus:border-blue-400","peer",3,"ngClass"],["for","password",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:left-0","peer-focus:text-blue-400","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6",3,"ngClass"],["class","text-xs text-red-500",4,"ngIf"],["type","password","name","password_confirmation","id","password_confirmation","formControlName","password_confirmation","placeholder"," ",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-white","dark:border-gray-400","dark:focus:border-blue-500","focus:outline-none","focus:ring-0","focus:border-blue-400","peer",3,"ngClass"],["for","password_confirmation",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:left-0","peer-focus:text-blue-400","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6",3,"ngClass"],["type","submit",1,"w-full","text-white","bg-blue-500","hover:bg-blue-600","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded","text-sm","px-5","py-2.5","text-center","dark:bg-blue-400","dark:hover:bg-blue-500","dark:focus:ring-blue-600","shadow","hover:shadow-lg","uppercase"],[1,"text-gray-500","text-sm","font-base","text-center","w-full"],[1,"text-blue-500","hover:underline",3,"routerLink"],[1,"text-xs","text-red-500"],[3,"icon"]],template:function(s,e){1&s&&(o.TgZ(0,"div",0)(1,"span",1),o._uU(2," Choose a new password then click the "),o.TgZ(3,"span",2),o._uU(4,"Change"),o.qZA(),o._uU(5," button to recover your password "),o.qZA(),o.TgZ(6,"form",3),o.NdJ("submit",function(){return e.recoverPassword()}),o.TgZ(7,"div",4),o._UZ(8,"input",5),o.TgZ(9,"label",6),o._uU(10," New password "),o.qZA(),o.YNc(11,m,3,1,"span",7),o.qZA(),o.TgZ(12,"div",4),o._UZ(13,"input",8),o.TgZ(14,"label",9),o._uU(15," Password confirmation "),o.qZA(),o.YNc(16,w,3,1,"span",7),o.qZA(),o.TgZ(17,"button",10),o._uU(18," Change password "),o.qZA()(),o.TgZ(19,"p",11),o._uU(20," Back to login page? "),o._UZ(21,"br"),o.TgZ(22,"a",12),o._uU(23," Click here "),o.qZA()()()),2&s&&(o.xp6(6),o.Q6J("formGroup",e.form),o.xp6(2),o.Q6J("ngClass",o.VKq(8,p,!e.form.controls.password.pristine&&!e.form.controls.password.valid)),o.xp6(1),o.Q6J("ngClass",o.VKq(10,c,!e.form.controls.password.pristine&&!e.form.controls.password.valid)),o.xp6(2),o.Q6J("ngIf",!e.form.controls.password.pristine&&e.form.controls.password.hasError("required")),o.xp6(2),o.Q6J("ngClass",o.VKq(12,p,!e.form.controls.password_confirmation.pristine&&!e.form.controls.password_confirmation.valid)),o.xp6(1),o.Q6J("ngClass",o.VKq(14,c,!e.form.controls.password_confirmation.pristine&&!e.form.controls.password_confirmation.valid)),o.xp6(2),o.Q6J("ngIf",!e.form.controls.password_confirmation.pristine&&e.form.controls.password_confirmation.hasError("required")),o.xp6(6),o.Q6J("routerLink",o.DdM(16,g)))},dependencies:[l.mk,l.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,i.BN,u.yS]}),r})()}];let x=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[l.ez,n.u5,n.UX,i.uH,u.Bz.forChild(b)]}),r})()}}]);