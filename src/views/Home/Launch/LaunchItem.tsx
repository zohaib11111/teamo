import {useHistory} from "react-router-dom";

interface ItemInterface {
    item: {
        links: {
            patch: {
                small: string
            }
        },
        success:boolean,
        details:string,
        name:string,
        id:string
    }
}

export const LaunchItem = ({item}: ItemInterface) => {
    const history = useHistory();
    const image = (item.links && item.links.patch) ? item.links.patch.small : '';
    const statusClass = item.success?'text-indigo-500 ':'text-red-500 ';
    const goToDetailPage = (id:string)=>{
        history.push(`/launch/${id}`)
    }
    return (
        <div className={"cursor-pointer mx-2"} onClick={()=>goToDetailPage(item.id)}>
            <div className="hover:bg-purple-300 px-2 m-2 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden max-w-2xl">
                <div className="flex justify-center items-center">
                    <div className={'m-1 text-center item-center'}>
                        <img className="rounded-full w-20 h-20 border border-gray-100 shadow-sm" src={image}
                             alt="Man looking at item at a store"/>
                        <p className="pb-2 text-center text-sm leading-tight font-medium">
                            {item.name}
                        </p>
                    </div>
                    <div className="flex-1 p-8 justify-center items-center">
                        <div className={`uppercase tracking-wide text-sm font-semibold ${statusClass}`}>{item.success?"Success":"Fail"}</div>
                        <p className="block mt-1 text-sm leading-tight font-small">
                            {item.details}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
