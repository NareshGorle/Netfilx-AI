

function VideoTitle({ title, overview }) {
    return (
        <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-linear-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-2/4">{overview}</p>
            <div className="">
                <button className="bg-white text-black p-4 px-12 text-xl rounded-xl hover:opacity-50"> Play</button>
                <button className="bg-gray-700 text-white p-4 px-12 text-xl mx-2  rounded-xl opacity-50 ">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle