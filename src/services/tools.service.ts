import { Injectable } from "@nestjs/common";
import { fromZonedTime, format } from 'date-fns-tz';

@Injectable()
export class ToolsService{

  headArray<T>(array: Array<T>): T{
    return array[0];
  }

  generateRandomString(length: number): string{

    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
  }

  getCurrentDate(): string{
    const date = new Date();
    const timeZone: string = 'America/Bogota';
    const utcDate = fromZonedTime(date, timeZone);
    const formatDate = format(utcDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", { timeZone });
    return formatDate;
  }
}