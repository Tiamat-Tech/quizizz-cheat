(()=>{"use strict";var e=function(e,r,t,o){return new(t||(t=Promise))((function(n,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function s(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var r;e.done?n(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,s)}c((o=o.apply(e,r||[])).next())}))},r=function(e,r){var t,o,n,a,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((n=(n=i.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(6===a[0]&&i.label<n[1]){i.label=n[1],n=a;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(a);break}n[2]&&i.ops.pop(),i.trys.pop();continue}a=r.call(e,i)}catch(e){a=[6,e],o=0}finally{t=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};console.log("Hi there!"),e(void 0,void 0,void 0,(function(){var t,o;return r(this,(function(n){if(console.log("Started!"),!(t=prompt("Enter other player name here, he must take a part in quiz!")))throw new Error("PlayerID not defined");return o=function(){console.log("Retreiving questin info");var e=document.querySelector("body > div");if(!e)throw new Error("Could not retreive root object");var r=e.__vue__,t=r.$store._vm.currentQuestion.id,o=r.$store._vm._data.$$state.game.data.roomHash;if(!t||!o)throw new Error("Couldn't retreive questionID or roomHash");var n=localStorage.getItem("previousContext");if(!n)throw new Error("Couldn't retreive previousContext");return{id:t,roomHash:o,playerId:JSON.parse(n).currentPlayer.playerId}}(),console.log({questionID:o.id,roomHash:o.roomHash}),a={gameType:"live",playerId:t,powerupEffects:{destroy:[]},questionId:o.id,response:{attempt:0,isEvaluated:!1,questionId:o.id,questionType:"MSQ",provisional:{scoreBreakups:{correct:{base:600,powerups:[],streak:20,timer:0,total:500},incorrect:{base:0,powerups:[],streak:0,timer:0,total:0}},scores:{correct:600,incorrect:0},teamAdjustments:[]},response:[],responseType:"original",timeTaken:Math.floor(1e4*Math.random())},roomHash:o.roomHash},e(void 0,void 0,void 0,(function(){var e;return r(this,(function(r){switch(r.label){case 0:return[4,fetch("https://game.quizizz.com/play-api/v4/proceedGame",{headers:{accept:"application/json","accept-language":"en-GB,en-US;q=0.9,en;q=0.8,no;q=0.7,pl;q=0.6","cache-control":"no-cache","content-type":"application/json","experiment-name":"main_main",pragma:"no-cache","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site","x-csrf-token":"eCAD63NH-xDaB6c-M4tnWof4elPFwcM1-_ZY"},referrer:"https://quizizz.com/",referrerPolicy:"strict-origin-when-cross-origin",body:JSON.stringify(a),method:"POST",mode:"cors",credentials:"include"})];case 1:return[4,r.sent().json()];case 2:return e=r.sent(),console.log(e),console.log({anwser:e.question}),[2]}}))})),[2];var a}))}))})();