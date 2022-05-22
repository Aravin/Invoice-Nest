import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { tenancyMiddleware } from './tenants/tenant.middleware';
import { getConnection, getManager } from 'typeorm';
import { getTenantConnection } from './tenants/tenant.utils';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(tenancyMiddleware);

  await getConnection().runMigrations();

  const schemas = await getManager().query(
    'select schema_name as name from information_schema.schemata;',
  );

  for (let i = 0; i < schemas.length; i += 1) {
    const { name: schema } = schemas[i];

    if (schema.startsWith('tenant_')) {
      const tenantId = schema.replace('tenant_', '');
      const connection = await getTenantConnection(tenantId);
      await connection.runMigrations();
      await connection.close();
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
