"use strict";(self.webpackChunkFE_TEST_2024_Angular=self.webpackChunkFE_TEST_2024_Angular||[]).push([[550],{390:(mt,E,l)=>{l.d(E,{N:()=>_});var r=l(5879);let _=(()=>{class f{static#t=this.\u0275fac=function(D){return new(D||f)};static#e=this.\u0275cmp=r.Xpm({type:f,selectors:[["app-loading"]],decls:2,vars:0,consts:[["id","pause",1,"d-flex","align-items-center","justify-content-center"],["id","spinner"]],template:function(D,B){1&D&&(r.TgZ(0,"div",0),r._UZ(1,"div",1),r.qZA())},styles:["#spinner[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_frames 1s infinite linear;background:transparent;border:1.75vw solid #FFF;border-radius:100%;border-top-color:#df691a;width:10vw;height:10vw;opacity:.6;padding:0;position:absolute;z-index:999}@keyframes _ngcontent-%COMP%_frames{0%{transform:rotate(0)}to{transform:rotate(359deg)}}#pause[_ngcontent-%COMP%]{display:block;background:rgba(0,0,0,.66) no-repeat 0 0;width:100%;height:100%;position:fixed;bottom:0;left:0;z-index:1000}"]})}return f})()},8734:(mt,E,l)=>{l.d(E,{I:()=>f});var r=l(6814),_=l(5879);let f=(()=>{class A{static#t=this.\u0275fac=function(B){return new(B||A)};static#e=this.\u0275mod=_.oAB({type:A});static#n=this.\u0275inj=_.cJS({imports:[r.ez]})}return A})()},95:(mt,E,l)=>{l.d(E,{Fj:()=>P,qu:()=>An,u:()=>ct,sg:()=>W,u5:()=>Dn,JJ:()=>Rt,JL:()=>Lt,On:()=>at,UX:()=>bn,kI:()=>xe,_Y:()=>ne});var r=l(5879),_=l(6814),f=l(9666),A=l(5592),z=l(7453),D=l(4829),B=l(4564),De=l(8251),be=l(7400),Me=l(2714),we=l(7398);let _t=(()=>{class e{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(r.Qsj),r.Y36(r.SBq))};static#e=this.\u0275dir=r.lG2({type:e})}return e})(),y=(()=>{class e extends _t{static#t=this.\u0275fac=function(){let t;return function(o){return(t||(t=r.n5z(e)))(o||e)}}();static#e=this.\u0275dir=r.lG2({type:e,features:[r.qOj]})}return e})();const h=new r.OlP("NgValueAccessor"),Oe={provide:h,useExisting:(0,r.Gpc)(()=>P),multi:!0},Ne=new r.OlP("CompositionEventMode");let P=(()=>{class e extends _t{constructor(t,i,o){super(t,i),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Se(){const e=(0,_.q)()?(0,_.q)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(r.Qsj),r.Y36(r.SBq),r.Y36(Ne,8))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){1&i&&r.NdJ("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[r._Bn([Oe]),r.qOj]})}return e})();function p(e){return null==e||("string"==typeof e||Array.isArray(e))&&0===e.length}function vt(e){return null!=e&&"number"==typeof e.length}const u=new r.OlP("NgValidators"),g=new r.OlP("NgAsyncValidators"),Ge=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class xe{static min(n){return function Ct(e){return n=>{if(p(n.value)||p(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}(n)}static max(n){return function Vt(e){return n=>{if(p(n.value)||p(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}(n)}static required(n){return function At(e){return p(e.value)?{required:!0}:null}(n)}static requiredTrue(n){return function Dt(e){return!0===e.value?null:{required:!0}}(n)}static email(n){return function bt(e){return p(e.value)||Ge.test(e.value)?null:{email:!0}}(n)}static minLength(n){return function Mt(e){return n=>p(n.value)||!vt(n.value)?null:n.value.length<e?{minlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static maxLength(n){return function Et(e){return n=>vt(n.value)&&n.value.length>e?{maxlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static pattern(n){return function wt(e){if(!e)return k;let n,t;return"string"==typeof e?(t="","^"!==e.charAt(0)&&(t+="^"),t+=e,"$"!==e.charAt(e.length-1)&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),i=>{if(p(i.value))return null;const o=i.value;return n.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}(n)}static nullValidator(n){return null}static compose(n){return xt(n)}static composeAsync(n){return Bt(n)}}function k(e){return null}function Ft(e){return null!=e}function Ot(e){return(0,r.QGY)(e)?(0,f.D)(e):e}function St(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function Nt(e,n){return n.map(t=>t(e))}function Gt(e){return e.map(n=>function Be(e){return!e.validate}(n)?n:t=>n.validate(t))}function xt(e){if(!e)return null;const n=e.filter(Ft);return 0==n.length?null:function(t){return St(Nt(t,n))}}function J(e){return null!=e?xt(Gt(e)):null}function Bt(e){if(!e)return null;const n=e.filter(Ft);return 0==n.length?null:function(t){return function Ee(...e){const n=(0,B.jO)(e),{args:t,keys:i}=(0,z.D)(e),o=new A.y(s=>{const{length:a}=t;if(!a)return void s.complete();const c=new Array(a);let V=a,M=a;for(let $=0;$<a;$++){let gt=!1;(0,D.Xf)(t[$]).subscribe((0,De.x)(s,Mn=>{gt||(gt=!0,M--),c[$]=Mn},()=>V--,void 0,()=>{(!V||!gt)&&(M||s.next(i?(0,Me.n)(i,c):c),s.complete())}))}});return n?o.pipe((0,be.Z)(n)):o}(Nt(t,n).map(Ot)).pipe((0,we.U)(St))}}function Z(e){return null!=e?Bt(Gt(e)):null}function Pt(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function kt(e){return e._rawValidators}function It(e){return e._rawAsyncValidators}function Q(e){return e?Array.isArray(e)?e:[e]:[]}function I(e,n){return Array.isArray(e)?e.includes(n):e===n}function Tt(e,n){const t=Q(n);return Q(e).forEach(o=>{I(t,o)||t.push(o)}),t}function Ht(e,n){return Q(n).filter(t=>!I(e,t))}class Ut{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=J(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Z(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return!!this.control&&this.control.hasError(n,t)}getError(n,t){return this.control?this.control.getError(n,t):null}}class d extends Ut{get formDirective(){return null}get path(){return null}}class m extends Ut{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class jt{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Rt=(()=>{class e extends jt{constructor(t){super(t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(m,2))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){2&i&&r.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[r.qOj]})}return e})(),Lt=(()=>{class e extends jt{constructor(t){super(t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(d,10))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,o){2&i&&r.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[r.qOj]})}return e})();const w="VALID",H="INVALID",b="PENDING",F="DISABLED";function tt(e){return(U(e)?e.validators:e)||null}function et(e,n){return(U(n)?n.asyncValidators:e)||null}function U(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}function qt(e,n,t){const i=e.controls;if(!(n?Object.keys(i):i).length)throw new r.vHH(1e3,"");if(!i[t])throw new r.vHH(1001,"")}function Wt(e,n,t){e._forEachChild((i,o)=>{if(void 0===t[o])throw new r.vHH(1002,"")})}class j{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===w}get invalid(){return this.status===H}get pending(){return this.status==b}get disabled(){return this.status===F}get enabled(){return this.status!==F}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Tt(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Tt(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Ht(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Ht(n,this._rawAsyncValidators))}hasValidator(n){return I(this._rawValidators,n)}hasAsyncValidator(n){return I(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=b,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=F,this.errors=null,this._forEachChild(i=>{i.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=w,this._forEachChild(i=>{i.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===b)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=b,this._hasOwnPendingAsyncValidator=!0;const t=Ot(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((i,o)=>i&&i._find(o),this)}getError(n,t){const i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new r.vpe,this.statusChanges=new r.vpe}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?H:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(b)?b:this._anyControlsHaveStatus(H)?H:w}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){U(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function Te(e){return Array.isArray(e)?J(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function He(e){return Array.isArray(e)?Z(e):e||null}(this._rawAsyncValidators)}}class O extends j{constructor(n,t,i){super(tt(t),et(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,i={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){Wt(this,0,n),Object.keys(n).forEach(i=>{qt(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(Object.keys(n).forEach(i=>{const o=this.controls[i];o&&o.patchValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((i,o)=>{i.reset(n?n[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,i)=>(n[i]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,i)=>!!i._syncPendingControls()||t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{const i=this.controls[t];i&&n(i,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const[t,i]of Object.entries(this.controls))if(this.contains(t)&&n(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,i,o)=>((i.enabled||this.disabled)&&(t[o]=i.value),t))}_reduceChildren(n,t){let i=n;return this._forEachChild((o,s)=>{i=t(i,o,s)}),i}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}}class $t extends O{}const v=new r.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>S}),S="always";function R(e,n){return[...n.path,e]}function N(e,n,t=S){nt(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||"always"===t)&&n.valueAccessor.setDisabledState?.(e.disabled),function je(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&zt(e,n)})}(e,n),function Le(e,n){const t=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}(e,n),function Re(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&zt(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function Ue(e,n){if(n.valueAccessor.setDisabledState){const t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}(e,n)}function L(e,n,t=!0){const i=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(i),n.valueAccessor.registerOnTouched(i)),q(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function Y(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function nt(e,n){const t=kt(e);null!==n.validator?e.setValidators(Pt(t,n.validator)):"function"==typeof t&&e.setValidators([t]);const i=It(e);null!==n.asyncValidator?e.setAsyncValidators(Pt(i,n.asyncValidator)):"function"==typeof i&&e.setAsyncValidators([i]);const o=()=>e.updateValueAndValidity();Y(n._rawValidators,o),Y(n._rawAsyncValidators,o)}function q(e,n){let t=!1;if(null!==e){if(null!==n.validator){const o=kt(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==n.validator);s.length!==o.length&&(t=!0,e.setValidators(s))}}if(null!==n.asyncValidator){const o=It(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==n.asyncValidator);s.length!==o.length&&(t=!0,e.setAsyncValidators(s))}}}const i=()=>{};return Y(n._rawValidators,i),Y(n._rawAsyncValidators,i),t}function zt(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function rt(e,n){if(!e.hasOwnProperty("model"))return!1;const t=e.model;return!!t.isFirstChange()||!Object.is(n,t.currentValue)}function ot(e,n){if(!n)return null;let t,i,o;return Array.isArray(n),n.forEach(s=>{s.constructor===P?t=s:function We(e){return Object.getPrototypeOf(e.constructor)===y}(s)?i=s:o=s}),o||i||t||null}function Qt(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function Xt(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const x=class extends j{constructor(n=null,t,i){super(tt(t),et(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),U(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=Xt(n)?n.value:n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(i=>i(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Qt(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Qt(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){Xt(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}},Qe={provide:m,useExisting:(0,r.Gpc)(()=>at)},ee=(()=>Promise.resolve())();let at=(()=>{class e extends m{constructor(t,i,o,s,a,c){super(),this._changeDetectorRef=a,this.callSetDisabledState=c,this.control=new x,this._registered=!1,this.name="",this.update=new r.vpe,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=ot(0,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),rt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){N(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){ee.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){const i=t.isDisabled.currentValue,o=0!==i&&(0,r.VuI)(i);ee.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?R(t,this._parent):[t]}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(d,9),r.Y36(u,10),r.Y36(g,10),r.Y36(h,10),r.Y36(r.sBO,8),r.Y36(v,8))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[r._Bn([Qe]),r.qOj,r.TTD]})}return e})(),ne=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}return e})(),re=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({})}return e})();const lt=new r.OlP("NgModelWithFormControlWarning"),rn={provide:d,useExisting:(0,r.Gpc)(()=>W)};let W=(()=>{class e extends d{constructor(t,i,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new r.vpe,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(q(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const i=this.form.get(t.path);return N(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){L(t.control||null,t,!1),function $e(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this.submitted=!0,function Zt(e,n){e._syncPendingControls(),n.forEach(t=>{const i=t.control;"submit"===i.updateOn&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const i=t.control,o=this.form.get(t.path);i!==o&&(L(i||null,t),(e=>e instanceof x)(o)&&(N(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const i=this.form.get(t.path);(function Jt(e,n){nt(e,n)})(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const i=this.form.get(t.path);i&&function Ye(e,n){return q(e,n)}(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){nt(this.form,this),this._oldForm&&q(this._oldForm,this)}_checkFormPresent(){}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(u,10),r.Y36(g,10),r.Y36(v,8))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["","formGroup",""]],hostBindings:function(i,o){1&i&&r.NdJ("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r._Bn([rn]),r.qOj,r.TTD]})}return e})();const an={provide:m,useExisting:(0,r.Gpc)(()=>ct)};let ct=(()=>{class e extends m{set isDisabled(t){}static#t=this._ngModelWarningSentOnce=!1;constructor(t,i,o,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new r.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=ot(0,s)}ngOnChanges(t){this._added||this._setUpControl(),rt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return R(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static#e=this.\u0275fac=function(i){return new(i||e)(r.Y36(d,13),r.Y36(u,10),r.Y36(g,10),r.Y36(h,10),r.Y36(lt,8))};static#n=this.\u0275dir=r.lG2({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[r._Bn([an]),r.qOj,r.TTD]})}return e})(),Ce=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({imports:[re]})}return e})();class Ve extends j{constructor(n,t,i){super(tt(t),et(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(n){return this.controls[this._adjustIndex(n)]}push(n,t={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(n,t,i={}){this.controls.splice(n,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,t={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(n,t,i={}){let o=this._adjustIndex(n);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),t&&(this.controls.splice(o,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,t={}){Wt(this,0,n),n.forEach((i,o)=>{qt(this,!1,o),this.at(o).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(n.forEach((i,o)=>{this.at(o)&&this.at(o).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n=[],t={}){this._forEachChild((i,o)=>{i.reset(n[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((t,i)=>!!i._syncPendingControls()||t,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((t,i)=>{n(t,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(t=>t.enabled&&n(t))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(const n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}}function Ae(e){return!!e&&(void 0!==e.asyncValidators||void 0!==e.validators||void 0!==e.updateOn)}let An=(()=>{class e{constructor(){this.useNonNullable=!1}get nonNullable(){const t=new e;return t.useNonNullable=!0,t}group(t,i=null){const o=this._reduceControls(t);let s={};return Ae(i)?s=i:null!==i&&(s.validators=i.validator,s.asyncValidators=i.asyncValidator),new O(o,s)}record(t,i=null){const o=this._reduceControls(t);return new $t(o,i)}control(t,i,o){let s={};return this.useNonNullable?(Ae(i)?s=i:(s.validators=i,s.asyncValidators=o),new x(t,{...s,nonNullable:!0})):new x(t,i,o)}array(t,i,o){const s=t.map(a=>this._createControl(a));return new Ve(s,i,o)}_reduceControls(t){const i={};return Object.keys(t).forEach(o=>{i[o]=this._createControl(t[o])}),i}_createControl(t){return t instanceof x||t instanceof j?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Dn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:v,useValue:t.callSetDisabledState??S}]}}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({imports:[Ce]})}return e})(),bn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:lt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:v,useValue:t.callSetDisabledState??S}]}}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({imports:[Ce]})}return e})()}}]);