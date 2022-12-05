import {DropDirection} from 'shared/types/ui';
import cls from './popup.module.scss';

export const mapDirection: Record<DropDirection, string> = {
    'top right': cls.topRight,
    'top left': cls.topLeft,
    'bottom right': cls.bottomRight,
    'bottom left': cls.bottomLeft
}