import {FeatureFlags} from '@/shared/types/featureFlags';
import {JsonSettings} from './jsonSettings';

export type UserRole = 'USER' | 'ADMIN' | 'MANAGER';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
    jsonSettings?: JsonSettings
}

export interface UserSchema {
    authData?: User;
    _isInit: boolean;
}