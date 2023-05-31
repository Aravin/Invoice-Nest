import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { tenancyMiddleware } from './tenants/tenant.middleware';
import { getTenantConnection } from './tenants/tenant.utils';
import { dataSource } from 'orm-data-connection';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(tenancyMiddleware);

  const conn = await dataSource('default').initialize();
  // await conn.synchronize();
  await conn.runMigrations();

  const schemas = await conn.query(
    'select schema_name as name from information_schema.schemata;',
  );

  for (let i = 0; i < schemas.length; i += 1) {
    const { name: schema } = schemas[i];

    if (schema.startsWith('tenant_')) {
      const connection = await getTenantConnection(schema);
      console.log({
        isConnectionActive: connection.isInitialized,
        schema: connection.driver.schema,
      });
      // await connection.synchronize();
      await connection.runMigrations();
      await connection.destroy();
    }
  }

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.enableCors();
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('Invoice Nest')
    .setDescription('Invoice Nest OpenAPI Spec')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
