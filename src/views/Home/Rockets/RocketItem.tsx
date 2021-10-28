import {useHistory} from "react-router-dom";

interface PropsInterface {
    item: {
        flickr_images:any,
        active: boolean,
        name:string,
        type:string,
        description:string,
        id:string
    }
}

export const RocketItem = ({item}: PropsInterface) => {
    const history = useHistory();
    const image = (item.flickr_images && item.flickr_images.length) ? item.flickr_images[0] : '';
    const goToDetailPage = (id: string) => {
        history.push(`/rocket/${id}`)
    }
    return (
        <div className={"mx-2 cursor-pointer"} onClick={()=>goToDetailPage(item.id)}>
            <div className="hover:bg-purple-300 px-2 m-2 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden max-w-2xl">
                <div className="flex justify-center items-center">
                    <div>
                        <img className="rounded-full w-20 h-20 border border-gray-100 shadow-sm" src={image}
                             alt="Man looking at item at a store"/>
                        <p className="pb-2 m-0 p-0 text-center text-sm leading-tight font-medium">
                            {item.name}
                        </p>
                    </div>
                    <div className="flex-1 p-8 justify-center items-center">
                        <div className={`uppercase tracking-wide text-sm font-semibold
                        `}>{item.type}({item.active?"Active":"InActive"})</div>
                        <p className="block mt-1 text-sm leading-tight font-small">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
