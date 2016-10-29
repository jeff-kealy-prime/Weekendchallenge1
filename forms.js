$(document).ready(function() {
    var array = [];
    var monthlySalaryEx = 0;
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      // initialize a new variable as an empty object
      var values = {};

      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();

      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element, index, array) {
        // review index notation vs. dot notation on objects
        // here, dot notation wouldn't work
        values[element.name] = element.value;
      });

      console.log(values);


      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');

      // append to DOM
      monthlySalaryEx += parseInt(values.yearlysalary);
      appendDom(values, monthlySalaryEx);
    });

    function appendDom(empInfo, salarayTotal) {
      $('table').append('<tr></tr>');
      var $el = $('table').children().last();

      $el.append('<td>' + empInfo.employeefirstname + '</td>');
      $el.append('<td>' + empInfo.employeelastname + '</td>');
      $el.append('<td>' + empInfo.idnumber + '</td>');
      $el.append('<td>' + empInfo.jobtitle + '</td>');
      $el.append('<td>' + empInfo.yearlysalary + '</td>');


      $("#monthlySalaryEx").remove();
      $("#monthlySalRef").append('<p id="monthlySalaryEx">' + (salarayTotal/12) + '</p>');
    }



});
