$(document).ready(function() {

	$('#ilmoittautuminen').click(function() {

		$('#ilmoittautuminen').prop("disabled",true);
		
		$('#loading').show();
		
		$.post("/email", $("#lomake").serialize()).done(function() {
			$('.success').show();
			$('#lomake').hide();
			$('#loading').hide();
		}).fail(function(error) {
			$('#ilmoittautuminen').prop("disabled",false);
			console.log(error);
			$('.error').show();
			$('#loading').hide();			
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