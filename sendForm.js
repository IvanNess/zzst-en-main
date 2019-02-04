      var msg;
      var nameId;
      var email;
      var form;
      var text;
      var textLength;
 	  function call() {
 	    msg   = $('#formx').serialize();
 	    nameId = $('#nameId').val();
 	    emailId = $('#emailId').val();
 	    form = $('#formx');
 	    text = document.getElementById('textAreaId');
 	    textLength = text.value.trim().length;
 	    if ((nameId.length !== 0) && (emailId.indexOf('@', 0) !== -1) && (textLength !== 0)){
          $.ajax({
            type: 'POST',
            url: 'email.php',
            data: msg,
            success: function(data) {
              $('#result').html("Спасибо! Ваше сообщение отправлено!").fadeIn();
              $('#nameResult').html('');
              $('#emailResult').html('');
              text.setAttribute('placeholder', 'Сообщение');
              text.value = '';
              $('#textAreaResult').html('');
              $('#result').fadeOut(10000);
            },
            error:  function(xhr, str){
	          alert('Возникла ошибка: ' + xhr.responseCode);
            }
          });
 	    } else{
 	        if (nameId.length === 0){
 	          $('#nameResult').html('<p>Необходимо ввести ваше имя</p>');
 	        } else{
 	          $('#nameResult').html('');
 	        }
 	        if (emailId.indexOf('@', 0) === -1){
 	          $('#emailResult').html('<p>Введите корректный e-mail</p>');
 	        } else{
 	          $('#emailResult').html('');
 	        }
 	        if (textLength === 0){
 	          $('#textAreaResult').html('<p>Введите непустое сообщение</p>');
 	          text.value = '';
  	        } else{
 	          text.setAttribute('placeholder', 'Сообщение');
 	          $('#textAreaResult').html('');
 	        }
 	    }
  	 }