import t from"express";import a from"morgan";import i from"node:path";import o from"chalk";import{Router as p}from"express";var l=p();l.get("/hello",(c,r)=>{r.status(200).json({message:"Hello, world! hasdklfjalsdkjf"})});var n=process.env.PORT||3e3,s=i.join(process.cwd(),process.env.NODE_ENV==="development"?"../client/dist":"./client");console.log("  - env:	",process.env.NODE_ENV);console.log("  - cwd:	",process.cwd());console.log("  - dirname:	",__dirname);console.log("  - public:	",s);var e=t();e.use(a("dev"));e.use(t.json());e.use(t.urlencoded({extended:!0}));e.use(t.static(s));e.get("/",(c,r)=>{r.sendFile("index.html",{root:s})});e.use("/api",l);e.listen(n,()=>{console.log(o.greenBright(`
  Server listening on port ${n}
`)),console.log(o.whiteBright("  - Local:"),o.cyanBright(`http://localhost:${n}`)),console.log(o.whiteBright("  - Client path:"),o.blueBright(i.relative(process.cwd(),s)))});
