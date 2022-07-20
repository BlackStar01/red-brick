import { GoogleStrategy } from './google.auth';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/* import { ServeStaticModule } from '@nestjs/serve-static'; */
import { join } from 'path';
import { DATABASE_CONFIG } from './database.connection';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { authDelay, jwtConstants } from './constant';

@Module({
  imports: [
    TypeOrmModule.forRoot(DATABASE_CONFIG),
    /* ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist'),
    }), */
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: authDelay },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
