import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export default LoginUserDto;
