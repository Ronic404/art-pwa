import classNames from 'classnames/bind'
import styles from './LayoutWithControls.module.scss'
import { Outlet, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { ReactComponent as HomeIcon } from '../../assets/images/controls/home.svg'
import { ReactComponent as ArtistIcon } from '../../assets/images/controls/artist.svg'
import { ReactComponent as ArtIcon } from '../../assets/images/controls/art.svg'

const cx = classNames.bind(styles)

export const LayoutWithControls = () => {
  const location = useLocation();

  return (
    <>
      <Outlet />
      <div className={cx('controls')}>
        <Link className={cx('control-button', { 'control-button_active': location.pathname === '/' })} to='/'>
          <HomeIcon />
          <p className={cx('text')}>Home</p>
        </Link>
        <Link className={cx('control-button', { 'control-button_active': location.pathname.startsWith('/artists') })} to='artists'>
          <ArtistIcon />
          <p className={cx('text')}>Artists</p>
        </Link>
        <Link className={cx('control-button', { 'control-button_active': location.pathname.startsWith('/artworks') })} to='artworks'>
          <ArtIcon />
          <p className={cx('text')}>Artworks</p>
        </Link>
        <Link className={cx('control-button', { 'control-button_active': location.pathname === '/' })} to='/'>
          <HomeIcon />
          <p className={cx('text')}>Home</p>
        </Link>
      </div>
    </>
  )
}
