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


let dy = Math.round((Math.random()*10)-1);

let dx = Math.round((Math.random()*10)-1);
document.write(dx+'and'+dy);
document.getElementById('cell'+dy+(-dx)).style.backgroundColor = "#00FF00";
	console.log('cell'+dy+(-dx));
document.addEventListener("keydown", function(event) {
    if (event.keyCode == 38)
    {
        function up() {
            dy--;
            return dy;
            //brake;
        }

        {
            let dy = up();
        }
        let el =  document.getElementById('cell'+dy+(-dx)).style.backgroundColor = "#00FF00";
        console.log(el);
        if (el = el) {
            document.getElementById('cell'+(dy+1)+(-dx)).style.backgroundColor = ""
        }
    }

    else if (event.keyCode == 40)
         {
             function up() {
                 dy++;
                 return dy;
                 //brake;
             }

             {
                 let dy = up();
             }
             let el =  document.getElementById('cell'+dy+(-dx)).style.backgroundColor = "#00FF00";
             console.log(el);
             if (el = el) {
                 document.getElementById('cell'+(dy-1)+(-dx)).style.backgroundColor = ""
             }
         }

     if (event.keyCode == 39)
    {
        function up() {
            dx++;
            return dx;
            //brake;
        }

        {
            let dx = up();
        }
        let el =  document.getElementById('cell'+dy+(-dx)).style.backgroundColor = "#00FF00";
        console.log(el);
        if (el = el) {
            document.getElementById('cell'+dy+(-(dx-1))).style.backgroundColor = ""
        }
    }

    else if (event.keyCode == 37)
    {
        function up() {
            dx--;
            return dx;
            //brake;
        }

        {
            let dx = up();
        }
        let el =  document.getElementById('cell'+dy+(-dx)).style.backgroundColor = "#00FF00";
        console.log(el);
        if (el = el) {
            document.getElementById('cell'+dy+(-(dx+1))).style.backgroundColor = ""
        }
    }


});


