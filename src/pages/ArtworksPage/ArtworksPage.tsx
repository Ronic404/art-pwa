import classNames from 'classnames/bind'
import styles from './ArtworksPage.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

export const ArtworksPage = () => {
  return (
    <div className={cx('page')}>
      <p>Artworks page is working</p>
      <Link to={'/'}><button>To main page</button></Link>
    </div>
  )
}
