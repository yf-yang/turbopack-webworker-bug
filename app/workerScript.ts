// HACK: https://github.com/microsoft/TypeScript/issues/14877#issuecomment-326751509

/// <reference lib="WebWorker" />
declare const self: DedicatedWorkerGlobalScope;

self.onmessage = (e: MessageEvent<string>) => {
  console.log("Receive in worker: ", e.data);
};
