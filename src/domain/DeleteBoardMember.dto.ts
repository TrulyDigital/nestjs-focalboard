import { IsDefined, IsNotEmpty } from "class-validator";

export class DeleteBoardMemberDto{

  @IsDefined()
  @IsNotEmpty()
  board_id: string;

  @IsDefined()
  @IsNotEmpty()
  user_id: string;
}