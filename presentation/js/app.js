var DEV_ENDPOINT = 'http://localhost:8000/stubs/foo.json';
var LIVE_ENDPOINT = 'http://localhost:8080/api';

$(function() {

  var source = "Here are some interesting places:<br>" +
               "<ul class='foo'>" +
               "{{#each places}}" +
               "<li>{{this.town}}, {{this.country}} with population {{this.count}}</li>" +
               "{{/each}}" +
               "</ul>";

  var template = Handlebars.compile(source);

  $.ajax({
    url: LIVE_ENDPOINT,
    dataType: 'json',
    success: function(resp) {
      var result = template(resp);
      $('#demo').html(result);
    },
    error: function(e, x) {
      console.log(e, x);
    }
  });

})
