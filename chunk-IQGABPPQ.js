import{c as l}from"./chunk-POLL2CVR.js";import{bootstrapApplication as be}from"@angular/platform-browser";import{provideRouter as Me}from"@angular/router";import{CommonModule as $t}from"@angular/common";import"@angular/core";import{RouterModule as Ft}from"@angular/router";import{IonicModule as Vt}from"@ionic/angular";var q=function(n){return n.SHELL_VERSION="shellVersion",n}(q||{}),D=function(n){return n.SHELL_DEVICE_GET_ID="shellDeviceGetId",n.SHELL_SCANNER_RESPONSE="shellScannerResponse",n.SHELL_SCANNER_START="shellScannerStart",n.SHELL_SCANNER_STOP="shellScannerStop",n.SHELL_SCANNER_ERROR="shellScannerError",n.SHELL_DEVICE_GET_ID_RESPONSE="shellDeviceGetIdResponse",n}(D||{}),W=function(n){return n.SHELL_LOADING_REMOTE_OK="shellLoadingRemoteOk",n}(W||{});var v=function(n){return n.TOKEN="token",n.APP_UUID="appUuid",n}(v||{}),M=function(n){return n.SYSTEM="[SYSTEM]",n}(M||{}),y=function(n){return n.UUID_EMAIL_DOMAIN="@uuid.app",n.UUID_QR_CODE="app-uuid-code:",n.GameCodes="GameCodes",n}(y||{}),Y=function(n){return n.LOTERIA_NACIONAL="ln",n}(Y||{}),w=function(n){return n.CANCEL="CANCEL",n.ACCEPT="ACCEPT",n}(w||{});import{TranslateModule as zt}from"@ngx-translate/core";import*as o from"@angular/core";import*as pt from"@angular/router";import"@angular/core";var S={api:{host:"https://api.lookttery.com/api"},web:{host:"https://lookttery.com"}};import{lastValueFrom as ot}from"rxjs";import*as b from"@angular/core";import*as rt from"@ionic/angular";import*as at from"@ngx-translate/core";import{HttpHeaders as Rt}from"@angular/common/http";import"@angular/core";import{catchError as jt}from"rxjs";import*as x from"@angular/core";import*as et from"@angular/common/http";import*as it from"@angular/router";import"@angular/core";import*as tt from"@angular/core";var k=(()=>{let i=class i{constructor(){}setItem(t,e){localStorage.setItem(t,e)}getItem(t){try{return JSON.parse(localStorage.getItem(t)||"")}catch{return localStorage.getItem(t)}}removeItem(t){localStorage.removeItem(t)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=tt.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var nt=function(n){return n.UNAUTHORIZED="Unauthorized",n}(nt||{}),C=(()=>{let i=class i{constructor(t,e,r){this.http=t,this.router=e,this.storageSrv=r}get(t,e){return e=this.addTokenToHeaders(e),this.http.get(t,e)}post(t,e,r){return r=this.addPostHeaders(r),r=this.addTokenToHeaders(r),this.http.post(t,e,r).pipe(this.handleErrorAndRedirect())}delete(t,e){return e=this.addTokenToHeaders(e),this.http.delete(t,e)}addTokenToHeaders(t){let r=[["Authorization",`Bearer ${this.storageSrv.getItem(v.TOKEN)?.token}`]];return this.addHeaders(r,t)}addPostHeaders(t){let e=[["Content-Type","application/json"]];return this.addHeaders(e,t)}addHeaders(t,e){return t.forEach(r=>{e=e||{},e.headers=e.headers||{},e.headers instanceof Rt?e.headers=e.headers.append(r[0],r[1]):typeof e.headers=="object"&&(e.headers[r[0]]=r[1])}),e||{}}handleErrorAndRedirect(){return jt((t,e)=>l(this,null,function*(){throw t.status===401&&t.statusText===nt.UNAUTHORIZED&&(this.storageSrv.removeItem(v.TOKEN),this.router.navigate(["/","main"])),t}))}};i.\u0275fac=function(e){return new(e||i)(x.\u0275\u0275inject(et.HttpClient),x.\u0275\u0275inject(it.Router),x.\u0275\u0275inject(k))},i.\u0275prov=x.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var O=(()=>{let i=class i{constructor(t,e,r){this.alertController=t,this.translateSrv=e,this.apiSrv=r,this.apiTicket=`${S.api.host}/ticket`}createNewTicket(t){return l(this,null,function*(){let e={data:{info:{code:t}}};try{let r=yield this.apiSrv.post(this.apiTicket,e);return yield ot(r)}catch(r){throw r}})}deleteTicketById(t,e=!1){return l(this,null,function*(){let r=w.ACCEPT;if(e&&(r=yield this.presentAlertConfirmDeleteTicket()),r===w.ACCEPT)try{let c=yield this.apiSrv.delete(`${this.apiTicket}/${t}`);return yield ot(c)}catch(c){throw c}})}presentAlertConfirmDeleteTicket(){return l(this,null,function*(){let t=yield this.alertController.create({header:this.translateSrv.instant("TICKETS.DELETE_TICKET"),subHeader:this.translateSrv.instant("GLOBAL.IRREVERSIBLE_ACTION"),message:this.translateSrv.instant("TICKETS.DELETE_TICKET_QUESTION"),buttons:[{text:this.translateSrv.instant("GLOBAL.CANCEL"),role:w.CANCEL,handler:()=>{}},{text:this.translateSrv.instant("GLOBAL.ACCEPT"),role:w.ACCEPT,handler:()=>{}}]});yield t.present();let{role:e}=yield t.onDidDismiss();return e})}};i.\u0275fac=function(e){return new(e||i)(b.\u0275\u0275inject(rt.AlertController),b.\u0275\u0275inject(at.TranslateService),b.\u0275\u0275inject(C))},i.\u0275prov=b.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();import"@angular/core";import{lastValueFrom as lt}from"rxjs";import{v4 as Ht}from"uuid";import*as P from"@angular/core";import"@angular/core";import{lastValueFrom as J}from"rxjs";import*as U from"@angular/core";var Nt=1e3*60*60*1.5,_=(()=>{let i=class i{constructor(t,e){this.apiSrv=t,this.storageSrv=e,this.apiUser=`${S.api.host}/user`}createUserByUuid(t){return l(this,null,function*(){let e={email:`${t}${y.UUID_EMAIL_DOMAIN}`,password:t,name:t};try{let r=this.apiSrv.post(this.apiUser,e);return yield J(r)}catch(r){throw r}})}loginByUuid(t){return l(this,null,function*(){return yield this.login(`${t}${y.UUID_EMAIL_DOMAIN}`,t)})}login(t,e){return l(this,null,function*(){let r={email:t,password:e};try{let c=this.apiSrv.post(`${this.apiUser}/login`,r),u=yield J(c);if(u.token){let Q={token:u.token,date:Date.now()};this.storageSrv.setItem(v.TOKEN,JSON.stringify(Q)),console.info(M.SYSTEM,`${u.token}`)}return u}catch(c){throw c}})}checkTokenExpiration(t){return l(this,null,function*(){let r=this.storageSrv.getItem(v.TOKEN)?.date||0;Date.now()-r>Nt&&(yield this.loginByUuid(t))})}getAllTicketsByUser(){return l(this,null,function*(){try{let t=this.apiSrv.get(`${this.apiUser}/ticket/all?limit=100&offset=0`);return yield J(t)}catch{return[]}})}};i.\u0275fac=function(e){return new(e||i)(U.\u0275\u0275inject(C),U.\u0275\u0275inject(k))},i.\u0275prov=U.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();import"@angular/core";import*as N from"@angular/core";var ct=(()=>{let i=class i{constructor(t){this.storageSrv=t}hasShell(){let t="0.0.0";return this.storageSrv.getItem(q.SHELL_VERSION)===t}};i.\u0275fac=function(e){return new(e||i)(N.\u0275\u0275inject(k))},i.\u0275prov=N.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var T=(()=>{let i=class i{constructor(t,e,r){this.apiSrv=t,this.userSrv=e,this.coreSrv=r,this.uuid="",this.apiUuid=`${S.api.host}/uuid`,window.addEventListener(D.SHELL_DEVICE_GET_ID_RESPONSE,c=>l(this,null,function*(){let u=localStorage.getItem(v.APP_UUID)||c.detail?.response||"";this.setAppUuid(u),yield this.onDeviceIdResponse()}))}init(){return l(this,null,function*(){yield this.requestDeviceId()})}getUuid(){return this.uuid}updateAppUuid(t){this.setAppUuid(t)}requestDeviceId(){return l(this,null,function*(){if(this.coreSrv.hasShell())window.dispatchEvent(new CustomEvent(D.SHELL_DEVICE_GET_ID));else{let t=localStorage.getItem(v.APP_UUID)||"";this.setAppUuid(t),yield this.onDeviceIdResponse()}})}setAppUuid(t){this.uuid=t,this.uuid||(this.uuid=Ht()),localStorage.setItem(v.APP_UUID,this.uuid)}onDeviceIdResponse(){return l(this,null,function*(){(yield this.getUuidData())?(yield this.userSrv.loginByUuid(this.uuid),console.info(M.SYSTEM,`UUID ${this.uuid} was registered.`)):yield this.registerUuid()})}getUuidData(){return l(this,null,function*(){try{let t=this.apiSrv.get(`${this.apiUuid}/${this.uuid}`);return yield lt(t)}catch{return null}})}registerUuid(){return l(this,null,function*(){let t=yield this.userSrv.createUserByUuid(this.uuid);if((yield this.userSrv.loginByUuid(this.uuid)).token){let r={uuid:this.uuid,user:t._id};try{let c=this.apiSrv.post(this.apiUuid,r),u=yield lt(c);this.uuid=u.uuid,console.info(M.SYSTEM,`UUID ${this.uuid} has been registered.`)}catch(c){console.error(c)}}})}};i.\u0275fac=function(e){return new(e||i)(P.\u0275\u0275inject(C),P.\u0275\u0275inject(_),P.\u0275\u0275inject(ct))},i.\u0275prov=P.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();import"@angular/core";import{lastValueFrom as mt}from"rxjs";import*as B from"@angular/core";var L=(()=>{let i=class i{constructor(t){this.apiSrv=t,this.apiGame=`${S.api.host}/game`}getAllTicketsPrizesByUser(){return l(this,null,function*(){try{let t=this.apiSrv.get(`${this.apiGame}/ticket/all?limit=100&offset=0`);return yield mt(t)}catch{return[]}})}getTicketPrizeByTicketId(t){return l(this,null,function*(){try{let e=this.apiSrv.get(`${this.apiGame}/ticket/${t}`);return yield mt(e)}catch{return null}})}};i.\u0275fac=function(e){return new(e||i)(B.\u0275\u0275inject(C))},i.\u0275prov=B.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();import*as f from"@ionic/angular";import*as H from"@ngx-translate/core";import*as ut from"@angular/common";var Gt=["ticketInfoModal"];function Kt(n,i){n&1&&(o.\u0275\u0275elementStart(0,"article"),o.\u0275\u0275text(1,"Camera permission denied."),o.\u0275\u0275elementEnd())}function Qt(n,i){n&1&&o.\u0275\u0275element(0,"ion-icon",4)}function qt(n,i){n&1&&(o.\u0275\u0275text(0),o.\u0275\u0275pipe(1,"translate")),n&2&&o.\u0275\u0275textInterpolate1(" ",o.\u0275\u0275pipeBind1(1,1,"GAMES.LN")," ")}function Wt(n,i){if(n&1&&(o.\u0275\u0275elementStart(0,"article",10)(1,"span",11),o.\u0275\u0275text(2),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementStart(3,"span",12),o.\u0275\u0275text(4),o.\u0275\u0275pipe(5,"currency"),o.\u0275\u0275elementEnd()()),n&2){let m=o.\u0275\u0275nextContext(2);o.\u0275\u0275advance(2),o.\u0275\u0275textInterpolate(m.ticketData==null||m.ticketData.prize==null?null:m.ticketData.prize.number),o.\u0275\u0275advance(2),o.\u0275\u0275textInterpolate(o.\u0275\u0275pipeBind2(5,2,m.ticketData==null||m.ticketData.prize==null?null:m.ticketData.prize.quantity,"EUR"))}}function Yt(n,i){n&1&&(o.\u0275\u0275elementStart(0,"p"),o.\u0275\u0275text(1,"Game not available"),o.\u0275\u0275elementEnd())}function Jt(n,i){if(n&1){let m=o.\u0275\u0275getCurrentView();o.\u0275\u0275elementStart(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),o.\u0275\u0275template(3,qt,2,3),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementStart(4,"ion-buttons",5)(5,"ion-icon",6),o.\u0275\u0275listener("click",function(){o.\u0275\u0275restoreView(m);let e=o.\u0275\u0275nextContext();return o.\u0275\u0275resetView(e.closeTicketInfoModal())}),o.\u0275\u0275elementEnd()()()(),o.\u0275\u0275elementStart(6,"ion-content",7)(7,"section",8),o.\u0275\u0275template(8,Wt,6,5,"article",9)(9,Yt,2,0),o.\u0275\u0275elementEnd()()}if(n&2){let m=o.\u0275\u0275nextContext();o.\u0275\u0275advance(3),o.\u0275\u0275conditional(3,(m.ticketData==null||m.ticketData.ticket==null?null:m.ticketData.ticket.code)===m.gameCodes.LOTERIA_NACIONAL?3:-1),o.\u0275\u0275advance(5),o.\u0275\u0275conditional(8,(m.ticketData==null||m.ticketData.ticket==null?null:m.ticketData.ticket.code)===m.gameCodes.LOTERIA_NACIONAL?8:9)}}var ht=(()=>{let i=class i{handleShellScannerResponse(t){return l(this,null,function*(){yield this.onScannerResponse(t.detail?.response||{})})}handleShellScannerError(t){return l(this,null,function*(){yield this.onScannerError(t.detail?.response||{})})}constructor(t,e,r,c,u,Q,Ut){this.router=t,this.ticketSrv=e,this.uuidSrv=r,this.userSrv=c,this.gameSrv=u,this.loadingCtrl=Q,this.translateSrv=Ut,this.gameCodes=Y,this.hasShell=!1,this.responses=[],this.hasPermission=!0,this.ticketData=null,this.isTicketInfoModalOpen=!1}ngOnInit(){}ionViewDidEnter(){return l(this,null,function*(){yield this.startScan()})}ionViewWillLeave(){this.stopScan()}startScan(t){return l(this,null,function*(){this.hasPermission=!0,window.dispatchEvent(new CustomEvent(D.SHELL_SCANNER_START))})}stopScan(t){window.dispatchEvent(new CustomEvent(D.SHELL_SCANNER_STOP))}permissionResponse(t){this.hasPermission=t||!1}closeTicketInfoModal(){return l(this,null,function*(){yield this.ticketInfoModal.dismiss()})}onScannerResponse(t){return l(this,null,function*(){if(!this.isTicketInfoModalOpen){if(this.checkUuidQRCode(t.content||"")){let e=t.content.toString().replace(y.UUID_QR_CODE,"");this.uuidSrv.updateAppUuid(e),yield this.userSrv.loginByUuid(e)}else if(t&&!t.closed){this.showLoading();let e="";try{e=(yield this.ticketSrv.createNewTicket(t.content||""))._id||""}catch(c){e=c.error?.ticket?._id||""}this.ticketData=yield this.gameSrv.getTicketPrizeByTicketId(e),this.dismissLoading(),yield this.ticketInfoModal.present();let r=yield this.ticketInfoModal.onWillDismiss();this.startScan()}}})}onScannerError(t){return l(this,null,function*(){console.log(t),this.hasPermission=!1})}checkUuidQRCode(t){return!!t.toString().includes(y.UUID_QR_CODE)}showLoading(){return l(this,null,function*(){(yield this.loadingCtrl.create({message:this.translateSrv.instant("TICKETS.LOADING_TICKETS")})).present()})}dismissLoading(){return l(this,null,function*(){yield this.loadingCtrl.dismiss()})}};i.\u0275fac=function(e){return new(e||i)(o.\u0275\u0275directiveInject(pt.Router),o.\u0275\u0275directiveInject(O),o.\u0275\u0275directiveInject(T),o.\u0275\u0275directiveInject(_),o.\u0275\u0275directiveInject(L),o.\u0275\u0275directiveInject(f.LoadingController),o.\u0275\u0275directiveInject(H.TranslateService))},i.\u0275cmp=o.\u0275\u0275defineComponent({type:i,selectors:[["app-scan"]],viewQuery:function(e,r){if(e&1&&o.\u0275\u0275viewQuery(Gt,5),e&2){let c;o.\u0275\u0275queryRefresh(c=o.\u0275\u0275loadQuery())&&(r.ticketInfoModal=c.first)}},hostBindings:function(e,r){e&1&&o.\u0275\u0275listener("shellScannerResponse",function(u){return r.handleShellScannerResponse(u)},!1,o.\u0275\u0275resolveWindow)("shellScannerError",function(u){return r.handleShellScannerError(u)},!1,o.\u0275\u0275resolveWindow)},standalone:!0,features:[o.\u0275\u0275StandaloneFeature],decls:7,vars:1,consts:[[1,"scan"],[1,"scan-screen"],[3,"ionModalWillPresent","ionModalWillDismiss"],["ticketInfoModal",""],["name","add-outline",1,"scan-screen-pointer"],["slot","end"],["name","close","size","large",3,"click"],[1,"ion-padding"],[1,"ticket"],["class","ticket-ln"],[1,"ticket-ln"],[1,"ticket-ln-number"],[1,"ticket-ln-prize"]],template:function(e,r){e&1&&(o.\u0275\u0275elementStart(0,"section",0)(1,"section",1),o.\u0275\u0275template(2,Kt,2,0,"article")(3,Qt,1,0),o.\u0275\u0275elementEnd()(),o.\u0275\u0275elementStart(4,"ion-modal",2,3),o.\u0275\u0275listener("ionModalWillPresent",function(){return r.isTicketInfoModalOpen=!0})("ionModalWillDismiss",function(){return r.isTicketInfoModalOpen=!1}),o.\u0275\u0275template(6,Jt,10,2,"ng-template"),o.\u0275\u0275elementEnd()),e&2&&(o.\u0275\u0275advance(2),o.\u0275\u0275conditional(2,r.hasPermission?3:2))},dependencies:[$t,ut.CurrencyPipe,Ft,Vt,f.IonButtons,f.IonContent,f.IonHeader,f.IonIcon,f.IonTitle,f.IonToolbar,f.IonModal,zt,H.TranslatePipe],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .scan[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100vh;margin:0}[_nghost-%COMP%]   .scan-screen[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%}[_nghost-%COMP%]   .scan-screen-pointer[_ngcontent-%COMP%]{width:40px;color:#fff;height:40px}ion-modal[_ngcontent-%COMP%]{--height: 200px;--border-radius: 8px;--box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)}ion-modal[_ngcontent-%COMP%]   .ticket-ln[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}ion-modal[_ngcontent-%COMP%]   .ticket-ln-number[_ngcontent-%COMP%]{font-size:40px;font-weight:700;letter-spacing:17px;margin:20px 20px 20px 37px}ion-modal[_ngcontent-%COMP%]   .ticket-ln-prize[_ngcontent-%COMP%]{font-size:20px;font-weight:700}ion-modal[_ngcontent-%COMP%]::part(content){margin:20px}"],changeDetection:0});let n=i;return n})();import{CommonModule as Zt}from"@angular/common";import"@angular/core";import{RouterModule as Xt}from"@angular/router";import{IonicModule as te}from"@ionic/angular";import{TranslateModule as ee}from"@ngx-translate/core";import*as s from"@angular/core";import*as ft from"@angular/router";import*as E from"@ionic/angular";import*as gt from"@ngx-translate/core";var ie=["mainTabs"],St=(()=>{let i=class i{constructor(t){this.router=t}ngOnInit(){}ngAfterViewInit(){setTimeout(()=>{this.mainTabs.select("games")},500)}};i.\u0275fac=function(e){return new(e||i)(s.\u0275\u0275directiveInject(ft.Router))},i.\u0275cmp=s.\u0275\u0275defineComponent({type:i,selectors:[["app-main"]],viewQuery:function(e,r){if(e&1&&s.\u0275\u0275viewQuery(ie,5),e&2){let c;s.\u0275\u0275queryRefresh(c=s.\u0275\u0275loadQuery())&&(r.mainTabs=c.first)}},standalone:!0,features:[s.\u0275\u0275StandaloneFeature],decls:23,vars:12,consts:[["mainTabs",""],["slot","bottom"],["tab","games"],["name","grid-outline"],["tab","scan"],["name","scan-outline"],["tab","tickets"],["name","wallet-outline"],["tab","menu"],["name","cog-outline"]],template:function(e,r){e&1&&(s.\u0275\u0275elementStart(0,"ion-tabs",null,0)(2,"ion-tab-bar",1)(3,"ion-tab-button",2),s.\u0275\u0275element(4,"ion-icon",3),s.\u0275\u0275elementStart(5,"span"),s.\u0275\u0275text(6),s.\u0275\u0275pipe(7,"translate"),s.\u0275\u0275elementEnd()(),s.\u0275\u0275elementStart(8,"ion-tab-button",4),s.\u0275\u0275element(9,"ion-icon",5),s.\u0275\u0275elementStart(10,"span"),s.\u0275\u0275text(11),s.\u0275\u0275pipe(12,"translate"),s.\u0275\u0275elementEnd()(),s.\u0275\u0275elementStart(13,"ion-tab-button",6),s.\u0275\u0275element(14,"ion-icon",7),s.\u0275\u0275elementStart(15,"span"),s.\u0275\u0275text(16),s.\u0275\u0275pipe(17,"translate"),s.\u0275\u0275elementEnd()(),s.\u0275\u0275elementStart(18,"ion-tab-button",8),s.\u0275\u0275element(19,"ion-icon",9),s.\u0275\u0275elementStart(20,"span"),s.\u0275\u0275text(21),s.\u0275\u0275pipe(22,"translate"),s.\u0275\u0275elementEnd()()()()),e&2&&(s.\u0275\u0275advance(6),s.\u0275\u0275textInterpolate(s.\u0275\u0275pipeBind1(7,4,"MAIN.TABS.GAMES")),s.\u0275\u0275advance(5),s.\u0275\u0275textInterpolate(s.\u0275\u0275pipeBind1(12,6,"MAIN.TABS.SCAN_NOW")),s.\u0275\u0275advance(5),s.\u0275\u0275textInterpolate(s.\u0275\u0275pipeBind1(17,8,"MAIN.TABS.TICKETS")),s.\u0275\u0275advance(5),s.\u0275\u0275textInterpolate(s.\u0275\u0275pipeBind1(22,10,"MAIN.TABS.MENU")))},dependencies:[Zt,Xt,te,E.IonIcon,E.IonTabBar,E.IonTabButton,E.IonTabs,ee,gt.TranslatePipe],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]{padding-bottom:var(--ion-statusbar-padding, 0)}"],changeDetection:0});let n=i;return n})();import{CommonModule as oe}from"@angular/common";import{HttpClient as re,HttpClientModule as ae}from"@angular/common/http";import"@angular/core";import{NavigationEnd as se,RouterModule as ce}from"@angular/router";import{filter as le}from"rxjs";import{IonicModule as me}from"@ionic/angular";import{TranslateLoader as de,TranslateModule as pe}from"@ngx-translate/core";import"@angular/core";import{catchError as ne}from"rxjs/operators";import*as $ from"@angular/core";import*as vt from"@angular/common/http";var Ct=(()=>{let i=class i{constructor(t){this.httpClient=t}getTranslation(t){let e=S.web.host+`/assets/i18n/${t}.json`;return this.httpClient.get(e).pipe(ne(r=>(console.log("Error loading translation file",r),this.httpClient.get(S.web.host+"/assets/i18n/es.json"))))}};i.\u0275fac=function(e){return new(e||i)($.\u0275\u0275inject(vt.HttpClient))},i.\u0275prov=$.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac});let n=i;return n})();import*as g from"@angular/core";import*as It from"@ngx-translate/core";import*as F from"@angular/router";var yt=(()=>{let i=class i{constructor(t,e,r,c,u){this.translateSrv=t,this.uuidSrv=e,this.userSrv=r,this.storageSrv=c,this.router=u,this.translateSrv.setDefaultLang("en"),this.translateSrv.use("en")}ngOnInit(){this.setNoErrorLoadingRemote(),this.importStyles(),this.importScripts(),this.uuidSrv.init(),this.router.events.pipe(le(t=>t instanceof se)).subscribe(t=>{let e=this.uuidSrv.getUuid();e?this.userSrv.checkTokenExpiration(e):this.uuidSrv.init()})}setNoErrorLoadingRemote(){this.storageSrv.setItem(W.SHELL_LOADING_REMOTE_OK,!0)}importScripts(){let t=["https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js","https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"],e=document.head;t.forEach(r=>{let c=document.createElement("script");c.type="module",c.src=r,c.async=!1,document.head.appendChild(c),e.insertBefore(c,e.firstElementChild)})}importStyles(){let t=["https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"],e=document.head;t.forEach(r=>{let c=document.createElement("link");c.rel="stylesheet",c.href=r,e.insertBefore(c,e.firstElementChild)})}};i.\u0275fac=function(e){return new(e||i)(g.\u0275\u0275directiveInject(It.TranslateService),g.\u0275\u0275directiveInject(T),g.\u0275\u0275directiveInject(_),g.\u0275\u0275directiveInject(k),g.\u0275\u0275directiveInject(F.Router))},i.\u0275cmp=g.\u0275\u0275defineComponent({type:i,selectors:[["app-remote-app"]],standalone:!0,features:[g.\u0275\u0275ProvidersFeature([C,T,_,O,L,pe.forRoot({loader:{provide:de,useClass:Ct,deps:[re]}}).providers]),g.\u0275\u0275StandaloneFeature],decls:1,vars:0,template:function(e,r){e&1&&g.\u0275\u0275element(0,"router-outlet")},dependencies:[oe,ce,F.RouterOutlet,me,ae],styles:[`:host{display:block}body{--ion-color-primary: #3880ff;--ion-color-primary-rgb: 56,128,255;--ion-color-primary-contrast: #000000;--ion-color-primary-contrast-rgb: 0,0,0;--ion-color-primary-shade: #3171e0;--ion-color-primary-tint: #4c8dff;--ion-color-secondary: #3dc2ff;--ion-color-secondary-rgb: 61,194,255;--ion-color-secondary-contrast: #000000;--ion-color-secondary-contrast-rgb: 0,0,0;--ion-color-secondary-shade: #36abe0;--ion-color-secondary-tint: #50c8ff;--ion-color-tertiary: #5260ff;--ion-color-tertiary-rgb: 82,96,255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255,255,255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45,211,111;--ion-color-success-contrast: #000000;--ion-color-success-contrast-rgb: 0,0,0;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255,196,9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0,0,0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235,68,90;--ion-color-danger-contrast: #000000;--ion-color-danger-contrast-rgb: 0,0,0;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244,245,248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0,0,0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146,148,156;--ion-color-medium-contrast: #000000;--ion-color-medium-contrast-rgb: 0,0,0;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-dark: #222428;--ion-color-dark-rgb: 34,36,40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255,255,255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e}
`],encapsulation:2,changeDetection:0});let n=i;return n})();import{CommonModule as ge}from"@angular/common";import"@angular/core";import{RouterModule as Se}from"@angular/router";import{IonicModule as ve}from"@ionic/angular";import{CommonModule as ue}from"@angular/common";import"@angular/core";import{IonicModule as he}from"@ionic/angular";import*as p from"@angular/core";import*as kt from"@angular/router";import*as _t from"@ngx-translate/core";import*as I from"@ionic/angular";var V=(()=>{let i=class i{constructor(t,e,r){this.router=t,this.cdr=e,this.translateSrv=r,this.showMenu=!0}changeLanguage(t){this.translateSrv.use(t),this.cdr.detectChanges()}openMenu(){this.router.navigate(["/main/","menu"])}};i.\u0275fac=function(e){return new(e||i)(p.\u0275\u0275directiveInject(kt.Router),p.\u0275\u0275directiveInject(p.ChangeDetectorRef),p.\u0275\u0275directiveInject(_t.TranslateService))},i.\u0275cmp=p.\u0275\u0275defineComponent({type:i,selectors:[["app-header"]],inputs:{showMenu:"showMenu"},standalone:!0,features:[p.\u0275\u0275StandaloneFeature],decls:9,vars:0,consts:[["color","primary"],["slot","end"],[3,"click"]],template:function(e,r){e&1&&(p.\u0275\u0275elementStart(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),p.\u0275\u0275text(3,"Lookttery"),p.\u0275\u0275elementEnd(),p.\u0275\u0275elementStart(4,"ion-buttons",1)(5,"ion-button",2),p.\u0275\u0275listener("click",function(){return r.changeLanguage("en")}),p.\u0275\u0275text(6,"EN"),p.\u0275\u0275elementEnd(),p.\u0275\u0275elementStart(7,"ion-button",2),p.\u0275\u0275listener("click",function(){return r.changeLanguage("es")}),p.\u0275\u0275text(8,"ES"),p.\u0275\u0275elementEnd()()()())},dependencies:[ue,he,I.IonButton,I.IonButtons,I.IonHeader,I.IonTitle,I.IonToolbar],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--padding-top: calc(var(--ion-statusbar-padding, 0) + var(--ion-statusbar-padding, 0))}"],changeDetection:0});let n=i;return n})();import"@angular/core";import{BehaviorSubject as fe}from"rxjs";import*as z from"@angular/core";import*as Tt from"@ngx-translate/core";var Et=(()=>{let i=class i{constructor(t){this.translateService=t}transform(t){let e=new Date(t),r={weekday:"long",year:"numeric",month:"long",day:"numeric"},c=e.toLocaleDateString(this.translateService.currentLang,r),u=new fe(c);return this.translateService.onLangChange.subscribe(()=>(c=e.toLocaleDateString(this.translateService.currentLang,r),u.next(c))),u}};i.\u0275fac=function(e){return new(e||i)(z.\u0275\u0275directiveInject(Tt.TranslateService,16))},i.\u0275pipe=z.\u0275\u0275definePipe({name:"date",type:i,pure:!0,standalone:!0});let n=i;return n})();import*as a from"@angular/core";import*as h from"@ionic/angular";import*as Dt from"@ngx-translate/core";import*as G from"@angular/common";var Ce=(n,i)=>i.ticket._id;function Ie(n,i){if(n&1){let m=a.\u0275\u0275getCurrentView();a.\u0275\u0275elementStart(0,"ion-item-sliding")(1,"ion-item",2)(2,"ion-label",3)(3,"ion-note",4),a.\u0275\u0275text(4),a.\u0275\u0275pipe(5,"async"),a.\u0275\u0275pipe(6,"date"),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementStart(7,"section",5),a.\u0275\u0275element(8,"ion-img",6),a.\u0275\u0275elementStart(9,"strong",7),a.\u0275\u0275text(10),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementStart(11,"span",8),a.\u0275\u0275text(12),a.\u0275\u0275pipe(13,"currency"),a.\u0275\u0275elementEnd()()()(),a.\u0275\u0275elementStart(14,"ion-item-options",9)(15,"ion-item-option",10),a.\u0275\u0275listener("click",function(){let r=a.\u0275\u0275restoreView(m).$implicit,c=a.\u0275\u0275nextContext();return a.\u0275\u0275resetView(c.deleteTicketById(r.ticket._id||""))}),a.\u0275\u0275element(16,"ion-icon",11),a.\u0275\u0275elementEnd()()()}if(n&2){let m=i.$implicit,t=a.\u0275\u0275nextContext();a.\u0275\u0275advance(1),a.\u0275\u0275property("button",!0),a.\u0275\u0275advance(3),a.\u0275\u0275textInterpolate(a.\u0275\u0275pipeBind1(5,5,a.\u0275\u0275pipeBind1(6,7,m.ticket.date))),a.\u0275\u0275advance(4),a.\u0275\u0275property("src",t.environment.web.host+"/assets/logos/games/"+m.ticket.code+".png"),a.\u0275\u0275advance(2),a.\u0275\u0275textInterpolate(m.ticket.data.info.number),a.\u0275\u0275advance(2),a.\u0275\u0275textInterpolate(a.\u0275\u0275pipeBind2(13,9,m.prize.quantity/100,"EUR"))}}function ye(n,i){n&1&&(a.\u0275\u0275elementStart(0,"p"),a.\u0275\u0275text(1,"Empty list of tickets"),a.\u0275\u0275elementEnd())}var Mt=(()=>{let i=class i{constructor(t,e,r,c,u){this.cdr=t,this.ticketSrv=e,this.gameSrv=r,this.loadingCtrl=c,this.translateSrv=u,this.tickets=[],this.environment=S}ngOnInit(){}ionViewDidEnter(){return l(this,null,function*(){yield this.getUserTickets(),this.sortTicketsByDate()})}sortTicketsByDate(){this.tickets.sort((t,e)=>{let r=new Date(t.ticket.date);return new Date(e.ticket.date).getTime()-r.getTime()}),this.cdr.detectChanges()}deleteTicketById(t){return l(this,null,function*(){yield this.ticketSrv.deleteTicketById(t,!0),yield this.getUserTickets()})}getUserTickets(){return l(this,null,function*(){yield this.showLoading();try{this.tickets=yield this.gameSrv.getAllTicketsPrizesByUser(),this.cdr.detectChanges(),console.log(this.tickets)}catch(t){console.log(t)}yield this.dismissLoading()})}showLoading(){return l(this,null,function*(){(yield this.loadingCtrl.create({message:this.translateSrv.instant("TICKETS.LOADING_TICKETS")})).present()})}dismissLoading(){return l(this,null,function*(){yield this.loadingCtrl.dismiss()})}};i.\u0275fac=function(e){return new(e||i)(a.\u0275\u0275directiveInject(a.ChangeDetectorRef),a.\u0275\u0275directiveInject(O),a.\u0275\u0275directiveInject(L),a.\u0275\u0275directiveInject(h.LoadingController),a.\u0275\u0275directiveInject(Dt.TranslateService))},i.\u0275cmp=a.\u0275\u0275defineComponent({type:i,selectors:[["app-tickets"]],standalone:!0,features:[a.\u0275\u0275StandaloneFeature],decls:6,vars:1,consts:[["padding","","color","light"],[1,"ticket-list"],[1,"ticket-item",3,"button"],[1,"ticket-item-text"],["color","medium"],[1,"game-item-data"],["aria-hidden","true","slot","start","alt","",1,"game-item-img",3,"src"],[1,"game-item-data-number"],[1,"game-item-prize"],["slot","end"],["color","danger","expandable","true",3,"click"],["slot","icon-only","name","trash"]],template:function(e,r){e&1&&(a.\u0275\u0275element(0,"app-header"),a.\u0275\u0275elementStart(1,"ion-content",0)(2,"ion-list",1),a.\u0275\u0275repeaterCreate(3,Ie,17,12,"ion-item-sliding",null,Ce,!1,ye,2,0),a.\u0275\u0275elementEnd()()),e&2&&(a.\u0275\u0275advance(3),a.\u0275\u0275repeater(r.tickets))},dependencies:[ge,G.AsyncPipe,G.CurrencyPipe,Se,ve,h.IonContent,h.IonIcon,h.IonImg,h.IonItem,h.IonItemOption,h.IonItemOptions,h.IonItemSliding,h.IonLabel,h.IonList,h.IonNote,V,Et],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{height:100vh;width:100vw;padding-top:50px}[_nghost-%COMP%]   .ticket-list[_ngcontent-%COMP%]{margin-bottom:150px}[_nghost-%COMP%]   .ticket-list[_ngcontent-%COMP%]   .ticket-item[_ngcontent-%COMP%]   .ticket-item-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .ticket-list[_ngcontent-%COMP%]   .ticket-item[_ngcontent-%COMP%]   .ticket-item-text[_ngcontent-%COMP%]   .game-item-img[_ngcontent-%COMP%]{width:40px;height:40px}[_nghost-%COMP%]   .ticket-list[_ngcontent-%COMP%]   .ticket-item[_ngcontent-%COMP%]   .ticket-item-text[_ngcontent-%COMP%]   .game-item-data[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:calc(100% - 45px);align-items:center;margin-top:12px}[_nghost-%COMP%]   .ticket-list[_ngcontent-%COMP%]   .ticket-item[_ngcontent-%COMP%]   .ticket-item-text[_ngcontent-%COMP%]   .game-item-data[_ngcontent-%COMP%]   .game-item-data-number[_ngcontent-%COMP%]{letter-spacing:15px;font-size:30px;display:block;width:100%;padding-left:12px}"],changeDetection:0});let n=i;return n})();import{CommonModule as ke}from"@angular/common";import"@angular/core";import{IonicModule as _e}from"@ionic/angular";import{QrCodeModule as Te}from"ng-qrcode";import{RouterModule as Ee}from"@angular/router";import*as d from"@angular/core";import*as wt from"@angular/common";import*as K from"@ionic/angular";import*as xt from"ng-qrcode";function De(n,i){if(n&1&&d.\u0275\u0275element(0,"qr-code",5),n&2){let m=d.\u0275\u0275nextContext();d.\u0275\u0275property("value",m.qrUuid)}}var bt=(()=>{let i=class i{constructor(t,e){this.cdr=t,this.uuidSrv=e,this.qrUuid="aaa"}ionViewDidEnter(){this.qrUuid=y.UUID_QR_CODE+this.uuidSrv.getUuid(),this.cdr.detectChanges()}};i.\u0275fac=function(e){return new(e||i)(d.\u0275\u0275directiveInject(d.ChangeDetectorRef),d.\u0275\u0275directiveInject(T))},i.\u0275cmp=d.\u0275\u0275defineComponent({type:i,selectors:[["app-menu"]],standalone:!0,features:[d.\u0275\u0275StandaloneFeature],decls:5,vars:2,consts:[[3,"showMenu"],["padding","","color","light"],[1,"menu-list"],[1,"menu-list-qr"],["size","300","errorCorrectionLevel","M",3,"value",4,"ngIf"],["size","300","errorCorrectionLevel","M",3,"value"]],template:function(e,r){e&1&&(d.\u0275\u0275element(0,"app-header",0),d.\u0275\u0275elementStart(1,"ion-content",1)(2,"ion-list",2)(3,"section",3),d.\u0275\u0275template(4,De,1,1,"qr-code",4),d.\u0275\u0275elementEnd()()()),e&2&&(d.\u0275\u0275property("showMenu",!1),d.\u0275\u0275advance(4),d.\u0275\u0275property("ngIf",r.qrUuid))},dependencies:[ke,wt.NgIf,_e,K.IonContent,K.IonList,Ee,Te,xt.QrCodeComponent,V],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{height:100vh;width:100vw;padding-top:50px}[_nghost-%COMP%]   .menu-list[_ngcontent-%COMP%]   .menu-list-qr[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}"],changeDetection:0});let n=i;return n})();var Ot=[{path:"",component:yt,children:[{path:"",redirectTo:"main",pathMatch:"full"},{path:"main",component:St,children:[{path:"scan",component:ht},{path:"tickets",component:Mt},{path:"menu",component:bt}]}]}];var Pt={providers:[Me(Ot)]};import"@angular/core";import{CommonModule as we}from"@angular/common";import{RouterModule as xe}from"@angular/router";import*as A from"@angular/core";import*as Lt from"@angular/router";var At=(()=>{let i=class i{constructor(){this.title="lookttery-app"}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=A.\u0275\u0275defineComponent({type:i,selectors:[["app-root"]],standalone:!0,features:[A.\u0275\u0275StandaloneFeature],decls:1,vars:0,template:function(e,r){e&1&&A.\u0275\u0275element(0,"router-outlet")},dependencies:[we,xe,Lt.RouterOutlet]});let n=i;return n})();be(At,Pt).catch(n=>console.error(n));