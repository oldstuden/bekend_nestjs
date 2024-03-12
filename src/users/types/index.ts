import { ApiProperty } from "@nestjs/swagger";

export class LoginUserRequest {
	@ApiProperty({example: 'Pavlo'})
	username: string;

    @ApiProperty({example: 'qwerty123'})
	password: string;
}

export class LoginUserResponse {
	@ApiProperty({
		example: {
			user: {
				userId: 1,
				username: 'Pavlo',
				password: 'qwe123',
			},
		},
	})
	user: {
		userId: number;
		username: string;
		password: string;
	};
	@ApiProperty({example: 'logged in'})
	msg: string;
}

export class LogoutUserResponse {
	@ApiProperty({example: ' session has ended'})
	msg: string;
}

 export class LoginCheckResponse {
		@ApiProperty({example: 1})
		userId: number;

		@ApiProperty({example: 'Pavlo'})
		username: string;

		@ApiProperty({example: 'Pavlo'})
		email: string;
 }

 export class SignupResponse {
	@ApiProperty({example: 1})
	id: number;

	@ApiProperty({example: 'Pavlo'})
	username: string;

	@ApiProperty({example: '$12b$90HAtgd'})
	password: string;

	@ApiProperty({example: 'Pavlo@mail.com'})
	email: string;

    @ApiProperty({example: '2024-03-06 15:11:05'})
	createdAt: string;
	
    @ApiProperty({example: '2024-03-06 15:11:05'})
	updatedAt: string;
 }