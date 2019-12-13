from datetime import datetime
from app import db

class Venda(db.Model):
	__tablename__ = 'venda';

	id_venda = db.Column(db.Integer, primary_key = True);
	id_vendedor = db.Column(db.Integer, db.ForeignKey('id_vendedor')); 
	data_venda = db.Column(db.DateTime);

	def __init__(self, id_vendedor, data_venda):
		self.id_vendedor		= id_vendedor
		self.data_venda			= data_venda

	def serialize(self):
		return {
			'venda'				: self.id_venda,
			'vendedor'   		: self.id_vendedor,
			'data'				: self.data_venda
		}