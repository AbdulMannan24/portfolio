export function Header() {
    return <>
        <div className="flex justify-between p-1 pb-2">
            <div className="text-white"> <h1 className="text-xl pl-5">Abdul Mannan</h1></div>
            <div className="flex justify-between pr-5">
                <div> <button className="bg-white rounded-lg" section="#">Resume</button></div>
                <div> <button className="bg-white rounded-lg">Projects</button></div>
                <div> <button className="bg-white rounded-lg">Internships</button></div>
                <div> <button className="bg-white rounded-lg"> Contact me</button></div>
            </div>

        </div>
    </>
}