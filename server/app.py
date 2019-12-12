import hashlib
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:1598753@localhost/runedb'
db = SQLAlchemy(app);

from models import Usuario
def createUser(data):
	db.session.add(Usuario(nome = data['nome'],
						   cpf = data['cpf'],
						   telefone = data['telefone'],
						   email = data['email'],
						   senha = hashlib.sha512(data['senha']).hexdigest()));
	return '';

def createProduto():
	return '';

@app.route("/")
def hello():
	userdata = { 'nome' : 'felipe', 'cpf': '1474028725', 'telefone': '984211251', 
			    'email':'fcv@icomp.ufam.edu.br', 'senha':'123'}
	
	createUser(userdata);
	db.session.commit();
	usuarios = Usuario.query.all();
	return repr(usuarios);

# @app.route("/webservice/vendas")
# def hello():
# 	return "hello world";

# @app.route("/webservice/produtos")
# def hello():
# 	return "hello world";

# @app.route("/webservice/produtos")
# def hello():
# 	return "hello world";	