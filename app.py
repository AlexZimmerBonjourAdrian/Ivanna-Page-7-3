import os
from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "storytelling-microtales-secret")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/microtales')
def microtales():
    return render_template('microtales.html')

@app.route('/story-formats')
def story_formats():
    return render_template('story_formats.html')

@app.route('/interactive-guide')
def interactive_guide():
    return render_template('interactive_guide.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
