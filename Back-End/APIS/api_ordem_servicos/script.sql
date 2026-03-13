CREATE TABLE USUARIOS(
  id_usuario SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  senha VARCHAR(255) NOT NULL
);

CREATE TABLE DEPARTAMENTO(
  id_departamento SERIAL primary key,
  nome VARCHAR(100) NOT NULL,
  descricao VARCHAR(200) NOT NULL
);

CREATE TABLE ORDEM_SERVICOS (
  id_ordem SERIAL PRIMARY KEY,
  numero_ordem INT UNIQUE,
  titulo VARCHAR(100) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  prioridade VARCHAR(100) NOT NULL,
  status VARCHAR(100) NOT NULL,
  data DATE NOT NULL,
  id_usuario INT NOT NULL REFERENCES USUARIOS(id_usuario),
  id_departamento INT NOT NULL REFERENCES DEPARTAMENTO(id_departamento)
);

INSERT INTO USUARIOS(nome, email, senha) VALUES('Ana Silva', 'ana.silva@email.com', 'senha123');
INSERT INTO USUARIOS(nome, email, senha) VALUES('Marco Costa', 'marco.costa@email.com', 'senha123');

INSERT INTO departamento(nome, descricao) VALUES('sala 3', 'Sala do senai 3º A e B');
INSERT INTO departamento(nome, descricao) VALUES('TI', 'Tecnologia de Informação');

INSERT INTO ordem_servicos(numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento)
VALUES (1001, 'Trocar cabo de rede', 'Ponto de rede da sala 3 está sem conexão', 'media', 'aberta', '2026-02-26', 1, 1),
 (1002, 'Consertar ar-condicionado', 'Unidade do laboratório parou de gelar', 'alta', 'em_andamento', '2026-02-26', 2, 2);