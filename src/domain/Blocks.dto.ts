import { IsDefined, IsNotEmpty, IsOptional } from "class-validator";

class FilterDto{
  filters: any[];
  operation: string;
}

class FieldsDto{
  cardOrder: any[];
  collapsedOptionIds: any[];
  columnCalculations: any;
  columnWidths: any;
  defaultTemplateId: string;
  filter: FilterDto;
  hiddenOptionIds: string[];
  kanbanCalculations: any;
  sortOptions: any[];
  viewType: string;
  visibleOptionIds: string[];
  visiblePropertyIds: any[];
}


/**
 * 
 * @description
 * Main Dto Object
 * 
 */
export class BlocksDto{

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  id: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  insert_at: Date;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  parent_id: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  schema: string;

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
  fields: FieldsDto;

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
  root_id: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  modified_by: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  channel_id: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  created_by: string;

  @IsOptional()
  @IsDefined()
  @IsNotEmpty()
  board_id: string;
}