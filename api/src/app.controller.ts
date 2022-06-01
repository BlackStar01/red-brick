import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('register')
  async register(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('email') email: string,
    @Body('telephone') telephone: number,
    @Body('address') address: string,
    @Body('password') password: string,
  ) {
    const salt = await bcrypt.genSalt();
    console.log(salt);
    /* const hashPassword = await bcrypt.hash(password, salt, (err, hash) => {
      if (err) return err;

      password = hash;
    }); */

    return this.appService.create({
      firstName,
      lastName,
      email,
      telephone,
      address,
      password,
    });
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const user = await this.appService.findOne({ email });
    if (!user) {
      throw new BadRequestException('No user found ...');
    }
    if (!(password === user.password)) {
      throw new BadRequestException('No user found ...');
    }

    return user;
  }
}
