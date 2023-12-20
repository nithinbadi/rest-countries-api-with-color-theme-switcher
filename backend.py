from flask import render_template,request,Flask,jsonify
import json
app = Flask(__name__,template_folder='templates')

@app.route('/')
def index():
    
    return render_template('index.html')

@app.route('/details/<c>')
def details(c):

    return jsonify({c:c})

if __name__== '__main__':
    app.run(debug=True)