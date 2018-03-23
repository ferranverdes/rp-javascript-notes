import * as mongoose from 'mongoose';

export const AddressSchema = new mongoose.Schema({
	address: {
		type: String,
		required: true
	},
	num: {
		type: Number
	}
});

export class Address {
	public address: string;
	public num: number | undefined;

	constructor(address: string, num?: number) {
		this.address = address;
		this.num = num;
	}

	getFullAddress() {
		return `${this.address}, ${this.num}`;
	}
}

AddressSchema.loadClass(Address);

export type AddressDocument = Address & mongoose.Document;
