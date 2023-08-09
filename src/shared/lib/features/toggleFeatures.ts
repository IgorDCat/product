import {FeatureFlags} from '@/shared/types/featureFlags';
import {getFeatureFlags} from './getSetFeature';

export interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export const toggleFeatures = <T>({name, on, off}: ToggleFeaturesOptions<T>) => {
    if(getFeatureFlags(name)) {
        return on();
    }
    return off();
}