import { useEffect } from "react"
// import { counterSelector } from "../../store/counter/counterSelectors"
// import { decrement, increment, incrementByAmount } from "../../store/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { artistsDataSelector } from "../../store/artists/artistsSelectors"
import { getArtists } from "../../store/artists/artistsSlice"
import { Link } from 'react-router-dom'

import classNames from 'classnames/bind'
import styles from './MainPage.module.scss'

const cx = classNames.bind(styles)

export const MainPage = () => {
  const dispatch = useAppDispatch()
  // const counter = useAppSelector(counterSelector)
  const artistsData = useAppSelector(artistsDataSelector)

  useEffect(() => {
    dispatch(getArtists())
  }, [])

  useEffect(() => {
    console.log(artistsData)
  }, [artistsData])

  return (
    <div className={cx('page')}>
      {/* <h1 className={cx('aaa')}>Counter</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </div> */}
      <Link className={cx('rubric', 'artists')} to='artists'>
        <h2 className={cx('rubric-title')}>ARTISTS</h2>
      </Link>

      <Link className={cx('rubric', 'artworks')} to='artworks'>
        <h2 className={cx('rubric-title')}>ARTWORKS</h2>
      </Link>
    </div>
  )
}
