import "../styles/CircleBackground.css"
import EllipseOne from "../../../common/assets/authorization/EllipseOne.png"
import EllipseTwo from "../../../common/assets/authorization/EllipseTwo.png"

export const CircleBackground = () => {
    return (
        <div className="CircleBackground">
            <img className="CircleBackground__One" src={EllipseOne} alt="EllipseOne" />
            <img className="CircleBackground__Two" src={EllipseTwo} alt="EllipseTwo" />
        </div>
    );
};
