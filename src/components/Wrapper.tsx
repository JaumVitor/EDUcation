
export default function Wrapper({ children } : {children: React.ReactNode}) {
    return (
      <div className="mx-28 z-50">
        {children}
      </div>
    )
      
}