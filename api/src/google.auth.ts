import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '731764331151-cs7096n9if6jkkaqed5igaceacmc4ndm.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3005/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, email, photos } = profile;
    const user = {
      email: email[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };
    done(null, user);
  }
}
