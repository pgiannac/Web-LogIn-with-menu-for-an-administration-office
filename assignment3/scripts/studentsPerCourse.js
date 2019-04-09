let $form = document.getElementById("select");
$form.addEventListener( "submit", handleSubmit );

// Handle Form Submission (User clicks the submit input button)
function handleSubmit( event ){
  
  event.preventDefault();
  let $studentInput = document.getElementById("student");
  if ( $studentInput.value.length < 3 ){
    console.log( "Input must be more than 3 chars.")    
  } else {
    $form.submit();
  }
  
}

// Handle <select> change:
let $select = document.getElementById("courses");

$select.addEventListener( "change", handleSelect );

function handleSelect( event ){
  // console.log( this.options ); 
  document.getElementById("courseId").value = "205";
}