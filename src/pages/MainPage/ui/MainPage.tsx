import React, {FC} from "react";
import {useTranslation} from "react-i18next";
import {Counter} from "entities/Counter";

const MainPage: FC = () => {
    const {t} = useTranslation();
    return (
        <div>
            {t("Main page")}
            <Counter/>
        </div>
    );
}

export default MainPage;