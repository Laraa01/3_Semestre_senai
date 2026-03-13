const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API Ordem de Serviços',
        description: 'Documentação da API de Ordens de Serviço',
        version: '1.0.0'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Localhost'
        }
    ],
    tags: [
        { name: "Usuários", description: "Operações relacionadas aos usuários" },
        { name: "Departamentos", description: "Operações relacionadas a departamentos" },
        { name: "Ordem de Serviços", description: "Operações relacionadas a ordem de serviços" }
    ],
    paths: {
        "/usuarios": {
            get: {
                tags: ["Usuários"],
                summary: "Listar usuários",
                responses: {
                    200: {
                        description: "Dados Obtidos com sucesso",
                        content: {
                            "aplication/json": {
                                schema: {
                                    type: "array",
                                    items: { Sref: "#/components/schemas/Lista_Usuarios" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Usuários"],
                summary: "Cadastrar novo usuário",
                description: "Recebe nome, email, senha para cadastrar novo usuário",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Usuario"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Usuario cadastrado com sucesso"
                    },
                    400: {
                        description: "Erro na requisição(preencha todos os campos)"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/usuarios/{id_usuario}": {
            put: {
                tags: ["Usuários"],
                summary: "Atualizar usuário completo",
                description: "Atualiza todos os campos de um usuário existente, sendo necessário enviar todos os campos(nome, email, senha)",
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuário a ser atualizado",
                        schema: { type: "integer" },
                        example: 1
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Usuario" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Usuario Atualizado com Sucesso",
                        content: { "application/json": { example: "Usuario Atualizado" } }
                    },
                    404: {
                        description: "Usuario não encontrado",
                        content: { "application/json": { example: "Usuario não encontrado" } }
                    },
                    500: {
                        description: "Erro no servidor"
                    }
                }
            }
        },
        "/departamentos": {
            get: {
                tags: ["Departamentos"],
                summary: "Listar Departamentos",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso",
                        content: {
                            "aplication/json": {
                                schema: {
                                    type: "array",
                                    items: { Sref: "#/components/schemas/Lista_Departamento" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Departamentos"],
                summary: "Cadastrar novo departamento",
                description: "Recebe nome e descrição",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Departamento"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Departamento cadastrado com sucesso"
                    },
                    400: {
                        description: "Erro na requisição(preencha todos os campos)"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/departamentos/{id_departamento}": {
            put: {
                tags: ["Departamentos"],
                summary: "Atualizar departamento completo",
                description: "Atualiza todos os campos de um departamento existente, sendo necessário enviar todos os campos(nome, descrição)",
                parameters: [
                    {
                        name: "id_departamento",
                        in: "path",
                        required: true,
                        description: "ID do departamento a ser atualizado",
                        schema: { type: "integer" },
                        example: 1
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schemas: { $ref: "#/components/schemas/Atualizacao_Departamento" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Departamento Atualizado com Sucesso",
                        content: { "application/json": { example: "Departamento Atualizado" } }
                    },
                    404: {
                        description: "Departamento não encontrado",
                        content: { "application/json": { example: "Departamento não encontrado" } }
                    },
                    500: {
                        description: "Erro no servidor"
                    }
                }
            }
        },

        "/ordem_servicos": {
            get: {
                tags: ["Ordem de Serviços"],
                summary: "Listar Ordem de Serviços",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso",
                        content: {
                            "aplication/json": {
                                schema: {
                                    type: "array",
                                    items: { Sref: "#/components/schemas/Lista_Ordem_Servicos" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Ordem de Serviços"],
                summary: "Cadastrar novo ordem de serviço",
                description: "Recebe nome, email, senha para cadastrar novo usuário",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Ordem_Servico"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Ordem Usuario cadastrado com sucesso"
                    },
                    400: {
                        description: "Erro na requisição(preencha todos os campos)"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/ordem_servicos/{id_ordemServico}": {
            put: {
                tags: ["Ordem de Serviços"],
                summary: "Atualizar ordem de serviço completo",
                description: "Atualiza todos os campos de ordem de seviço existente, sendo necessário enviar todos os campos(nome, email, senha)",
                parameters: [
                    {
                        name: "id_ordemServico",
                        in: "path",
                        required: true,
                        description: "ID de ordem de serviço a ser atualizado",
                        schema: { type: "integer" },
                        example: 1
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schemas: { $ref: "#/components/schemas/Atualizacao_OrdemServico" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Ordem de Serviço Atualizado com Sucesso",
                        content: { "application/json": { example: "Ordem de Serviço Atualizado" } }
                    },
                    404: {
                        description: "Departamento não encontrado",
                        content: { "application/json": { example: "Ordem de erviçonão encontrado" } }
                    },
                    500: {
                        description: "Erro no servidor"
                    }
                }
            }
        },
    },
    components: {
        schemas: {
            Lista_Usuarios: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Ricardo" },
                    email: { type: "string", example: "ricardo@email.com" }
                }
            },

            Cadastro_Usuario: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Ricardo" },
                    email: { type: "string", example: "ricardo@email.com" },
                    senha: { type: "string", example: "Senha123" }
                }
            },

            Cadastro_Departamento: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Sala 3" },
                    description: { type: "string", example: "descrição do departamento" }
                }
            },

            Cadastro_Ordem_Servicos: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    numero_ordem: { type: "integer", example: 1001 },
                    titulo: { type: "string", example: "Trocar cabo de rede" },
                    description: { type: "string", example: "Ponto de rede da sala 3 está sem conexão" },
                    prioridade: { type: "string", example: "media" },
                    status: { type: "string", example: "aberta" },
                    date: { type: "string", example: '2026-02-26' },
                    id_usuario: { type: "integer", example: 1 },
                    id_departamento: { type: "integer", example: 1 }
                }
            },

            Atualizacao_Usuario: {
                type: "object",
                required: ["nome", "email", "senha"],
                properties: {
                    nome: { type: "string", example: "Ricardo" },
                    email: { type: "string", example: "ricardo@email.com" },
                    senha: { type: "string", example: "Senha123" }
                }
            },

            Atualizacao_Departamento: {
                type: "object",
                required: ["nome", "descrição"],
                properties: {
                    nome: { type: "string", example: "Sala 3" },
                    description: { type: "string", example: "descrição do departamento" }
                }
            },

            Atualizacao_OrdemServico: {
                type: "object",
                required: ["nome", "descrição"],
                properties: {
                    id: { type: "integer", example: 1 },
                    numero_ordem: { type: "integer", example: 1001 },
                    titulo: { type: "string", example: "Trocar cabo de rede" },
                    description: { type: "string", example: "Ponto de rede da sala 3 está sem conexão" },
                    prioridade: { type: "string", example: "media" },
                    status: { type: "string", example: "aberta" },
                    date: { type: "string", example: '2026-02-26' },
                    id_usuario: { type: "integer", example: 1 },
                    id_departamento: { type: "integer", example: 1 }
                }
            },

            Lista_Departamento: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "sala 3" },
                    description: { type: "string", example: "Sala do senai 3ºA e B" }
                }

            },
            Lista_Ordem_Servicos: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    numero_ordem: { type: "integer", example: 1001 },
                    titulo: { type: "string", example: "Trocar cabo de rede" },
                    description: { type: "string", example: "Ponto de rede da sala 3 está sem conexão" },
                    prioridade: { type: "string", example: "media" },
                    status: { type: "string", example: "aberta" },
                    date: { type: "string", example: '2026-02-26' },
                    id_usuario: { type: "integer", example: 1 },
                    id_departamento: { type: "integer", example: 1 }
                }
            }
        }
    }
}


export default documentacao