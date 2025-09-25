import React from "react";

const Chat = ({decodedLink} : {decodedLink : string}) => {


    return (
        <div className="flex flex-col items-center p-4 relative h-screen" >
            <div className="mb-4">
                <div className="badge badge-soft badge-success badge-lg">
                    {decodedLink}
                </div>
                
            </div>


            <form
            className="absolute bottom-4 left-4 right-4 md:left-auto md:right-auto md:w-full md:max-w-4xl p-4 rounded-3xl border border-base-300 flex items-center"
            >

            </form>
        </div>


    )
}

export default Chat

