import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  example(): string {
    return 'Este é um examplo de requisição get no nestJs';
  }

  examplePost(payload): object {
    if (payload.num == 1) {
      return { Post: 'ok' };
    } else {
      return { Post: 'Seu num não é 1' };
    }
  }
}
