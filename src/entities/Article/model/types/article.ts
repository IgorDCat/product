import {ArticleBlockType, ArticleType} from '../consts/articleConsts';
import {User} from '@/entities/User';

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    id: string;
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    id: string;
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    id: string;
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export interface Article {
    id: string;
    title: string;
    user: User;
    subtitle?: string;
    img?: string;
    views?: number;
    createdAt?: string;
    type?: ArticleType[];
    blocks?: ArticleBlock[]
}