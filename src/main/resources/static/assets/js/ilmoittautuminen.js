$(document).ready(function() {

	$('#ilmoittautuminen').click(function() {

		$.post("/email", $("#lomake").serialize()).done(function() {
			$('.success').show();
			$('#lomake').hide();
		}).fail(function(error) {
			console.log(error);
			$('.error').show();
		});

	});

	if (!window.location.href.includes("paivallinen")) {
		$('.paivallinen').hide();
		$('.illallinen').show();
		
		$('#paivallinen').prop("checked", false);
	}else{
		$('.paivallinen').show();
		$('.illallinen').hide();
	}
	
	$('#avecname').keyup(function(){
		
		$('#avec').prop("checked", $('#avecname').val().length > 0);	
		
	});
	
	$('#lapsialkm').keyup(function(){
				
		if($('#lapsialkm').val().length == 0){
			$('#lapsia').prop("checked", false);
		}else{
			$('#lapsia').prop("checked", parseInt($('#lapsialkm').val()) > 0);
			
		}		
		
	});
});