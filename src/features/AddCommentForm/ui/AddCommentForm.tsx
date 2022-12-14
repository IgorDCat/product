import React, {memo, useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {HStack} from '@/shared/ui/Stack';
import cls from './AddCommentForm.module.scss';
import {useTranslation} from 'react-i18next';
import {Input, ThemeInput} from '@/shared/ui/Input';
import {Button, ThemeButton} from '@/shared/ui/Button';
import {useSelector} from 'react-redux';
import {getAddCommentFormError, getAddCommentFormText} from '../model/selectors/getAddCommentForm';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {addCommentFormActions, addCommentFormReducer} from '../model/slices/addCommentFormSlice';
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {className, onSendComment} = props;
    const {t} = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack
                justify='between'
                gap='10'
                max
                className={classNames(cls.AddCommentForm, {}, [className])}
                data-testid='AddCommentForm'
            >
                <Input
                    className={cls.input}
                    theme={ThemeInput.CLEAR}
                    placeholder={t('Your comment')}
                    value={text}
                    onChange={onCommentTextChange}
                    data-testid='AddCommentForm.Input'
                />
                <Button
                    theme={ThemeButton.OUTLINE}
                    onClick={onSendHandler}
                    className={cls.btn}
                    data-testid='AddCommentForm.Button'
                >
                    {t('Send')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
})

export default AddCommentForm;