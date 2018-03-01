let game={
	pole:[], snake:[], width:10,height:10,
	init: function(){
		for (x=0; x<this.width; x++) {
			this.pole[x]=[];
			for (y=0; y<this.height; y++){
				this.pole[x][y]=0;
			}
		}
		this.snake[0]={x:1,y:2};
	},
	table: function(){
		document.write("<table>");
		for (i=0;i<10;i++){
			document.write("<tr>")
			for (k=0;k<10;k++){
				document.write(`<td id="cell${i}-${k}">ww</td>`);
			}
			document.write("</tr>");
		}
		document.write("</table>");
	}
    // document.getElementById("cell0-2").onclick = function() {  alert(5);  }


};
game.init();
game.table();
//let xr = Math.round((Math.random()*9));
//let yr = Math.round((Math.random()*9));

document.getElementById('cell1-1').style.backgroundColor = "#FF0000";
addEventListener("keydown", function(event) {
    if (event.keyCode == 38)
    {
    	//не работвает функция, не возвращает при нажатии число с увеличением. где то накосячил
        function up() {
            let verh = 0;
            verh++;
            return verh;
        }

        {
            let verh = up();
            console.log(verh);
            //не производится заменаю а если и производится то обин раз
            //document.getElementById('cell'+verh+'-1').style.backgroundColor = "#FF0000";
        }

    }

});


