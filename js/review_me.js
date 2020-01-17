// var form_data = new FormData();
// var groupId = $.trim($("#reviewForm").val());

// var name = $("#name").val();
// var email = $("#email").val();
// var position = $("#position").val();
// var message = $("#message").val();

// form_data.append("name", name);
// form_data.append("email", email);
// form_data.append("position", position);
// form_data.append("message", message);

// $.ajax({        
//   url:"../review/review_me.php",
//         method:"POST",
//         data: form_data,
//         contentType: false,
//         cache: false,
//         processData: false,
//      beforeSend:function(){     
//       // alert("wow");      
//        //Do stuff before the data is sent
//      },  
//      success:function(data) {
//           //Do stuff
//           console.log("asdfghjk")
//           alert("wow");  
//           alert(data);
//      }  
// });

$(function() {

    $("#reviewForm input,#reviewForm textarea").jqBootstrapValidation({
      preventSubmit: true,
      submitError: function($form, event, errors) {
        // additional error messages or events
      },
      submitSuccess: function($form, event) {
        event.preventDefault(); // prevent default submit behaviour
        // get values from FORM
        var name = $("input#name").val();
        var email = $("input#email").val();
        var position = $("input#position").val();
        var message = $("textarea#message").val();
        var firstName = name; // For Success/Failure Message
        // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
          firstName = name.split(' ').slice(0, -1).join(' ');
        }
        var form_data = new FormData();

        form_data.append("name", name);
        form_data.append("email", email);
        form_data.append("position", position);
        form_data.append("message", message);
        $this = $("#sendMessageButton");
        $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate message
        $.ajax({
          url: "../review/review_me.php",
          type: "POST",
          data: {
            name: name,
            position: position,
            email: email,
            message: message
          },
          cache: false,
          success: function(data_returned) {
            // Success message
            alert('wow');
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>");
            $('#success > .alert-success')
              .append("<strong>Your message has been sent. </strong>");
            $('#success > .alert-success')
              .append('</div>');
            //clear all fields
            $('#contactForm').trigger("reset");
          },
          // error: function() {
          //   // Fail message
          //   $('#success').html("<div class='alert alert-danger'>");
          //   $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
          //     .append("</button>");
          //   $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          //   $('#success > .alert-danger').append('</div>');
          //   //clear all fields
          //   $('#contactForm').trigger("reset");
          // },
          complete: function(data_returned) {
            // alert(data_returned);

            setTimeout(function() {
              $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
            }, 1000);

            var message_div = '<div class="item"><ul class="testimony-wrap"><li class="text bg-light p-4" id=""><span class="quote d-flex align-items-center justify-content-center"><i class="icon-quote-left"></i></span><p>' + data_returned + '.</p><p class="name">Racky Henderson</p><span class="position">Farmer</span></li></ul></div>';
            $(".carousel-testimony owl-carousel").append(message_div);
          }
        });
      },
      filter: function() {
        return $(this).is(":visible");
      },
    });
  
    $("a[data-toggle=\"tab\"]").click(function(e) {
      e.preventDefault();
      $(this).tab("show");
    });
  });
  
  /*When clicking on Full hide fail/success boxes */
  $('#name').focus(function() {
    $('#success').html('');
  });
  

