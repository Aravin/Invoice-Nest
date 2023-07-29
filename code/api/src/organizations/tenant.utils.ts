import { dataSource } from 'orm-data-connection';
import { DataSource } from 'typeorm';

export async function getTenantConnection(
  tenantId: string,
): Promise<DataSource> {
  const connectionManager = dataSource(tenantId);

  if (connectionManager.isInitialized) {
    return await connectionManager;
  }

  return await connectionManager.initialize();
}
