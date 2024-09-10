import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('blocks')
export class BlocksEntity{

  @PrimaryColumn({type: 'varchar', length: 36})
  id: string;

  @Column({ type: 'timestamptz'})
  insert_at: Date;

  @Column({ type: 'varchar', length: 36 })
  parent_id: string;

  @Column({ type: 'bigint'})
  schema: string;

  @Column({ type: 'text'})
  type: string;

  @Column({ type: 'text'})
  title: string;

  @Column({ type: 'json'})
  fields: any;

  @Column({ type: 'bigint'})
  create_at: string;

  @Column({ type: 'bigint'})
  update_at: string;

  @Column({ type: 'bigint'})
  delete_at: string;

  @Column({ type: 'varchar', length: 36 })
  root_id: string;

  @Column({ type: 'varchar', length: 36 })
  modified_by: string;

  @Column({ type: 'varchar', length: 36 })
  channel_id: string;

  @Column({ type: 'varchar', length: 36 })
  created_by: string;

  @Column({ type: 'varchar', length: 36 })
  board_id: string;
}