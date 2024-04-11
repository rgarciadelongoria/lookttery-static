import{assertInInjectionContext as a,inject as u,DestroyRef as s,Injector as b,effect as g,untracked as l,signal as d,ɵRuntimeError as m,computed as v}from"@angular/core";import{Observable as y,ReplaySubject as h}from"rxjs";import{takeUntil as w}from"rxjs/operators";function f(r){r||(a(f),r=u(s));let e=new y(t=>r.onDestroy(t.next.bind(t)));return t=>t.pipe(w(e))}function j(r,e){!e?.injector&&a(j);let t=e?.injector??u(b),i=new h(1),o=g(()=>{let c;try{c=r()}catch(n){l(()=>i.error(n));return}l(()=>i.next(c))},{injector:t,manualCleanup:!0});return t.get(s).onDestroy(()=>{o.destroy(),i.complete()}),i.asObservable()}function S(r,e){let t=!e?.manualCleanup;t&&!e?.injector&&a(S);let i=t?e?.injector?.get(s)??u(s):null,o;e?.requireSync?o=d({kind:0}):o=d({kind:1,value:e?.initialValue});let c=r.subscribe({next:n=>o.set({kind:1,value:n}),error:n=>{if(e?.rejectErrors)throw n;o.set({kind:2,error:n})}});return i?.onDestroy(c.unsubscribe.bind(c)),v(()=>{let n=o();switch(n.kind){case 1:return n.value;case 2:throw n.error;case 0:throw new m(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}export{f as takeUntilDestroyed,j as toObservable,S as toSignal};/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v17.0.7
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/