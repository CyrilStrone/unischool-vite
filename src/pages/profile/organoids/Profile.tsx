import { ProfileAchievements } from "../molecules/ProfileAchievements";
import { ProfileGeneralInfo } from "../molecules/ProfileGeneralInfo";
import { ProfileStatistics } from "../molecules/ProfileStatistics";
import { ProfileArticles } from "../molecules/ProfileArticles";
import '../styles/Profile.css'
import { useStore } from "effector-react";
import { CircleBackground } from "../../../ui/circlebackground/organoids/CircleBackground";
import { useEffect, useState } from "react";
import { $userAuthorization } from "../../../common/UserHooks";
import { InProfile } from "../logics/InProfile";
import { useNavigate } from "react-router-dom";
import { accessTokenName } from "../../../common/axiosInstance";
export const Profile = () => {
    const navigate = useNavigate();
    const userAuthorization = useStore($userAuthorization);
    const [value, setValue] = useState<any>()
    const requestInProfile = async () => {
        setValue(await InProfile())
    }
    useEffect(() => {
        if (localStorage.getItem(accessTokenName)?.length) {
            requestInProfile()
        }else{
            navigate("/Authorization")
        }
    }, [userAuthorization])
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
