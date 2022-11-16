import menu from '../../../assets/icons/menu.svg'
import search from '../../../assets/icons/search.svg'
import './header.css'


export function Header (){
  return(
   <div className='header'>
      <img className='icons' src={menu} alt="Menu hamburguer" />
      <h1 className='title'>Estoque</h1>
      <img className='icons' src={search} alt="Lupa de pesquisa" />
   </div>
  )};
