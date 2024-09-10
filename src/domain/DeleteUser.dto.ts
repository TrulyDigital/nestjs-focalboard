import { IsDefined, IsNotEmpty, IsOptional } from "class-validator";

export class DeleteUserDto{

  @IsDefined()
  @IsNotEmpty()
  @IsOptional()
  process: string;

  @IsDefined()
  @IsNotEmpty()
  user_id: string;

  @IsDefined()
  @IsNotEmpty()
  user_name: string;
}