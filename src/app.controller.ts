import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserEvent } from './event/CreateUserMessage';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('create_user')
  handleUserCreated(data: CreateUserEvent) {
    console.log('10');
    this.appService.handleCreateUser(data);
  }

  @MessagePattern({ cmd: 'get_all_user' })
  getAnalytics() {
    console.log('6');
    return this.appService.handelGetAllUser();
  }
}
