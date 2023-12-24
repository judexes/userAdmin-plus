"use strict";(self.webpackChunkuser_admin_plus=self.webpackChunkuser_admin_plus||[]).push([[168],{9168:(v,p,s)=>{s.r(p),s.d(p,{LoginModule:()=>Z});var i=s(6895),n=s(433),m=s(2687),l=s(8712),e=s(8256),u=s(4736),f=s(2216);function g(o,a){if(1&o&&(e.TgZ(0,"span",13),e._UZ(1,"fa-icon",14),e._uU(2," The email address field is required "),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("icon",t.faTriangleExclamation)}}function b(o,a){if(1&o&&(e.TgZ(0,"span",13),e._UZ(1,"fa-icon",14),e._uU(2," This field must be a valid email address "),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("icon",t.faTriangleExclamation)}}function x(o,a){if(1&o&&(e.TgZ(0,"span",13),e._UZ(1,"fa-icon",14),e._uU(2," The password field is required "),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("icon",t.faTriangleExclamation)}}const d=function(o){return{"border-red-500":o}},c=function(o){return{"text-red-500":o}},h=function(){return["/auth/forgot-password"]},w=function(){return["/auth/register"]},y=[{path:"",component:(()=>{class o{constructor(t,r){this._formBuilder=t,this._router=r,this.faTriangleExclamation=m.ik8,this.faApple=l.Av$,this.faGoogle=l.xYR,this.faFacebookF=l.AYu,this.faTwitter=l.mdU,this.faGithub=l.zhw,this.form=this.buildForm()}ngOnInit(){}buildForm(){return this._formBuilder.group({email:[null,[n.kI.required,n.kI.email]],password:[null,[n.kI.required]]})}login(){this._router.navigateByUrl("/")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(n.qu),e.Y36(u.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:28,vars:20,consts:[[1,"w-full","flex","flex-col","space-y-5"],[1,"text-lg","font-light","text-gray-500","text-center"],[1,"w-full",3,"formGroup","submit"],[1,"relative","z-0","mb-6","w-full","group"],["type","email","name","email","id","email","formControlName","email","placeholder"," ",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-white","dark:border-gray-400","dark:focus:border-blue-500","focus:outline-none","focus:ring-0","focus:border-blue-400","peer",3,"ngClass"],["for","email",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:left-0","peer-focus:text-blue-400","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6",3,"ngClass"],["class","text-xs text-red-500",4,"ngIf"],["type","password","name","password","id","password","formControlName","password","placeholder"," ",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-white","dark:border-gray-400","dark:focus:border-blue-500","focus:outline-none","focus:ring-0","focus:border-blue-400","peer",3,"ngClass"],["for","password",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:left-0","peer-focus:text-blue-400","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6",3,"ngClass"],["type","submit",1,"w-full","text-white","bg-blue-500","hover:bg-blue-600","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded","text-sm","px-5","py-2.5","text-center","dark:bg-blue-400","dark:hover:bg-blue-500","dark:focus:ring-blue-600","shadow","hover:shadow-lg","uppercase"],[1,"pb-5","text-gray-500","text-sm","font-base","text-center","w-full"],[1,"text-blue-500","hover:underline",3,"routerLink"],[1,"pt-10","text-gray-500","text-sm","font-base","text-center","w-full"],[1,"text-xs","text-red-500"],[3,"icon"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"span",1),e._uU(2," Use the following form to login into your user account "),e.qZA(),e.TgZ(3,"form",2),e.NdJ("submit",function(){return r.login()}),e.TgZ(4,"div",3),e._UZ(5,"input",4),e.TgZ(6,"label",5),e._uU(7," Email address "),e.qZA(),e.YNc(8,g,3,1,"span",6),e.YNc(9,b,3,1,"span",6),e.qZA(),e.TgZ(10,"div",3),e._UZ(11,"input",7),e.TgZ(12,"label",8),e._uU(13," Password "),e.qZA(),e.YNc(14,x,3,1,"span",6),e.qZA(),e.TgZ(15,"button",9),e._uU(16," Login "),e.qZA()(),e.TgZ(17,"p",10),e._uU(18," Did you forget your password? "),e._UZ(19,"br"),e._uU(20," No worries "),e.TgZ(21,"a",11),e._uU(22," Click here to recover it "),e.qZA()(),e._UZ(23,"hr"),e.TgZ(24,"p",12),e._uU(25," Don't have an account? "),e.TgZ(26,"a",11),e._uU(27," Register for free! "),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("formGroup",r.form),e.xp6(2),e.Q6J("ngClass",e.VKq(10,d,!r.form.controls.email.pristine&&!r.form.controls.email.valid)),e.xp6(1),e.Q6J("ngClass",e.VKq(12,c,!r.form.controls.email.pristine&&!r.form.controls.email.valid)),e.xp6(2),e.Q6J("ngIf",!r.form.controls.email.pristine&&r.form.controls.email.hasError("required")),e.xp6(1),e.Q6J("ngIf",!r.form.controls.email.pristine&&r.form.controls.email.hasError("email")),e.xp6(2),e.Q6J("ngClass",e.VKq(14,d,!r.form.controls.password.pristine&&!r.form.controls.password.valid)),e.xp6(1),e.Q6J("ngClass",e.VKq(16,c,!r.form.controls.password.pristine&&!r.form.controls.password.valid)),e.xp6(2),e.Q6J("ngIf",!r.form.controls.password.pristine&&r.form.controls.password.hasError("required")),e.xp6(7),e.Q6J("routerLink",e.DdM(18,h)),e.xp6(5),e.Q6J("routerLink",e.DdM(19,w)))},dependencies:[i.mk,i.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,f.BN,u.yS]}),o})()}];let Z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[i.ez,n.u5,n.UX,f.uH,u.Bz.forChild(y)]}),o})()}}]);