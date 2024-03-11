// Functional component for the Loader
const Loader = ({ color }: { color: string }) => {
  // TSX structure for the Loader component
  return (
    <>
    <div className="h-screen w-full flex justify-center items-center bg-white dark:bg-black">
    <div className={`w-8 h-8 border-[0.25rem] border-b-transparent ${color}  border-t-[0.25rem] rounded-[50%] animate-spin`}></div>
    </div>
      {/* <div className={`fixed z-[99] top-1 right-1 w-5 md:w-8 h-5 md:h-8 border-[0.2rem] md:border-[0.25rem] border-b-transparent ${color}  border-t-[0.25rem] rounded-[50%] animate-spin`}></div> */}
    </>
  )
}

// Export the Loader component as the default export
export default Loader;
