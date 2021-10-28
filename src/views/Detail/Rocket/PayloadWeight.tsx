import React from "react";

interface DetailInterface {
    data: Array<any>,
}


export const PayloadWeightInfo = ({data}: DetailInterface) => {
    return (
        <>
            <p className="block mt-1 text-lg leading-tight font-medium">Payload Weights</p>
            <table
                className="w-full sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                <thead>
                <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                    <th className="p-3 text-left">ID</th>
                    <th className="p-3 text-left">NAME</th>
                    <th className="p-3 text-left">KG</th>
                    <th className="p-3 text-left">LB</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item, index) => {
                        return <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td className="border-grey-light border hover:bg-gray-100 p-3">
                                {item.id}
                            </td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">
                                {item.name}
                            </td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">
                                {item.kg}
                            </td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">
                                {item.lb}
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </>
    );
}
