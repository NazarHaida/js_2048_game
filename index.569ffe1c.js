!function(){var e=new(function(){var e;function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),this.board=e.map(function(e){return e.slice()}),this.score=0,this.status="idle"}return e=[{key:"placeRandomTile",value:function(){for(var e=[],t=0;t<4;t++)for(var r=0;r<4;r++)0===this.board[t][r]&&e.push({row:t,col:r});if(e.length>0){var a=e[Math.floor(Math.random()*e.length)],o=a.row,n=a.col;this.board[o][n]=.1>Math.random()?4:2}}},{key:"moveLeft",value:function(){for(var e=this,t=!1,r=0;r<4;r++)!function(r){for(var a=e.board[r].filter(function(e){return 0!==e}),o=0;o<a.length-1;o++)a[o]===a[o+1]&&(a[o]*=2,e.score+=a[o],a.splice(o+1,1),a.push(0));for(;a.length<4;)a.push(0);e.arraysEqual(a,e.board[r])||(t=!0,e.board[r]=a)}(r);if(t){if(this.placeRandomTile(),this.checkWin())return;this.checkGameOver()}}},{key:"moveRight",value:function(){for(var e=this,t=!1,r=0;r<4;r++)!function(r){for(var a=e.board[r].reverse().filter(function(e){return 0!==e}),o=0;o<a.length-1;o++)a[o]===a[o+1]&&(a[o]*=2,e.score+=a[o],a.splice(o+1,1),a.push(0));for(;a.length<4;)a.push(0);a.reverse(),e.arraysEqual(a,e.board[r])||(t=!0,e.board[r]=a)}(r);if(t){if(this.placeRandomTile(),this.checkWin())return;this.checkGameOver()}}},{key:"moveUp",value:function(){for(var e=!1,t=0;t<4;t++){for(var r=[],a=0;a<4;a++)0!==this.board[a][t]&&r.push(this.board[a][t]);for(var o=0;o<r.length-1;o++)r[o]===r[o+1]&&(r[o]*=2,this.score+=r[o],r.splice(o+1,1),r.push(0));for(;r.length<4;)r.push(0);for(var n=0;n<4;n++)this.board[n][t]!==r[n]&&(e=!0,this.board[n][t]=r[n])}if(e){if(this.placeRandomTile(),this.checkWin())return;this.checkGameOver()}}},{key:"moveDown",value:function(){for(var e=!1,t=0;t<4;t++){for(var r=[],a=3;a>=0;a--)0!==this.board[a][t]&&r.push(this.board[a][t]);for(var o=0;o<r.length-1;o++)r[o]===r[o+1]&&(r[o]*=2,this.score+=r[o],r.splice(o+1,1),r.push(0));for(;r.length<4;)r.push(0);for(var n=3;n>=0;n--)this.board[n][t]!==r[3-n]&&(e=!0,this.board[n][t]=r[3-n])}if(e){if(this.placeRandomTile(),this.checkWin())return;this.checkGameOver()}}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.board.map(function(e){return e.slice()})}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.status="playing",this.score=0,this.board=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.placeRandomTile(),this.placeRandomTile()}},{key:"arraysEqual",value:function(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}},{key:"restart",value:function(){this.status="idle",this.start()}},{key:"checkWin",value:function(){for(var e=0;e<4;e++)for(var t=0;t<4;t++)if(2048===this.board[e][t])return this.status="win",!0;return!1}},{key:"checkGameOver",value:function(){for(var e=0;e<4;e++)for(var t=0;t<4;t++)if(0===this.board[e][t])return!1;for(var r=0;r<4;r++)for(var a=0;a<4;a++)if(a<3&&this.board[r][a]===this.board[r][a+1]||r<3&&this.board[r][a]===this.board[r+1][a])return!1;return this.status="lose",!0}}],function(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(t.prototype,e),t}()),t=document.querySelector(".button.start");function r(){for(var t=e.getState(),r=document.querySelectorAll(".field-cell"),a=0,o=0;o<4;o++)for(var n=0;n<4;n++){var i=t[o][n],s=r[a];s.textContent=0===i?"":i,s.className="field-cell field-cell--".concat(i),a++}document.querySelector(".game-score").textContent=e.getScore()}document.addEventListener("keydown",function(){if("playing"===e.getStatus()){var t=!1;switch(event.key){case"ArrowLeft":e.moveLeft(),t=!0;break;case"ArrowRight":e.moveRight(),t=!0;break;case"ArrowUp":e.moveUp(),t=!0;break;case"ArrowDown":e.moveDown(),t=!0}t&&(r(),"win"===e.getStatus()?document.querySelector(".message-win").classList.remove("hidden"):"lose"===e.getStatus()&&document.querySelector(".message-lose").classList.remove("hidden"))}}),t.addEventListener("click",function(){t.textContent="Restart",("win"===e.getStatus()||"idle"===e.getStatus()||"lose"===e.getStatus()||"playing"===e.getStatus())&&(e.restart(),r(),document.querySelector(".message-win").classList.add("hidden"),document.querySelector(".message-lose").classList.add("hidden"),document.querySelector(".message-start").classList.add("hidden"),t.textContent="Restart")})}();
//# sourceMappingURL=index.569ffe1c.js.map
