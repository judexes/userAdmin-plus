
export interface User {
	id?: string;
	email: string;
	password: string;
	validated?: boolean;
	admin?: boolean;
}
