// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
import { assertInInjectionContext, inject, DestroyRef, Injector, effect, untracked, assertNotInReactiveContext, signal, ɵRuntimeError, computed } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { takeUntil } from "rxjs/operators";
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable(observer => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return source => {
    return source.pipe(takeUntil(destroyed$));
  };
}
function toObservable(source, options) {
  !options?.injector && assertInInjectionContext(toObservable);
  const injector = options?.injector ?? inject(Injector);
  const subject = new ReplaySubject(1);
  const watcher = effect(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      untracked(() => subject.error(err));
      return;
    }
    untracked(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}
function toSignal(source, options) {
  ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  requiresCleanup && !options?.injector && assertInInjectionContext(toSignal);
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
      /* StateKind.NoValue */
    });
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    });
  }
  const sub = source.subscribe({
    next: value => state.set({
      kind: 1,
      value
    }),
    error: error => {
      if (options?.rejectErrors) {
        throw error;
      }
      state.set({
        kind: 2,
        error
      });
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (ngDevMode && options?.requireSync && state().kind === 0) {
    throw new ɵRuntimeError(601, "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new ɵRuntimeError(601, "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  });
}
export { takeUntilDestroyed, toObservable, toSignal };
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v17.0.7
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/