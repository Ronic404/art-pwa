import classNames from 'classnames/bind'
import styles from './ArtistsPage.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

export const ArtistsPage = () => {
  return (
    <div className={cx('page')}>
      <p>Artists page is working</p>
      <Link to={'/'}><button>To main page</button></Link>
    </div>
  )
}
