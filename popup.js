//the first line of code states that the script will run only after the page has loaded 
//and the script is ready to be executed.
$(document).ready(function ()  
{
//select the close by class and apply a click even listener
  $(".close").on("click", function () 
	{
		//select the modal element by id , and apply display none when close is clicked
		//this will close the modal on click
		$("#modal").css("display", "none")
	});
  
});

//this code snippet will check if the modal is present or not at the first session / loading
//of the page, and if not then the display property of the modal will be set to block
//and the modal shall appear
if(sessionStorage.getItem('#modal') !== 'true'){
    $('#modal').css('display','block');
//then the modal will be set true in the current session due to which the modal won't 
//reappear on the refresh, we need to reload the page in a new tab to make the modal 
//reappear.
sessionStorage.setItem('#ad_modal','true');
	}