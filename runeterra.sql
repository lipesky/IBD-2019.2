/*******************
	  TABELAS
********************/
create table empresa (
	razao_social varchar (100),
	nome_fantasia varchar (100),
	cnpj varchar (14)
);

create table usuario (
	id integer primary key,
	nome varchar(50),
	email varchar(50),
	telefone char(13),
	senha char(128)
);

create table permissao (
	id integer primary key,
	descricao varchar(80)
);

create table usuario_permissao (
	id_usuario integer foreign key references usuario (id),
	id_permissao integer foreign key references permissao (id)
);

create table vendedor (
	id_usuario integer foreign key references usuario (id),
	perc_comissao numeric (5,3),
	perc_desconto numeric (6,3)
);

create table produto (
	id integer primary key,
	descricao varchar(100),
	preco numeric(18,3)
);

create table categoria (
	id integer primary key,
	descricao varchar(100)
);

create table produto_categoria (
	id_produto integer foreign key produto (id),
	id_categoria integer foreign key categoria (id)
);

create table estoque (
	id_produto integer foreign key references produto (id),
	quantidade integer	
);

create table venda (
	id integer primary key,
	id_usuario integer foreign key references usuario (id),
	data_venda timestamp
);

create table venda_item (
	id_venda integer foreign key references venda (id),
	id_produto integer foreign key references produto (id),
	quantidade integer,
	valor numeric (18,3),
	desconto numeric(6,3)
);

/*******************
	  TRIGGERS
********************/
