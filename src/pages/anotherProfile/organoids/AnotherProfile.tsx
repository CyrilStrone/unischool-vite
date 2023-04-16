import '../styles/AnotherProfile.css'
import { AnotherProfileAchievements } from "../molecules/AnotherProfileAchievements";
import { AnotherProfileGeneralInfo } from "../molecules/AnotherProfileGeneralInfo";
import { AnotherProfileStatistics } from "../molecules/AnotherProfileStatistics";
import { AnotherProfileArticles } from "../molecules/AnotherProfileArticles";
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import { useEffect, useState } from "react";
import { IInAnotherProfile, InAnotherProfile } from "../logics/InAnotherProfile";
export const AnotherProfile = () => {
    const [id, setId] = useState<any>()
    const [value, setValue] = useState<any>()
    const requestInAnotherProfile = async (params:IInAnotherProfile) => {
        setValue(await InAnotherProfile({...params}))
    }
    useEffect(() => {
        if (id) {
            requestInAnotherProfile({id:id})
        }
    }, [id])
    useEffect(() => {
        setId(window.location.pathname.split("/AnotherProfile/:")[1])
    }, [])
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
