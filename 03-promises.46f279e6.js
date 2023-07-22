var e,o;(e=5,o=1e3,new Promise(((i,s)=>setTimeout((()=>{Math.random()>.3?i({position:e,delay:o}):s({position:e,delay:o})}),1e3)))).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.46f279e6.js.map
