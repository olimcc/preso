var source = "<p>Hello, my name is {{name}}";
var template = Handlebars.compile(source);

var data = {"name": "Oli"};
var result = template(data);

var elem = document.getElementById('demo');
elem.innerHTML = result;