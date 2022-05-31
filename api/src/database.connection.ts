import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

export const DATABASE_CONFIG: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'redbrick',
  entities: [User],
  synchronize: true,
};
