import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private jwtService: JwtService,
  ) {}

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
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.appService.findOne({ email });
    if (!user) {
      throw new BadRequestException('No user found ...');
    }
    if (!(password === user.password)) {
      throw new BadRequestException('No user found ...');
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });
    response.cookie('jwt', jwt, { httpOnly: true });

    return {
      message: 'Login with success',
    };
  }

  @Get('user')
  async getCurrentUser(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie); // there is a probleme here
      const user = await this.appService.findOne({ id: data['id'] });
      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
