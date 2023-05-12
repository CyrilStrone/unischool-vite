import '../styles/AnotherProfile.css'
import { AnotherProfileAchievements } from "../molecules/AnotherProfileAchievements";
import { AnotherProfileGeneralInfo } from "../molecules/AnotherProfileGeneralInfo";
import { AnotherProfileStatistics } from "../molecules/AnotherProfileStatistics";
import { AnotherProfileArticles } from "../molecules/AnotherProfileArticles";
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import { useEffect, useState } from "react";
import { IInAnotherProfile, InAnotherProfile } from "../logics/InAnotherProfile";
import { $user } from '../../../common/UserHooks';
import { useStore } from 'effector-react';
import { useNavigate } from 'react-router-dom';

export const AnotherProfile = () => {
    const [id, setId] = useState<any>()
    const navigate = useNavigate();
    const user = useStore($user);
    const [value, setValue] = useState<any>()
    const requestInAnotherProfile = async (params: IInAnotherProfile) => {
        setValue(await InAnotherProfile({ ...params }))
    }
    useEffect(() => {
        if (id) {
            if (user.id && user.id == id) {
                navigate("/Profile")
            } else {
                requestInAnotherProfile({ id: id })
            }
        }
    }, [id])
    useEffect(() => {
        setId(window.location.pathname.split("/AnotherProfile/:")[1])
    }, [])
    useEffect(() => {
        console.log(user)
    }, [user])
    return (
        <>
            {value &&
                <div className="AnotherProfile">
                    <AnotherProfileGeneralInfo id={value.id} image={value.avatar} login={value.login} firstName={value.firstName} lastName={value.lastName} dateOfRegistration={value.createdDate} about={value.about ? value.about : ""} />
                    <AnotherProfileStatistics shockMode={value.coins} totalPoints={value.coins} />
                    <AnotherProfileAchievements id={value.id} />
                    <AnotherProfileArticles id={value.id} />
                </div>
            }
            <CircleBackground />
        </>
    );
};
