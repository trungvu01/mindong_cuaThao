import { RotateLoader } from "react-spinners";
import "./loader.css";
const Loader = () => {
    return (
        <div className="loader">
            <RotateLoader
                color="#fbf1e9"
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Loader;
