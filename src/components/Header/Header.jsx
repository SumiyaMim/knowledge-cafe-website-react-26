import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <header className='flex justify-between items-center py-4 border-b-2 mx-auto'>
    <h1 className='text-xl font-bold'>Knowledge Cafe</h1>
        <img src={profile} alt="" className='w-12 h-12'/>
    </header>
  )
}

export default Header
