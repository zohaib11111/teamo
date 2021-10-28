import {Launches} from "./Launch";
import {Rockets} from "./Rockets";

export const Home = () => {
    return (
        <div className="grid md:grid-cols-2 sm:mt-5 sm:grid-cols-1 ">
            <Launches/>
            <Rockets/>
        </div>
    );
}
