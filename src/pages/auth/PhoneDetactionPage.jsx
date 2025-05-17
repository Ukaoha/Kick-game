

import { useNavigate } from "react-router-dom";
import loader from "../../assets/loader.svg";

const PhoneDetectionPage = () => {
    const navigate = useNavigate();

    setTimeout(() => navigate("/welcome"), 3000);
    return (
        <section className="grid place-items-center text-center bg-dark mx-auto h-screen p-6">
            <div className="w-full sm:w-[60%] lg:w-[40%]">
                <img
                    className="mx-auto mb-5 animate-spin"
                    src={loader}
                    alt="loader"
                    style={{ animationDuration: '2s' }}
                />
                <p className="text-sm mb-2">
                    We're detecting your phone number using your mobile data.
                </p>
                <p className="text-sm"> This will take only a moment</p>
            </div>
        </section>
    );
};

export default PhoneDetectionPage;