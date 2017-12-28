import { assert } from 'chai';
import { User, UserDocument } from '../src/models/user';
import { AddressDocument } from '../src/schemas/address';

describe('Subdocuments', () => {
	it('can create a document with subdocument', async () => {
		let joe = new User({
			name: 'Joe',
			lastname: 'Doe',
			address: {
				address: 'Carrer Ponent',
				num: 5
			}
		});

    await joe.save();
    let user: UserDocument = await User.findOne();

    user.address.num = 10;
    await user.address.remove();

    await user.save();

    user = await User.findOne();
    console.log(user);
	});
});
