import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'KAFKA_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client:{
          brokers: ['host.docker.internal:19094']
        },
        consumer: {
          groupId: `produtor-consumer-${Date.now()}`
        }
      }
    }
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
