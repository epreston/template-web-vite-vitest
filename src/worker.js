// worker.js

self.onmessage = (e) => {
  self.postMessage(`${e.data} world`);
};
