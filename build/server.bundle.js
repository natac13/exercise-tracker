!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=3)}([function(e,r){e.exports=require("chalk")},function(e,r){e.exports=require("mongoose")},function(e,r){e.exports=require("path")},function(e,r,n){e.exports=n(8)},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("body-parser")},function(e,r){e.exports=require("cors")},function(e,r){e.exports=require("dotenv")},function(e,r,n){"use strict";n.r(r);var t=n(0),o=n.n(t),s=n(2),c=n.n(s),u=n(1),i=n.n(u);function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){l(e,r,n[r])})}return e}function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}i.a.Promise=global.Promise;const p={useNewUrlParser:!0,useFindAndModify:!1,useCreateIndex:!0};var f=async function(e,r){if("production"!==e&&i.a.set("debug",!0),"development"===e)try{const e=await i.a.connect(r,a({},p,{user:process.env.DB_USER,pass:process.env.DB_PASS,dbName:process.env.DB}));return console.log(o.a.green("\nConnected to the development Database 🏬")),console.log(o.a.yellow("Good Luck! 🍌")),e}catch(e){return console.log(o.a.red(e)),Promise.reject(new Error("Failed to connect to development DB"))}else if("production"===e)try{const e=await i.a.connect(r,a({},p,{autoIndex:!1,user:process.env.DB_USER,pass:process.env.DB_PASS,dbName:process.env.DB}));return console.log(o.a.cyan("Connected on production Database 🏬")),e}catch(e){return Promise.reject(new Error("Failed to connect to mongoDB"))}return!1};const d=n(4),b=d(),y=n(5),g=n(6);n(7).config();f("production",process.env.MONGO_URI);b.use(g()),b.use(y.urlencoded({extended:!1})),b.use(y.json()),b.use(d.static("public/assets")),b.get("/*",(e,r)=>{r.sendFile(c.a.resolve(__dirname,"..","public/index.html"))}),b.use((e,r,n)=>n({status:404,message:"not found"})),b.use((e,r,n,t)=>{let o,s;if(e.errors){o=400;const r=Object.keys(e.errors);s=e.errors[r[0]].message}else o=e.status||500,s=e.message||"Internal Server Error";n.status(o).type("txt").send(s)});const v=process.env.PORT||3033;b.set("port",v),b.listen(v,()=>console.log(o.a.green("👏 Production Server Running on port: "),o.a.bold(v)))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hhbGtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RiQ29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaW5kZXguanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJyZXF1aXJlIiwibW9uZ29vc2UiLCJQcm9taXNlIiwiZ2xvYmFsIiwib3B0aW9ucyIsInVzZU5ld1VybFBhcnNlciIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VDcmVhdGVJbmRleCIsImNvbm5lY3RUb0RCIiwiYXN5bmMiLCJlbnYiLCJtb25nb1VSSSIsInNldCIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiX29iamVjdFNwcmVhZCIsInVzZXIiLCJwcm9jZXNzIiwiREJfVVNFUiIsInBhc3MiLCJEQl9QQVNTIiwiZGJOYW1lIiwiREIiLCJjb25zb2xlIiwibG9nIiwiY2hhbGsiLCJncmVlbiIsInllbGxvdyIsImVycm9yIiwicmVkIiwicmVqZWN0IiwiRXJyb3IiLCJhdXRvSW5kZXgiLCJjeWFuIiwiZXhwcmVzcyIsImFwcCIsImJvZHlQYXJzZXIiLCJjb3JzIiwiY29uZmlnIiwiZGJDb25uZWN0aW9uIiwiTU9OR09fVVJJIiwidXNlIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsInN0YXRpYyIsInJlcSIsInJlcyIsInNlbmRGaWxlIiwicGF0aCIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJuZXh0Iiwic3RhdHVzIiwibWVzc2FnZSIsImVyciIsImVyckNvZGUiLCJlcnJNZXNzYWdlIiwiZXJyb3JzIiwia2V5cyIsInR5cGUiLCJzZW5kIiwicG9ydCIsIlBPUlQiLCJsaXN0ZW4iLCJib2xkIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsR0FBQSxDQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFFBQUEsSUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsRUFBQSxDQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1osRUFBQWtCLEVBQUEsU0FBQWhCLEdBQ0Esb0JBQUFpQixlQUFBQyxhQUNBTixPQUFBQyxlQUFBYixFQUFBaUIsT0FBQUMsWUFBQSxDQUF3REMsTUFBQSxXQUV4RFAsT0FBQUMsZUFBQWIs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RUFBSUMsU0FBU0MsSUFBS0MsUUFBUUMsVUFBVyxLQUFNLHdCQUk3Q2hCLEVBQUlNLElBQUksQ0FBQ0ssRUFBS0MsRUFBS0ssSUFDVkEsRUFBSyxDQUFFQyxPQUFRLElBQUtDLFFBQVMsZUFJdENuQixFQUFJTSxJQUFJLENBQUNjLEVBQUtULEVBQUtDLEVBQUtLLEtBQ3RCLElBQUlJLEVBQVNDLEVBRWIsR0FBSUYsRUFBSUcsT0FBUSxDQUVkRixFQUFVLElBQ1YsTUFBTUcsRUFBT2pGLE9BQU9pRixLQUFLSixFQUFJRyxRQUU3QkQsRUFBYUYsRUFBSUcsT0FBT0MsRUFBSyxJQUFJTCxhQUdqQ0UsRUFBVUQsRUFBSUYsUUFBVSxJQUN4QkksRUFBYUYsRUFBSUQsU0FBVyx3QkFFOUJQLEVBQ0dNLE9BQU9HLEdBQ1BJLEtBQUssT0FDTEMsS0FBS0osS0FHVixNQUFNSyxFQUFPN0MsUUFBUVAsSUFBSXFELE1BQVEsS0FDakM1QixFQUFJdkIsSUFBSSxPQUFRa0QsR0FFZDNCLEVBQUk2QixPQUFPRixFQUFNLElBQ2Z2QyxRQUFRQyxJQUNOQyxJQUFNQyxNQUFNLDBDQUNaRCxJQUFNd0MsS0FBS0giLCJmaWxlIjoic2VydmVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWxrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbm1vbmdvb3NlLlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxufTtcblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvREIoZW52LCBtb25nb1VSSSkge1xuICBpZiAoZW52ICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBtb25nb29zZS5zZXQoJ2RlYnVnJywgdHJ1ZSk7XG4gIH1cblxuICBpZiAoZW52ID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gY29ubmVjdCB0byBhIGRldmVsb3BtZW50IGRhdGFiYXNlXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KG1vbmdvVVJJLCB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkRCX1VTRVIsXG4gICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkRCX1BBU1MsXG4gICAgICAgIGRiTmFtZTogcHJvY2Vzcy5lbnYuREIsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGNoYWxrLmdyZWVuKCdcXG5Db25uZWN0ZWQgdG8gdGhlIGRldmVsb3BtZW50IERhdGFiYXNlIPCfj6wnKSk7XG4gICAgICBjb25zb2xlLmxvZyhjaGFsay55ZWxsb3coJ0dvb2QgTHVjayEg8J+NjCcpKTtcbiAgICAgIHJldHVybiBjb25uZWN0aW9uO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhjaGFsay5yZWQoZXJyb3IpKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjb25uZWN0IHRvIGRldmVsb3BtZW50IERCJykpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChlbnYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChtb25nb1VSSSwge1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBhdXRvSW5kZXg6IGZhbHNlLFxuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxuICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxuICAgICAgICBkYk5hbWU6IHByb2Nlc3MuZW52LkRCLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhjaGFsay5jeWFuKCdDb25uZWN0ZWQgb24gcHJvZHVjdGlvbiBEYXRhYmFzZSDwn4+sJykpO1xuICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIHNob3VsZCByZWNvcmQgZXJyb3IgaW4gcHJvZHVjdGlvblxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignRmFpbGVkIHRvIGNvbm5lY3QgdG8gbW9uZ29EQicpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9EQjtcbiIsImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBkYkNvbm5lY3Rpb24gZnJvbSAnLi9kYkNvbm5lY3Rpb24nO1xuXG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5cbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJyk7XG4vKiBOb2RlIGVudiAqL1xucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG5cbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuLyogQ29ubmVjdCB0byB0aGUgRGF0YUJhc2UgKi9cbmNvbnN0IGRiID0gZGJDb25uZWN0aW9uKGVudiwgcHJvY2Vzcy5lbnYuTU9OR09fVVJJKTtcbmNvbnN0IGluUHJvZHVjdGlvbiA9IGVudiA9PT0gJ3Byb2R1Y3Rpb24nO1xuYXBwLnVzZShjb3JzKCkpO1xuXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljL2Fzc2V0cycpKTtcbmFwcC5nZXQoJy8qJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4nLCAncHVibGljL2luZGV4Lmh0bWwnKSk7XG59KTtcblxuLy8gTm90IGZvdW5kIG1pZGRsZXdhcmVcbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJldHVybiBuZXh0KHsgc3RhdHVzOiA0MDQsIG1lc3NhZ2U6ICdub3QgZm91bmQnIH0pO1xufSk7XG5cbi8vIEVycm9yIEhhbmRsaW5nIG1pZGRsZXdhcmVcbmFwcC51c2UoKGVyciwgcmVxLCByZXMsIG5leHQpID0+IHtcbiAgbGV0IGVyckNvZGUsIGVyck1lc3NhZ2U7XG5cbiAgaWYgKGVyci5lcnJvcnMpIHtcbiAgICAvLyBtb25nb29zZSB2YWxpZGF0aW9uIGVycm9yXG4gICAgZXJyQ29kZSA9IDQwMDsgLy8gYmFkIHJlcXVlc3RcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXJyLmVycm9ycyk7XG4gICAgLy8gcmVwb3J0IHRoZSBmaXJzdCB2YWxpZGF0aW9uIGVycm9yXG4gICAgZXJyTWVzc2FnZSA9IGVyci5lcnJvcnNba2V5c1swXV0ubWVzc2FnZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBnZW5lcmljIG9yIGN1c3RvbSBlcnJvclxuICAgIGVyckNvZGUgPSBlcnIuc3RhdHVzIHx8IDUwMDtcbiAgICBlcnJNZXNzYWdlID0gZXJyLm1lc3NhZ2UgfHwgJ0ludGVybmFsIFNlcnZlciBFcnJvcic7XG4gIH1cbiAgcmVzXG4gICAgLnN0YXR1cyhlcnJDb2RlKVxuICAgIC50eXBlKCd0eHQnKVxuICAgIC5zZW5kKGVyck1lc3NhZ2UpO1xufSk7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMzM7XG5hcHAuc2V0KCdwb3J0JywgcG9ydCk7XG5pZiAoaW5Qcm9kdWN0aW9uKSB7XG4gIGFwcC5saXN0ZW4ocG9ydCwgKCkgPT5cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGNoYWxrLmdyZWVuKCfwn5GPIFByb2R1Y3Rpb24gU2VydmVyIFJ1bm5pbmcgb24gcG9ydDogJyksXG4gICAgICBjaGFsay5ib2xkKHBvcnQpXG4gICAgKVxuICApO1xufSBlbHNlIHtcbiAgYXBwLmxpc3Rlbihwb3J0LCAnbG9jYWxob3N0JywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNoYWxrLnJlZCgnXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKSk7XG4gICAgY29uc29sZS5sb2coY2hhbGsuZ3JlZW4oJyAgICAgICAg8J+SuyBEZXZlbG9wbWVudCBzZXJ2ZXIg8J+PgyBvbjogJykpO1xuICAgIGNvbnNvbGUubG9nKCcgICAgICAgICcgKyBjaGFsay51bmRlcmxpbmUuY3lhbihgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YCkpO1xuICAgIGNvbnNvbGUubG9nKGNoYWxrLnJlZCgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKSk7XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==