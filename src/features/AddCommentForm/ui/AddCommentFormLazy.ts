import {FC, lazy} from 'react';
import {AddCommentFormProps} from 'features/AddCommentForm/ui/AddCommentForm';

export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'));