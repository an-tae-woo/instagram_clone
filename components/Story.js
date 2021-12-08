function Story({ img,username }) {
    return (
        <div>
            <img className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"

            src = {"https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-18.jpg"} alt="" />
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    );
}

export default Story;
