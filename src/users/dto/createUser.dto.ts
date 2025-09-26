import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export default CreateUserDto;
