import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('boards')
export class BoardsEntity{

  @PrimaryColumn({type: 'varchar', length: 36})
  id: string;

  @Column({ type: 'timestamptz'})
  insert_at: Date;

  @Column({ type: 'varchar', length: 36 })
  team_id: string;

  @Column({ type: 'varchar', length: 36 })
  channel_id: string;  

  @Column({ type: 'varchar', length: 36 })
  created_by: string;

  @Column({ type: 'varchar', length: 36 })
  modified_by: string;

  @Column({ type: 'varchar', length: 36 })
  type: string;

  @Column({ type: 'text'})
  title: string;   

  @Column({ type: 'text'})
  description: string;

  @Column({ type: 'varchar', length: 256 })
  icon: string;  

  @Column({ type: 'boolean'})
  show_description: boolean;

  @Column({ type: 'boolean'})
  is_template: boolean;

  @Column({ type: 'integer'})
  template_version: number;

  @Column({ type: 'json'})
  properties: any;

  @Column({ type: 'json'})
  card_properties: any;

  @Column({ type: 'bigint'})
  create_at: string;

  @Column({ type: 'bigint'})
  update_at: string;

  @Column({ type: 'bigint'})
  delete_at: string;

  @Column({ type: 'varchar', length: 36 })
  minimum_role: string;
}