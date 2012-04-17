from bottle import route, run, static_file

@route('/demo')
def index():
    return static_file('demo.html', root='/Users/oli/src/preso/presentation/')

run(host='localhost', port=8080)