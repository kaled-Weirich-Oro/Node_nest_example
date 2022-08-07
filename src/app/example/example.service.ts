import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  example(): string {
    return 'Este é um examplo de requisição get no nestJs';
  }
}
