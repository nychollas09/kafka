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

```bash
# Produzindo um tópico

# "--broker-list" = Especifica o broker que vai ser utilizado

kafka-console-producer --broker-list localhost:19092 --topic loja.novo-pedido

# Consumindo um tópico

kafka-console-consumer --bootstrap-server localhost:19092 --topic loja.novo-pedido
```
