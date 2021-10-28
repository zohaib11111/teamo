import React from "react";

interface DetailInterface {
    data: Array<any>,
}


export const FlickerImages = ({data}: DetailInterface) => {
    return (
        <>
            <p className="block mt-1 text-lg leading-tight font-medium">Flicker Image</p>
            <div className={"flex p-2 w-full sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5"}>
                {
                    data.map((item, index) => {
                        return <img className="w-30 h-20 rounded  border border-gray-100 shadow-sm"
                                    src={item}
                                    key={index}
                                    alt="Man looking at item at a store"/>
                    })
                }
            </div>
        </>
    );
}
