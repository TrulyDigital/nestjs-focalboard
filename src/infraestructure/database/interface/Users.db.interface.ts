import { UsersDto } from "src/domain/Users.dto";

export const I_USERS_DB = "I_USERS_DB";

export interface UsersDbInterface{

  /**
   * 
   * @description
   * Develop function
   * 
   */
  find_all_users(): Promise<UsersDto[]>;


  /**
   * 
   * @description
   * Admin function
   * 
   */
  admin_find_user_by_id(
    id: string,
  ): Promise<UsersDto>;


  /**
   * 
   * @description
   * Admin function
   * 
   */
  admin_delete_one_user_by_id(
    id: string,
  ): Promise<void>;
}