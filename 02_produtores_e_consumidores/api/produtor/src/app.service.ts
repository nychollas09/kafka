import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Producer } from '@nestjs/microservices/external/kafka.interface';

@Injectable()
export class AppService implements OnModuleInit{

  private kafkaProducer: Producer;

  constructor(
    @Inject('KAFKA_SERVICE')
    private clientKafka: ClientKafka
  ){}

  async onModuleInit() {
    this.kafkaProducer = await this.clientKafka.connect();
  }

  getHello() {
    this.kafkaProducer.send({
      topic: 'loja.novo-pedido',
      messages: [
        {
          key: String(Math.random()),
          value: JSON.stringify({ 
            id: Date.now(), price: Math.random() 
          })
        }
      ]
    });
  }
}
