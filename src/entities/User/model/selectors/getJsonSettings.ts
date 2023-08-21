import {buildSelector} from '@/shared/lib/store';
import {JsonSettings} from '../types/jsonSettings';
import {StateSchema} from '@/app/providers/StoreProvider';

const defaultSettings: JsonSettings = {};

export const getJsonSettings = (state: StateSchema) => state.user?.authData?.jsonSettings ?? defaultSettings;

export const [useJsonSettings] = buildSelector(
    (state) => state.user?.authData?.jsonSettings ?? defaultSettings
)

export const [useJsonSettingsByKey] = buildSelector(
    (state, key: keyof JsonSettings) => state.user?.authData?.jsonSettings?.[key]
)