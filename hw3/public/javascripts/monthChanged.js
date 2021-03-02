//File created by Malia Lundstrom
function monthChange(e){
	document.querySelector('.dropbtn').textContent = e.textContent;
	$.post("http://localhost:3000/orders", function(result){
			$("table").html(result);
	});
}