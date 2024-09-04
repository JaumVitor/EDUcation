
export default function Wrapper({ children } : {children: React.ReactNode}) {
    return (
      <div className="flex flex-col justify-around h-[90%] mx-44 z-50">
        {children}
      </div>
    )
      
}