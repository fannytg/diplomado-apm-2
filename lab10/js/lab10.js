$(document).ready(function(){

function Validate(){};

  Validate.prototype = {
    email : function(email){
      var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
      return pattern.test(email);
    },
    userid : function(uid){
      var pattern = new RegExp(/^[0-9]+$/);
      return pattern.test(uid);
    }
  };

  $('.nid-error').addClass('error');
  $('.nid-error').hide();
  $('.user-error').addClass('error');
  $('.user-error').hide();
  $('.password-error').addClass('error');
  $('.password-error').hide();
  $('.conf-password-error').addClass('error');
  $('.conf-password-error').hide();
  $('.email-error').addClass('error');
  $('.email-error').hide();
  $('.food-error').addClass('error');
  $('.food-error').hide();
  $('.pay-error').addClass('error');
  $('.pay-error').hide();
  $('.city-error').addClass('error');
  $('.city-error').hide();
  $('#buttons #info').remove();


  $('.button').bind('click', function(event){

  	var validate = new Validate();

  	var data = $('#nid').val();

  	if(validate.userid(data)){
      $('#nid').next().hide();
      $('.nid-error').next().hide();
      localStorage.setItem('nid', data);
    }
    else{
      $('#nid').next().show();
      $('input#nid').addClass('error');
      $('.nid-error').next().show();
      $('.nid-error').text('Indique su Documento de Identidad');
    }

  });

});