$(document).ready(function(){



// Saves options to chrome.storage
function save_options() {
  // settings hit; don't want to show the popup again!
  addSettingsHit(5);
  var tabs = document.getElementById('tabs').checked;
  var cookies = document.getElementById('cookies').checked;
  chrome.storage.sync.set({
    askedForTabs: tabs,
    askedForCookies: cookies
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
  setTimeout( function() {
    close();
  }, 2000);
}

// permissions prompt
function ask_permissions() {
  var permissionsFor = $(this).attr('id');
  console.log('permissionsFor: ' + permissionsFor);
  if (permissionsFor === 'tabs') {
    if($(this).is(':checked')) {
      requestTabPermissions();
    } else {
      removeTabPermissions();
    }
  }
  
  if (permissionsFor === 'cookies') {
    if ($(this).is(':checked')) {
      requestCookiePermissions();
    } else {
      removeCookiePermissions();
    }
  }
} // ask_permissions

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.local.get({
    'showNewTabsDeals':true,
    'showDeals': true,
    'showNotifications': true,
    'emmy': '',
    'emailFreq': 'Once per week'
  }, function(items) {
    // document.getElementById('tabs').checked = items.tabsPerm;
    // document.getElementById('cookies').checked = items.cookiesPerm;
    $('#email').val(items.emmy);
    $('#freq').val(items.emailFreq);
    $('#deals').prop('checked', items.showDeals);
    $('#notifications').prop('checked', items.showNotifications);
    $('#new_tab_deals').prop('checked',items.showNewTabsDeals);
  });
  
}


$('#save').click(save_options);
$('#cookies').click(ask_permissions);
$('#tabs').click(ask_permissions);


/*
  Vamped Settings page 

*/

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateEmailFreq(freq_tex) {
  switch(freq_tex) {
    case 'Once per week':
      return true;
      break;
    case 'Once per month':
      return true;
      break;
    case 'Never send me emails':
      return true;
      break;
    default:
      return false;
  }
}

function show_error(kind) {
  switch(kind) {
    case 'email':
      $('div.email').append('<p class="error-msg">Invalid email address. Please try again.');
      break;
    case 'freq':
      $('div.email').append('<p class="error-msg">Invalid frequency setting. Please try again.');
      break;
    default:
      return;
  }
}

function update_settings() {
  // remove any sort of messages there on page, if any
  $('p.success-msg').remove();
  $('p.error-msg').remove();

  var new_email = $('#email').val();
  var email_freq = $('#freq option:selected').text();
  var show_deals = $('#deals:checkbox:checked').length > 0;
  var show_notifications = $('#notifications:checkbox:checked').length > 0;
  var new_tab_deals= $('#new_tab_deals').prop('checked');

  var return_nosaving = false;

  // if (!validateEmail(new_email)) {
    
  //   show_error('email');
  //   return_nosaving = true;

  // }

  // if (!validateEmailFreq(email_freq)) {
  //   show_error('freq');
  //   return_nosaving = true;
  // }

  // if (return_nosaving) {
  //   return;
  // }


    if ((!validateEmail(new_email)) ) {
      //invalid email
        if(new_email=='' ||new_email==' ' ){
          new_email='';
        }
        else{
          show_error('email');
          return_nosaving = true;

        }

    }

     if (return_nosaving) {
        return;
    }





  // seems everything good. and neat. save.
  chrome.storage.local.set({
    showNewTabsDeals:new_tab_deals,
    showDeals: show_deals,
    showNotifications: show_notifications,
    emmy: new_email,
    emailFreq: email_freq
  }, function() {
    $('.save-area').prepend('<p class="success-msg">Settings saved successfully!</p>');
  });
}

$('.save-btn').click(update_settings);

$(document).ready(restore_options);

});
