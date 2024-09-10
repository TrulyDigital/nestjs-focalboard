import { IsDefined, IsNotEmpty, IsOptional } from "class-validator";

export class UsersDto{

  @IsDefined()
  @IsNotEmpty()
  @IsOptional()
  id: string;

  @IsDefined()
  @IsNotEmpty()
  @IsOptional()
  username: string;

  @IsDefined()
  @IsNotEmpty()
  @IsOptional()
  email: string;

  @IsDefined()
  @IsNotEmpty()
  @IsOptional()
  password: string;

  @IsDefined()
  @IsNotEmpty()
  @IsOptional()
  mfa_secret: string;

  @IsDefined()
  @IsNotEmpty()
  @IsOptional()
  auth_service: string;

  @IsDefined()
  @IsNotEmpty()
  @IsOptional()
  auth_data: string;

  @IsDefined()
  @IsNotEmpty()
  @IsOptional()
  props: any;
  create_at: string;

  @IsDefined()
  @IsNotEmpty()
  @IsOptional()
  update_at: string;

  @IsDefined()
  @IsNotEmpty()
  @IsOptional()
  delete_at: string;
}