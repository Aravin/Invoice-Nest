import { connectionConfig } from 'orm.config';
import { DataSource } from 'typeorm';

export const dataSource = (schemaName: string) => {
  if (schemaName === 'default' || schemaName === '') {
    return new DataSource(connectionConfig);
  } else {
    const newConnectionConfig = {
      ...connectionConfig,
      schema: schemaName,
      autoLoadEntities: true,
      name: schemaName,
    };
    console.log({ newConnectionConfig });
    return new DataSource(newConnectionConfig);
  }
};
