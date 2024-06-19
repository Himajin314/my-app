import { Logo } from '../../components/logo'
import './header.module.css'

export const Header = () => {
  return (
    <header className="header">
      <div>
        <Logo logo={"株式会社BTF"} />
      </div>
      <div>
        メニュー
      </div>
    </header>
  )
}

export default Header