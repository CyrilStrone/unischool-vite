import "../styles/AnotherProfileGeneralInfo.css"

interface IAnotherProfileGeneralInfo {
    image: string,
    login: string,
    firstName: string,
    lastName: string,
    dateOfRegistration: string,
    about: string,
    id: number
}

export const AnotherProfileGeneralInfo = (params: IAnotherProfileGeneralInfo) => {
    let date = new Date(params.dateOfRegistration);
    let formattedDate = date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    
    return (
        <div className="AnotherProfileGeneralInfo">
            <img className="AnotherProfileGeneralInfo__Image" src={params.image} alt="" />
            <div className="AnotherProfileGeneralInfo__Block">
                <div className="AnotherProfileGeneralInfo__Block__name">
                    {params.firstName + " " + params.lastName}
                </div>
                <div className="AnotherProfileGeneralInfo__Block__login">
                    {params.login}
                </div>
                <div className="AnotherProfileGeneralInfo__Block__dateOfRegistration">
                    {formattedDate}
                </div>
                <div className="AnotherProfileGeneralInfo__Block__about">
                    {params.about}
                </div>
            </div>
        </div>
    );
};
