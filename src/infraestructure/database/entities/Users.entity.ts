import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('users')
export class UsersEntity{

  @PrimaryColumn({ type: 'varchar', length: 100})
  id: string;

  @Column({ type: 'varchar', length: 100})
  username: string;

  @Column({ type: 'varchar', length: 255})
  email: string;

  @Column({ type: 'varchar', length: 100})
  password: string;

  @Column({ type: 'varchar', length: 100})
  mfa_secret: string;

  @Column({ type: 'varchar', length: 20})
  auth_service: string;

  @Column({ type: 'varchar', length: 255})
  auth_data: string;

  @Column({ type: 'json'})
  props: any;

  @Column({ type: 'bigint'})
  create_at: string;

  @Column({ type: 'bigint'})
  update_at: string;

  @Column({ type: 'bigint'})
  delete_at: string;
}