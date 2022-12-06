import {Countries} from '@/entities/Country/model/country';
import {Currency} from '@/entities/Currency/model/types/currency';

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