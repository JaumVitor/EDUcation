import MenuMain from '../components/menu-main'
import ObservationMenuMain from '../components/observation-menu-main'

export default function Home() {
  return (
    <div className="flex flex-col justify-around h-full">
      <MenuMain />
      <ObservationMenuMain />
    </div>
  )
}
