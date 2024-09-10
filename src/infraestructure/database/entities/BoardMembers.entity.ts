import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('board_members')
export class BoardMembersEntity{

  @PrimaryColumn({type: 'varchar', length: 36})
  board_id: string;

  @Column({ type: 'varchar', length: 36 })
  user_id: string;

  @Column({ type: 'varchar', length: 64 })
  roles: string;

  @Column({ type: 'boolean'})
  scheme_admin: boolean;

  @Column({ type: 'boolean'})
  scheme_editor: boolean;

  @Column({ type: 'boolean'})
  scheme_commenter: boolean;

  @Column({ type: 'boolean'})
  scheme_viewer: boolean;
}