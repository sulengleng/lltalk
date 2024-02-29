import {Coffee} from "@phosphor-icons/react";

export default function EmptyCard() {

    return (
        <div className="text-center py-10">
            <div className="w-full flex justify-center items-center  space-x-4">
                <Coffee size={30} className="text-gray-600 font-light"/> <div className="text-2xl text-gray-600 font-light ">暂无数据</div>
            </div>

            <div className="text-gray-600 mt-3 font-light">No Content To Show</div>
        </div>
    )
}