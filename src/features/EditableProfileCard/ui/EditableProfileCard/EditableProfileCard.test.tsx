import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Countries} from '@/entities/Country';
import {Currency} from '@/entities/Currency';
import {Profile} from '@/entities/Profile';
import {api} from '@/shared/api/api';
import {profileReducer} from '../../model/slice/profileSlice';
import {ComponentRender} from '@/shared/lib/tests/componentRender/ComponentRender';
import {EditableProfileCard} from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    firstname: 'admin',
    lastname: 'admin',
    age: 456,
    currency: Currency.USD,
    country: Countries.Great_Britain,
    city: 'London',
    username: 'admin123'
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile
        },
        user: {
            authData: {
                id: '1', username: 'admin123'
            }
        }
    },
    asyncReducers: {
        profile: profileReducer,
    }
}

describe('features/EditableProfileCard.tsx', () => {
    test('readonly mode should turn off', async () => {
        ComponentRender(<EditableProfileCard id='1'/>, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('values should be reset on cancellation', async () => {
        ComponentRender(<EditableProfileCard id='1'/>, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });

    test('should be an error', async () => {
        ComponentRender(<EditableProfileCard id='1'/>, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Header')).toBeInTheDocument();
    });

    test('should be a PUT request', async () => {
        const mockPutReq = jest.spyOn(api, 'put')
        ComponentRender(<EditableProfileCard id='1'/>, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
})