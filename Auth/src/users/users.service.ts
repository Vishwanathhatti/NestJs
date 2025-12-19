import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  async createUser(email: string, password: string, name: string) {
    const user = new this.userModel({ email, password, name });
    return user.save();
  }

  async findById(userId: string) {
  return this.userModel.findById(userId).select('-password');
}

}
