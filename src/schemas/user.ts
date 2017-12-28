import * as mongoose from 'mongoose';
import { AddressSchema, AddressDocument } from './address';

export const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	lastname: {
		type: String
	},
	address: AddressSchema
});

class User {
	public name: string;
	public lastname: string | undefined;
	public address: AddressDocument;

	getFullName() {
		return `${this.name} ${this.lastname}`;
	}
}

UserSchema.loadClass(User);

export type UserDocument = User & mongoose.Document;
