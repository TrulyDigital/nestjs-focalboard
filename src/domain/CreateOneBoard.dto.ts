import { IsDefined, IsNotEmpty } from "class-validator";

export class CreateOneBoardDto{

  @IsDefined()
  @IsNotEmpty()
  user_id: string;

  @IsDefined()
  @IsNotEmpty()
  title: string;

  @IsDefined()
  @IsNotEmpty()
  tareas_padre: string[];
}