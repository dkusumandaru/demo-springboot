// run in jquery 1.11.1
// $(window).load(function() {
// 	setTimeout(function(){
// 		$("#loading").hide();
// 		$(".loader").hide();
// 	},2500);
// });

function run_loader(){
	$("#loading").show();
	$(".loader").show();
}

function stop_loader(){
	$("#loading").hide();
	$(".loader").hide();
}