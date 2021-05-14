import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';

@Injectable()
export class PaymentService implements OnModuleInit{
  constructor(
    @Inject('KAFKA_SERVICE')
    private clientKafka: ClientKafka,
  ) {}

  async onModuleInit() {
    this.clientKafka.subscribeToResponseOf('valida_alguma_coisa');
  }

  @MessagePattern('loja.novo-pedido')
  consumePedido(@Payload() message) {
    console.log(message);
  }
}
