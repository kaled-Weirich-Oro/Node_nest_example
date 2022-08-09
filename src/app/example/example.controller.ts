import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleService } from './example.service';

class Payload {
  num: number;
}
@Controller('example')
export class ExampleController {
  constructor(private readonly ExampleService: ExampleService) {}

  @Get()
  example(): string {
    return this.ExampleService.example();
  }

  @Post('/teste')
  examplePost(@Body() payload: Payload): object {
    return this.ExampleService.examplePost(payload);
  }
}
