import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ContactType } from "../enums/type.enum";

@Entity()
export class Contact {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	email: string;

	@Column()
	phone: string;

	@Column()
	city: string;

	@Column()
	country: string;

	@Column()
	contactType: ContactType;
}