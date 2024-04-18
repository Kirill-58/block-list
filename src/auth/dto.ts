import { ApiProperty } from '@nestjs/swagger';

export class SignUpBodyDto {
  @ApiProperty({ example: 'example@example.com' })
  email: string;

  @ApiProperty({ example: 'example' })
  password: string;
}

export class SignInBodyDto {
  @ApiProperty({ example: 'example@example.com' })
  email: string;

  @ApiProperty({ example: 'example' })
  password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;
}
