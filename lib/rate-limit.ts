type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 6;

type GlobalState = typeof globalThis & {
  __rdNaturalsRateLimitStore?: Map<string, RateLimitEntry>;
};

const globalState = globalThis as GlobalState;

const store =
  globalState.__rdNaturalsRateLimitStore ??
  (globalState.__rdNaturalsRateLimitStore = new Map<string, RateLimitEntry>());

export function canSubmitForm(key: string): boolean {
  const now = Date.now();
  const current = store.get(key);

  if (!current || current.resetAt <= now) {
    store.set(key, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });
    return true;
  }

  if (current.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  current.count += 1;
  store.set(key, current);
  return true;
}
