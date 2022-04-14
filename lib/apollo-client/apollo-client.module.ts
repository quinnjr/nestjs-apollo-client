import { Module } from '@nestjs/common';
import { ApolloClientService } from './apollo-client.service';

@Module({
  providers: [ApolloClientService]
})
export class ApolloClientModule {}
