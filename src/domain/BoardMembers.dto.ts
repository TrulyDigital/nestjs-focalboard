import { IsDefined, IsNotEmpty, IsOptional } from "class-validator";


/**
 * 
 * @description
 * Main Dto Object
 * 
 */
export class BoardMembersDto{

  @IsDefined()
  @IsNotEmpty()
  board_id: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  user_id: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  roles: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  scheme_admin: boolean;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  scheme_editor: boolean;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  scheme_commenter: boolean;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  scheme_viewer: boolean;
}