$(document).ready(function(){
  // Creating an event listener, something to check if clickMe
  // has had anything happen to it. 'click' says pay attention to clicks
  $('#submitNewEmployee').on('click', function(){
    var firstName = $('#firstName').val(); // gets value in firstName input box
    var idNumber = $('#idNumber').val(); // gets value in middleName input box
    var lastName = $('#lastName').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();
    // var monthlySalary = $('#annualSalary')/ 12;
    // var totalGroupSalary = $('#totalMonthlySalary').text()+ monthlySalary;

        $('#employeeTableBody').append(
         '<tr>' +
           '<td>'+ firstName + '</td>' +
           '<td>'+ lastName + '</td>' +
           '<td>'+ idNumber + '</td>' +
           '<td>' + jobTitle + '</td>' +
           '<td>' + annualSalary + '</td>' +
           '<td><button class="deleteEmployeeButton" data-salary="' + annualSalary + ' ">Delete ' + firstName + '</button></td>' +
           '</tr>'

     );
//     total_price += parseInt($(this).val());
//     });
var newMonthlyExpenses = annualSalary / 12;
var previousSalaryTotal = $('#monthlyExpenses').text();
var totalMonthlyExpenses = parseFloat(previousSalaryTotal) + newMonthlyExpenses;
$('#monthlyExpenses').text(totalMonthlyExpenses);



$('.employeeFormInput').val('');
    //  $('#totalMonthlySalary').text(parseFloat(totalGroupSalary));


});
                                                          //   $(this).children().reset();                                                // });
$('#employeeTableBody').on('click','.deleteEmployeeButton', function(){
  // $(this) refers to the button that was just clicked (not all of them)
  // console.log($(this));
  var deletedEmployeeSalary = $(this).data('salary');
  var deletedEmployeeExpenses = deletedEmployeeSalary / 12;
  var previousMonthlyExpenses = $('#monthlyExpenses').text();
  var newTotalMonthlyExpenses  = previousMonthlyExpenses - deletedEmployeeExpenses;
  $('#monthlyExpenses').text(newTotalMonthlyExpenses);
  $(this).parent().parent().remove();
});
});
