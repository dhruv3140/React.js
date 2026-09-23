import React from 'react'
function Card(props) {
    return (
        <div className="w-60 h-60 rounded-xl">
            <img
                src={props.obj.img}
                alt="Giphy"
                className="rounded-t-xl"
            />
            <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
                <h1 className="font-bold  font-mono  text-xl">{props.userName}</h1>
            </div>
        </div>
    )
}
export default Card