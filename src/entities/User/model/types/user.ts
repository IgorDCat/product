import {FeatureFlags} from '@/shared/types/featureFlags';

export type UserRole = 'USER' | 'ADMIN' | 'MANAGER';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags
}

export interface UserSchema {
    authData?: User;
    _isInit: boolean;
}