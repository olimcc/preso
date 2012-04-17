from bottle import route, run, static_file
import json

@route('/demo')
def index():
    return static_file('demo.html', root='/Users/oli/src/preso/presentation/')

@route('/js/<filename:path>')
def send_static(filename):
    return static_file(filename, root='/Users/oli/src/preso/presentation/js')

@route('/api')
def api():
  data = {'places': []}
  for e in ('SF', 'Mountain View', 'Napa'):
    someResult = {'town': e, 'county': 'SF', 'country': 'USA', 'count': 100000}
    data['places'].append(someResult)
  return json.dumps(data)

run(host='localhost', port=8080)