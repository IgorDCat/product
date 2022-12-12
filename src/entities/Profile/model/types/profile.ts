import {Countries} from '@/entities/Country';
import {Currency} from '@/entities/Currency';

export interface Profile {
    id?: string;
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Countries;
    city?: string;
    username?: string;
    avatar?: string;
}