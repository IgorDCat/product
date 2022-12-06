import {NotificationType} from '../model/types/notification';
import {apiRtk} from '@/shared/api/apiRtk';

const notificationApi = apiRtk.injectEndpoints({
    endpoints: (build) => ({
        getNotification: build.query<NotificationType[], null>({
            query: () => ({
                url: '/notifications'
            }),
        }),
    }),
});

export const useNotifications = notificationApi.useGetNotificationQuery;