"use client";

let worker: Worker | undefined;

export default function WorkerButton() {
  return (
    <button
      onClick={() => {
        if (worker === undefined) {
          worker = new Worker(new URL("./workerScript.ts", import.meta.url));
          worker.postMessage("Start worker");
        } else {
          worker.postMessage("Already started");
        }
      }}
    >
      Start Worker
    </button>
  );
}
