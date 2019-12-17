import hashlib
import json
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:1598753@localhost/runedb2'
#postgresql:usuario:senha@host/nomedobanco

# pip install -U Flask-SQLAlchemy
# pip install -U Flask-Migrate	
# pip install -U psycopg2
# pip install -U flask-login
db = SQLAlchemy();
db.init_app(app);

from models import Usuario

with app.app_context():
	db.create_all();

login_manager = LoginManager();
login_manager.init_app(app);


def create_user(data):
	db.session.add(Usuario(nome = data['nome'],
						   cpf = data['cpf'],
						   telefone = data['telefone'],
						   email = data['email'],
						   senha = hashlib.sha512(data['senha']).hexdigest()));
	return '';

@app.route("/")
def hello():
	userdata = { 'nome' : 'felipe', 'cpf': '1474028725', 'telefone': '984211251', 
			    'email':'fcv@icomp.ufam.edu.br', 'senha':'123'}
	
	#createUser(userdata);
	#db.session.commit();
	return auth_user();

@app.route("/auth")
def auth_user():
	user = Usuario.query.filter_by(nome=flask.request.args.post('nome'),
								   senha=hashlib.sha512(flask.request.args.post('senha')).hexdigest()).first();

	if user == None:
		return "False";
		print('>login.. Failed!');
	else:
		login_user(user);
		print('>login..'+json.dumps(user));
		return json.dumps({
				"id"	: user.id,
				"nome"	: user.nome
			});

# @app.route("/webservice/vendas")
# def hello():
# 	return "hello world";

# @app.route("/webservice/produtos")
# def hello():
# 	return "hello world";

# @app.route("/webservice/produtos")
# def hello():
# 	return "hello world";	