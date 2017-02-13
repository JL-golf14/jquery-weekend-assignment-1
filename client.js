$(document).ready(function(){
  // Creating an event listener, something to check if clickMe
  // has had anything happen to it. 'click' says pay attention to clicks
  $('#clickMe').on('click', function(){
    var firstName = $('#firstName').val(); // gets value in firstName input box
    var idNumber = $('#idNumber').val(); // gets value in middleName input box
    var lastName = $('#lastName').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();
    var monthlySalary = $('#annualSalary').val()/parseInt(12);
    var totalGroupSalary = $('#totalMonthlySalary').val() + monthlySalary;

    $('#nameContainer').append('<div id="fullList">' + '<p>' + firstName + " " + lastName + "  " + idNumber + "  " +
    jobTitle + "  " +"<div class='annualSalary'>" + annualSalary +  "  " + '</div class="annualSalary">' +
    '<button class="deleteButton">Delete</button></p>' + "</div id='fullList'" + '<br>');

var total_price=0;
    $("#totalMonthlySalary").each(function(){
    total_price += parseInt($(this).val());
    });
    $('#totalMonthlySalary').append(parseInt(totalGroupSalary));

    // function getTotal(){
    //     var totalGetSalary = 0;
    //     $('#totalMonthlySalary').each(function(){
    //         totalGroupSalary += parseFloat(this.innerHTML);
    //     });
    //     $('#totalMonthlySalary').text();

});

$('#employeeResetButton').on('click','#employeeResetButton', function(){
  $('.resetterClass').inputBoxValue().remove();


});



                                                                                                                          // $('#totalSalary').after('<p>'cumulativeMonthlySalary'</p>');
                                                                                                                          // $('#totalSalary').

                                                                                                                              // var resetButton = function() {
                                                                //     document.getElementById("employeeForm").reset(firstName,lastName,idNumber,jobTitle);
                                                                // $('#employeeForm').on('click', function(){
                                                                //   $(this).children().reset();
                                                                // });
$('#nameContainer').on('click', '.deleteButton', function(){
  // $(this) refers to the button that was just clicked (not all of them)
  // console.log($(this));
  $(this).parent().remove();
});
});
