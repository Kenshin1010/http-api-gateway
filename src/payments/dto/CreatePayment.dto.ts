import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePaymentsDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  userId: string;
}
