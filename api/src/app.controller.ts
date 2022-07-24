import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

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
    const hashPassword = await bcrypt.hash(password, 12);

    const user = await this.appService.create({
      firstName,
      lastName,
      email,
      telephone,
      address,
      password: hashPassword,
    });

    delete user.password;

    return user;
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
    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Incorrect password ');
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });
    response.cookie('jwt', jwt, { httpOnly: true });

    return jwt;
  }

  @Get('user')
  async getCurrentUser(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie);
      const user = await this.appService.findOne({ id: data['id'] });
      return user.firstName + ' ' + user.lastName;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  @Get('auth')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req);
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');

    return {
      message: 'Logout successfully',
    };
  }
}
