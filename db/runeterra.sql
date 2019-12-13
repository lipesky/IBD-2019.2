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
	id_vendedor integer,
	perc_desconto numeric (6,3),
	perc_comissao numeric (5,3),
	foreign key (id_vendedor) references usuario (id_usuario)
);


create table venda (
	id_venda integer primary key,
	id_vendedor integer,
	data_venda timestamp,
	foreign key (id_vendedor) references usuario (id_usuario)
);

create table categoria (
	id_categoria integer primary key,
	nome varchar (100)
);

create table produto (
	id_produto integer primary key,
	id_categoria integer,
	codigo_de_barras varchar (13),
	nome varchar (100),
	peso numeric (8,3),
	unidade varchar (5),
	preco numeric (18,3),
	foreign key (id_categoria) references categoria (id_categoria)
);

create table estoque (
	id_produto integer,
	quantidade integer,
	foreign key (id_produto) references produto (id_produto)	
);

create table empresa (
	razao_social varchar (100),
	nome_fantasia varchar (100),
	endereco varchar (255),
	cnpj char (14)
);

create table item_venda (
	id_produto integer,
	id_venda integer ,
	quantidade integer,
	valor numeric (18,3),
	desconto numeric(6,3),
	foreign key (id_produto) references produto (id_produto),
	foreign key (id_venda) references venda (id_venda)
);

create table usuario_permissao (
	id_usuario integer,
	id_permissao integer,
	foreign key (id_usuario) references usuario (id_usuario),
	foreign key (id_permissao) references permissao (id_permissao)
	
);

create table produto_categoria (
	id_produto integer,
	id_categoria integer,
	foreign key (id_produto) references produto (id_produto),
	foreign key (id_categoria) references categoria (id_categoria)
);

/*******************
	  TRIGGERS
********************/

