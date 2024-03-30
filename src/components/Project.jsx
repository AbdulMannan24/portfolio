// export default function Project() {
//     return (
//         <>
//             <div>

//                 <img src="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg" alt="" />
//                 <h3>Title</h3>
//                 <p>About</p>
//                 <button>Live</button>
//                 <button>Code</button>
//             </div>
//         </>
//     )
// }
export default function Project({image, title, stack, about, live, code}) {
    return (
        <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden m-4">
            <img className="w-full" src = {image} alt="Project" />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
                <p className="text-gray-700 mb-4"> Technologies: {stack} </p>
                <p className="text-gray-700 mb-4">{about}</p>
                <div className="flex justify-evenly">
                    <a href={live}><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Live</button></a>
                    <a href={code}><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Code</button></a>
                </div>
            </div>
        </div>
    );
}


