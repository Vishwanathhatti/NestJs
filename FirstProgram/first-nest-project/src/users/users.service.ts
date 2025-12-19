import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class UsersService {
  async getLuc(name: String): Promise<string> {
    const response = await axios.get(`https://api.genderize.io/?name=${name}`);
    return response.data;
  }
}
