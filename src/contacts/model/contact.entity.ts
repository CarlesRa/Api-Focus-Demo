import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ContactType } from "../enums/type.enum";

@Entity()
export class Contact {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	firstName: string;

	@Column({nullable: true})
	lastName: string;

	@Column()
	email: string;

	@Column()
	phone: string;

	@Column({nullable: true})
	city: string;

	@Column({nullable: true})
	country: string;

	@Column()
	contactType: ContactType;
}