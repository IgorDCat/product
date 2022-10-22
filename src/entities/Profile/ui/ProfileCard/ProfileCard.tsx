import React, {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {getProfileData} from "entities/Profile/model/selectors/getProfileData/getProfileData";
import {getProfileIsLoading} from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import {getProfileError} from "../../model/selectors/getProfileError/getProfileError";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({className}: ProfileCardProps) => {
    const {t} = useTranslation("profile");
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const [editMode, setEditMode] = useState(false);

    const editModeToggle = () => {
        setEditMode(prev => !prev)
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div>{t("Profile")}</div>
            <div>{data?.firstname + " " + data?.lastname}</div>
            <div>
                <img src={data?.avatar} alt=""/>
            </div>
            <Button onClick={editModeToggle} theme={ThemeButton.OUTLINE}>{t("Edit")}</Button>
            {editMode && <div className={cls.data}>
                <Input value={data?.firstname}
                    placeholder={t("your firstname")}
                    className={cls.input}
                />
                <Input value={data?.lastname}
                    placeholder={t("your lastname")}
                    className={cls.input}
                />
            </div>}
        </div>
    );
}