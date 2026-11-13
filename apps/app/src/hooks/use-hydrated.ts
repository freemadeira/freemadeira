import { useSyncExternalStore } from "react";

const subscribe = () => () => {
  // Nothing changes after hydration.
};

/**
 * False while a statically rendered web page hydrates, true after; always
 * true on iOS and Android. The static HTML can't know the visitor's colour
 * scheme or language, so hooks that read them render the defaults until then.
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
