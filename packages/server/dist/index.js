var f=Object.create;var m=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty;var x=(e,o,r,d)=>{if(o&&typeof o=="object"||typeof o=="function")for(let l of w(o))!B.call(e,l)&&l!==r&&m(e,l,{get:()=>o[l],enumerable:!(d=v(o,l))||d.enumerable});return e};var i=(e,o,r)=>(r=e!=null?f(j(e)):{},x(o||!e||!e.__esModule?m(r,"default",{value:e,enumerable:!0}):r,e));var n=i(require("express")),u=i(require("morgan")),g=i(require("path")),s=i(require("chalk"));var h=require("express"),p=(0,h.Router)();p.get("/hello",(e,o)=>{o.status(200).json({message:"Hello, world! hasdklfjalsdkjf"})});var a=process.env.PORT||3e3,c=g.default.join(process.cwd(),process.env.NODE_ENV==="development"?"../client/dist":"./client");console.log("  - env:	",process.env.NODE_ENV);console.log("  - cwd:	",process.cwd());console.log("  - dirname:	",__dirname);console.log("  - public:	",c);var t=(0,n.default)();t.use((0,u.default)("dev"));t.use(n.default.json());t.use(n.default.urlencoded({extended:!0}));t.use(n.default.static(c));t.get("/",(e,o)=>{o.sendFile("index.html",{root:c})});t.use("/api",p);t.listen(a,()=>{console.log(s.default.greenBright(`
  Server listening on port ${a}
`)),console.log(s.default.whiteBright("  - Local:"),s.default.cyanBright(`http://localhost:${a}`)),console.log(s.default.whiteBright("  - Client path:"),s.default.blueBright(g.default.relative(process.cwd(),c)))});
