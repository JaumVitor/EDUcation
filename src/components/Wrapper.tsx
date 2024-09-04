
export default function Wrapper({ children } : {children: React.ReactNode}) {
    return (
      <div className="h-[90%] mx-44 z-50">
        {children}
      </div>
    )
      
}