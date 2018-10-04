$(document).ready(function() {

	$('input[name=sivustotyyppi]').val(window.location.href.includes("paivallinen") ? "paivallinen" : "illallinen");
	
	$('#peruuttaminen').click(function() {

		$('input[name=peruuttaminen]').val('X');
		ilmoittautuminen();

	});
	
	$('#ilmoittautuminen').click(function() {

		$('input[name=peruuttaminen]').val('');
		ilmoittautuminen();

	});
	
	function ilmoittautuminen(){
				
		$('#ilmovaatimus').hide();
		
		if($('#name').val().trim().length == 0){
			$('#ilmovaatimus').show();
			return
		}
		
		$('.ilmoittautumisnappi').prop("disabled",true);
		$('#loading').show();
		
		$.post("/email", $("#lomake").serialize()).done(function() {
			$('#ilmosuccess').show();
			$('#lomake input, #lomake textarea').prop("disabled", true);
			$('#loading').hide();
			$('.ilmoittautumisnappi').hide();
		}).fail(function(error) {
			$('ilmoittautumisnappi').prop("disabled",false);
			console.log(error);
			$('#ilmoerror').show();
			$('#loading').hide();			
		});
	}

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