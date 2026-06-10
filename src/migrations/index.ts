import * as migration_20260610_093054_initial from './20260610_093054_initial';

export const migrations = [
  {
    up: migration_20260610_093054_initial.up,
    down: migration_20260610_093054_initial.down,
    name: '20260610_093054_initial'
  },
];
