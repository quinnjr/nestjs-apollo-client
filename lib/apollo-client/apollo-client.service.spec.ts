import { Test, TestingModule } from '@nestjs/testing';
import { ApolloClientService } from './apollo-client.service';

describe('ApolloClientService', () => {
  let service: ApolloClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApolloClientService],
    }).compile();

    service = module.get<ApolloClientService>(ApolloClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
