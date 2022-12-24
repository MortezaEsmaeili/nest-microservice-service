import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './event/CreateUserMessage';

@Injectable()
export class AppService {
  private readonly users: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  handleCreateUser(data: CreateUserEvent) {
    this.users.push({ email: data.email, timestamp: new Date() });
    console.log('handleUserCreated - COMMUNICATIONs', data);
  }

  handelGetAllUser() {
    return this.users;
  }
}
