import 'dotenv/config';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

import { MainSeeder } from './main.seeder';
import { member1669372347132 } from './migrations/1668566358184-member';
import { appConfig } from '@config';
import {
  Code,
  CodeType,
  Data,
  DataTranslation,
  DataType,
  Parameter,
  Post,
  PostTranslation,
  PostType,
  User,
  UserRole,
} from '@model';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: appConfig.DATABASE_HOST,
  port: appConfig.DATABASE_PORT,
  username: appConfig.DATABASE_USER,
  password: appConfig.DATABASE_PASSWORD,
  database: appConfig.DATABASE_NAME,
  entities: [
    Code,
    CodeType,
    User,
    UserRole,
    Data,
    DataTranslation,
    DataType,
    Parameter,
    Post,
    PostTranslation,
    PostType,
  ],
  migrations: [member1669372347132],
  seeds: [MainSeeder],
};
export const AppDataSource = new DataSource(options);
