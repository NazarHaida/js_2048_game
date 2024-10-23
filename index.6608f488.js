const e=new class{constructor(e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]){this.board=e.map(e=>e.slice()),this.score=0,this.status="idle"}placeRandomTile(){let e=[];for(let t=0;t<4;t++)for(let r=0;r<4;r++)0===this.board[t][r]&&e.push({row:t,col:r});if(e.length>0){let{row:t,col:r}=e[Math.floor(Math.random()*e.length)];this.board[t][r]=.1>Math.random()?4:2}}moveLeft(){let e=!1;for(let t=0;t<4;t++){let r=this.board[t].filter(e=>0!==e);for(let e=0;e<r.length-1;e++)r[e]===r[e+1]&&(r[e]*=2,this.score+=r[e],r.splice(e+1,1),r.push(0));for(;r.length<4;)r.push(0);this.arraysEqual(r,this.board[t])||(e=!0,this.board[t]=r)}if(e){if(this.placeRandomTile(),this.checkWin())return;this.checkGameOver()}}moveRight(){let e=!1;for(let t=0;t<4;t++){let r=this.board[t].reverse().filter(e=>0!==e);for(let e=0;e<r.length-1;e++)r[e]===r[e+1]&&(r[e]*=2,this.score+=r[e],r.splice(e+1,1),r.push(0));for(;r.length<4;)r.push(0);r.reverse(),this.arraysEqual(r,this.board[t])||(e=!0,this.board[t]=r)}if(e){if(this.placeRandomTile(),this.checkWin())return;this.checkGameOver()}}moveUp(){let e=!1;for(let t=0;t<4;t++){let r=[];for(let e=0;e<4;e++)0!==this.board[e][t]&&r.push(this.board[e][t]);for(let e=0;e<r.length-1;e++)r[e]===r[e+1]&&(r[e]*=2,this.score+=r[e],r.splice(e+1,1),r.push(0));for(;r.length<4;)r.push(0);for(let s=0;s<4;s++)this.board[s][t]!==r[s]&&(e=!0,this.board[s][t]=r[s])}if(e){if(this.placeRandomTile(),this.checkWin())return;this.checkGameOver()}}moveDown(){let e=!1;for(let t=0;t<4;t++){let r=[];for(let e=3;e>=0;e--)0!==this.board[e][t]&&r.push(this.board[e][t]);for(let e=0;e<r.length-1;e++)r[e]===r[e+1]&&(r[e]*=2,this.score+=r[e],r.splice(e+1,1),r.push(0));for(;r.length<4;)r.push(0);for(let s=3;s>=0;s--)this.board[s][t]!==r[3-s]&&(e=!0,this.board[s][t]=r[3-s])}if(e){if(this.placeRandomTile(),this.checkWin())return;this.checkGameOver()}}getScore(){return this.score}getState(){return this.board.map(e=>e.slice())}getStatus(){return this.status}start(){this.status="playing",this.score=0,this.board=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.placeRandomTile(),this.placeRandomTile()}arraysEqual(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}restart(){this.status="idle",this.start()}checkWin(){for(let e=0;e<4;e++)for(let t=0;t<4;t++)if(2048===this.board[e][t])return this.status="win",!0;return!1}checkGameOver(){for(let e=0;e<4;e++)for(let t=0;t<4;t++)if(0===this.board[e][t])return!1;for(let e=0;e<4;e++)for(let t=0;t<4;t++)if(t<3&&this.board[e][t]===this.board[e][t+1]||e<3&&this.board[e][t]===this.board[e+1][t])return!1;return this.status="lose",!0}},t=document.querySelector(".button.start");function r(){let t=e.getState(),r=document.querySelectorAll(".field-cell"),s=0;for(let e=0;e<4;e++)for(let o=0;o<4;o++){let i=t[e][o],l=r[s];l.textContent=0===i?"":i,l.className=`field-cell field-cell--${i}`,s++}document.querySelector(".game-score").textContent=e.getScore()}document.addEventListener("keydown",()=>{if("playing"!==e.getStatus())return;let t=!1;switch(event.key){case"ArrowLeft":e.moveLeft(),t=!0;break;case"ArrowRight":e.moveRight(),t=!0;break;case"ArrowUp":e.moveUp(),t=!0;break;case"ArrowDown":e.moveDown(),t=!0}t&&(r(),"win"===e.getStatus()?document.querySelector(".message-win").classList.remove("hidden"):"lose"===e.getStatus()&&document.querySelector(".message-lose").classList.remove("hidden"))}),t.addEventListener("click",()=>{t.textContent="Restart",("win"===e.getStatus()||"idle"===e.getStatus()||"lose"===e.getStatus()||"playing"===e.getStatus())&&(e.restart(),r(),document.querySelector(".message-win").classList.add("hidden"),document.querySelector(".message-lose").classList.add("hidden"),document.querySelector(".message-start").classList.add("hidden"),t.textContent="Restart")});
//# sourceMappingURL=index.6608f488.js.map
