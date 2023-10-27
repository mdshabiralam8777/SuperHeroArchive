import "./ErrorHandelingComp.css";
import errorImg from "../assets/images/Error_Img.png";

function ErrorHandelingComp({ errorMsg }) {
    return (
        <>
            <div className="text-center mt-3 mb-1">
                <img className="error-img" src={errorImg} alt="Oops!" />
                <div className="error text-warning">{errorMsg}</div>
            </div>
        </>
    );
}

export default ErrorHandelingComp;