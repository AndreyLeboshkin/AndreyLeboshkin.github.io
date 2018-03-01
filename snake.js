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


let dy = Math.floor((Math.random()*10));
let dx = Math.floor((Math.random()*10));
//document.write('cell'+dy+`-`+dx);
//'cell'+dy+(-dx) = 'cell'+dy+`-`+dx
document.getElementById('cell'+dy+`-`+dx).style.backgroundColor = "#00FF00";
//console.log('cell'+dy+`-`+dx);
document.addEventListener("keydown", function(event) {
    if (event.key === 'ArrowUp')
    {
        function up() {
            dy--;
            return dy;
        }

        {
            let dy = up();
        }
        let el =  document.getElementById('cell'+dy+`-`+dx);
        el.style.backgroundColor = "#00FF00";
        if (el) {
            document.getElementById('cell'+(dy+1)+`-`+dx).style.backgroundColor = "#E0FFFF";
        }
    }

    else if (event.key === 'ArrowDown')
    {
        function up() {
            dy++;
            return dy;
        }

        {
            let dy = up();
        }
        let el =  document.getElementById('cell'+dy+`-`+dx);
        el.style.backgroundColor = "#00FF00";
        if (el) {
            document.getElementById('cell'+(dy-1)+`-`+dx).style.backgroundColor = "#E0FFFF";
        }
    }

    if (event.key === 'ArrowRight')
    {
        function up() {
            dx++;
            return dx;
        }

        {
            let dx = up();
        }
        let el =  document.getElementById('cell'+dy+`-`+dx);
        el.style.backgroundColor = "#00FF00";
        if (el) {
            document.getElementById('cell'+dy+`-`+(dx-1)).style.backgroundColor = "#E0FFFF";
        }
    }

    else if (event.key === 'ArrowLeft')
    {
        function up() {
            dx--;
            return dx;
        }

        {
            let dx = up();
        }
        let el =  document.getElementById('cell'+dy+`-`+dx);
        el.style.backgroundColor = "#00FF00";
        if (el) {
            document.getElementById('cell'+dy+`-`+(dx+1)).style.backgroundColor = "#E0FFFF";
        }
    }


});


// et el = document.getElementById('cell'+dy+`-`+dx);
// if (el)
//     el..style.backgroundColor = "#00FF00";