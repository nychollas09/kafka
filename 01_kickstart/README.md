# Kickstart

## Comandos básicos

```bash
# Criando um tópico

# "--create" = Especifica a criação de um tópico
# "--bootstrap-server" = Especifica o broker onde o tópico vai ser criado
# "--topic" = Especifica nome do tópico a ser criado
kafka-topics --create --bootstrap-server localhost:19092 --replication-factor 1 --partitions 1 --topic loja.novo-pedido
```

```bash
# Listando os tópicos

kafka-topics --list --bootstrap-server localhost:19092
```
