import { IsDefined, IsNotEmpty } from "class-validator";

export class DeleteBoardById{
  
  @IsDefined()
  @IsNotEmpty()
  id: string;
}