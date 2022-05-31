import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/* import { ServeStaticModule } from '@nestjs/serve-static'; */
import { join } from 'path';
import { DATABASE_CONFIG } from './database.connection';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(DATABASE_CONFIG),
    /* ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist'),
    }), */
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
