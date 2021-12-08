function MIniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
        <img 
        className="w-16 h-16 rounded-full border p-[2px]"
         src="https://www.bizhankook.com/upload/bk/article/202005/thumb/19933-46049-sampleM.jpg" alt="" 
         />

         <div className="flex-1 mx-4">
             <h2 className="font-bold">Travis</h2>
             <h3 className="text-sm text-gray-400">Welocme</h3>
        </div>            

        <button className="text-blue-400 text-sm font-semibold">Sign out</button>
        </div>
    )
}

export default MIniProfile;
