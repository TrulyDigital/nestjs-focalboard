import { IsDefined, IsNotEmpty, IsOptional } from "class-validator";

class Option {
  id: string; // length 27
  color: string;
  value: string;
}

export class CardPropertyNewBoardDto{
  id: string; // length 27
  name: string;
  type: string;
  options: Option[];
}

/**
 * 
 * @description
 * Main Dto Object
 * 
 */
export class BoardsDto{

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  id: string; // length 27

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  insert_at: Date;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  team_id: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  channel_id: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  created_by: string; // length 27

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  modified_by: string; // length 27

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  type: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  icon: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  show_description: boolean;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  is_template: boolean;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  template_version: number;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  properties: any;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  card_properties: any;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  create_at: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  update_at: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  delete_at: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  minimum_role: string;
}