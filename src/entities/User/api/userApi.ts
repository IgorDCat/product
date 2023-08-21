import {apiRtk} from '@/shared/api/apiRtk';
import { User } from '../model/types/user';
import {JsonSettings} from '../model/types/jsonSettings';

interface SetJsonSettings {
    userId: string;
    jsonSettings: JsonSettings;
}

const userApi = apiRtk.injectEndpoints({
    endpoints: (build) => ({
        setJsonSettings: build.mutation<User, SetJsonSettings>({
            query: ({userId, jsonSettings}) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings
                }
            }),
        }),
        getUserDataById: build.query<User, string>({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: 'GET',
            }),
        }),
    }),
});

export const setJsonSettingsMutation = userApi.endpoints.setJsonSettings.initiate;
export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;