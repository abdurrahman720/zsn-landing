const Container = ({children}) => {
    return ( 
        <div className="max-w-[1920px] mx-auto xl:px-12 py-5 md:px-2 px-4">
        {children}
        </div>
     );
}
 
export default Container;