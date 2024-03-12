import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
	@ApiProperty({example: 'Pavlo'})
	@IsNotEmpty()
	readonly username: string;

	@ApiProperty({example: 'qwerty123'})
	@IsNotEmpty()
	readonly password: string;

    @ApiProperty({example: 'pavlo@mail.com'})
    @IsNotEmpty()
	readonly email: string;


}