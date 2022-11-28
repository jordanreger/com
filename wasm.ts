const import_object = {
  js: {
    fetch(start, length) {
      let url = new Uint8Array(memory.buffer, start, length);
      const decoder = new TextDecoder();
      url = decoder.decode(url);
      window.fetch(url).then(res => res.text()).then(res => { console.log(res) })
    }
  }
};

const file = await Deno.readFile("main.wasm"), mod = new WebAssembly.Module(file), i = new WebAssembly.Instance(mod, import_object);
const { fetch, memory } = i.exports;

fetch();