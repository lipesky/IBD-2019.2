/*******************
	  TABELAS
********************/
create table usuario (
	id_usuario integer primary key,
	nome varchar (50),
	cpf char (11),
	telefone char (13),
	email varchar (50),
	senha char (128)
);

create table permissao (
	id_permissao integer primary key,
	descricao varchar (80)
);

create table vendedor (
	id_vendedor integer foreign key references usuario (id_usuario),
	perc_desconto numeric (6,3)
	perc_comissao numeric (5,3),
);


create table venda (
	id_venda integer primary key,
	id_vendedor integer foreign key references usuario (id_vendedor),
	data_venda timestamp
);

create table item_venda (
	id_produto integer foreign key references produto (id_produto),
	id_venda integer foreign key references venda (id_venda),
	quantidade integer,
	valor numeric (18,3),
	desconto numeric(6,3)
);

create table produto (
	id_produto integer primary key,
	codigo_de_barra varchar (13),
	nome varchar (100),
	peso numeric (8,3),
	unidade varchar (5),
	preco numeric (18,3)
);

create table categoria (
	id_categoria integer primary key,
	nome varchar (100)
);

create table estoque (
	id_produto integer foreign key references produto (id_produto),
	quantidade integer	
);

create table empresa (
	razao_social varchar (100),
	nome_fantasia varchar (100),
	endereco varchar (255),
	cnpj char (14)
);

create table usuario_permissao (
	id_usuario integer foreign key references usuario (id_usuario),
	id_permissao integer foreign key references permissao (id_permissao)
);

create table produto_categoria (
	id_produto integer foreign key produto (id_produto),
	id_categoria integer foreign key categoria (id_categoria)
);

/*******************
	  TRIGGERS
********************/
