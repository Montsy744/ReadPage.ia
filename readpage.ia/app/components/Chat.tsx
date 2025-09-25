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
            className="absolute bottom-4 left-4 right-4 md:left-auto md:right-auto md:w-full md:max-w-4xl p-4 rounded-3xl border border-base-300 flex items-center bg-base-300"
            >
                <div className="w-full">
                    <textarea className="w-full outline-0 resize-none h-full bg-transparent mb-4"></textarea>

                    <div>
                        <div className="badge badge-soft badge-success badge-lg">
                            ReadPage.ia
                        </div>
                        <button
                        className="btn btn-primary btn-circle"
                        >

                        </button>
                    </div>
                </div>
            </form>
        </div>


    )
}

export default Chat

