interface PropsInterface {
    loading: boolean,
    handleLoadMore: Function,
    data: Array<any>,
    total: any

}

export const Footer = ({loading, handleLoadMore, data, total}: PropsInterface) => {
    if (loading) {
        return <div className={"text-center my-5"}>Loading</div>;
    }

    return <div className={"text-center my-5"}>
        <button onClick={() => handleLoadMore()}
                disabled={data.length >= total}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
            {data.length >= total ? "No More Records" : "Load More"}
        </button>
    </div>
}
