import { ProfileAchievements } from "../molecules/ProfileAchievements";
import { ProfileGeneralInfo } from "../molecules/ProfileGeneralInfo";
import { ProfileStatistics } from "../molecules/ProfileStatistics";
import { ProfileArticles } from "../molecules/ProfileArticles";
import '../styles/Profile.css'
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import { useEffect, useState } from "react";
import { InProfile } from "../logics/InProfile";
export const Profile = () => {
    const [value, setValue] = useState<any>()
    const requestInProfile = async () => {
        setValue(await InProfile())
    }
    useEffect(() => {
    requestInProfile()
    }, [])
    return (
        <>
            {value &&
                <div className="Profile">
                    <ProfileGeneralInfo id={value.id} image={value.avatar} login={value.login} firstName={value.firstName} lastName={value.lastName} dateOfRegistration={value.createdDate} about={value.about ? value.about : ""} />
                    <ProfileStatistics shockMode={value.coins} totalPoints={value.coins} />
                    <ProfileAchievements id={value.id} />
                    <ProfileArticles id={value.id} />
                </div>
            }
            <CircleBackground />
        </>
    );
};
