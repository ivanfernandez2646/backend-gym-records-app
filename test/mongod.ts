import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongod: MongoMemoryServer;

export const initMongoD = (options?: MongooseModuleOptions) => {
  return MongooseModule.forRootAsync({
    useFactory: async () => {
      mongod = await MongoMemoryServer.create();
      const uri = mongod.getUri();
      return {
        uri: uri,
        ...options,
      };
    },
  });
};

export const closeMongoD = async () => {
  if (mongod) {
    await mongod.stop();
  }
};

export const getMongoD = (): MongoMemoryServer => {
  return mongod;
};
