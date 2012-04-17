$(function() {

  var source = "Here are some interesting places:<br>" +
               "<ul class='foo'>" +
               "{{#each places}}" +
               "<li>{{this.county}}, {{this.country}} with population {{this.count}}</li>" +
               "{{/each}}" +
               "</ul>";

  var template = Handlebars.compile(source);

  $.ajax({
    url: 'http://localhost:8000/stubs/foo.json',
    dataType: 'json',
    success: function(resp) {
      console.log(resp);
      var result = template(resp);
      $('#demo').html(result);
    },
    error: function(e, x) {
      console.log(e, x)
    }
  });

})
