export interface ArticleRatingType {
    id?: string;
    userIds: string[];
    articleId: string;
    rates?: number[];
    feedback?: string;
}