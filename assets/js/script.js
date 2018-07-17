$(document).ready(function () {
  console.log('jQuery up and running')
  // prefill in form with url anchor
  var hashParams = window.location.hash.substr(1).split('&')
  for (var i = 0; i < hashParams.length; i++) {
    var fieldsValue = hashParams[i].split('=')
    if (fieldsValue[0] === 'first_name') {
      document.getElementById('entry_499931445').value = decodeURIComponent(fieldsValue[1])
    } else if (fieldsValue[0] === 'last_name') {
      document.getElementById('entry_789367202').value = decodeURIComponent(fieldsValue[1])
    } else if (fieldsValue[0] === 'email') {
      document.getElementById('entry_1784987729').value = decodeURIComponent(fieldsValue[1])
    }
  }
})
