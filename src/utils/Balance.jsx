
const Balance = ({ value }) => {
    return <div className="flex ml-10">
        <div className="font-bold text-2xl  text-white">
            Your balance : 
        </div>
        <div className="font-semibold ml-4 text-lg text-white mt-1">
            Rs {value}
        </div>
    </div>
}
export default Balance;