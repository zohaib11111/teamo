import React from "react";

interface DetailInterface {
    data: Array<any>,
}


export const Stages = ({data}: DetailInterface) => {
    return (
        <>
            <p className="block mt-1 text-lg leading-tight font-medium">
                Stages
            </p>
            <table
                className="w-full sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                <thead>
                <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                    <th className="p-3 text-left">Stage</th>
                    <th className="p-3 text-left">Reusable</th>
                    <th className="p-3 text-left"> Engines</th>
                    <th className="p-3 text-left"> Fuel Amount In Tons
                    </th>
                    <th className="p-3 text-left">Burn Time Sec</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item, index) => {
                        return <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td className="border-grey-light border hover:bg-gray-100 p-3">
                                {index + 1}
                            </td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">
                                {item.reusable?"YES":"NO"}
                            </td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">
                                {item.engines}
                            </td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">
                                {item.fuel_amount_tons}
                            </td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">
                                {item.burn_time_sec}
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </>
    );
}
