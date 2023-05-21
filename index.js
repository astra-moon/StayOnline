module.exports=({code=`<b><a href="https://www.npmjs.com/package/stayonline">[StayOnline]</a></b>`,port=3000})=>require("http").createServer((a,_)=>_.end(code)).listen(port)
