import React, {useEffect} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {fetchProfileData, ProfileCard, profileReducer} from "entities/Profile";
import {useDispatch} from "react-redux";

interface ProfilePageProps {
    className?: string;
    isStories?: boolean;
}

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = ({className, isStories = false}: ProfilePageProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isStories) {
            dispatch(fetchProfileData())
        }
    }, [dispatch, isStories]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames("", {}, [className])}>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    );
}

export default ProfilePage