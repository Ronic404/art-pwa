import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import { ArtistsPage } from '../pages/ArtistsPage'
import { ArtworksPage } from '../pages/ArtworksPage'
import { LayoutWithControls } from '../layouts/LayoutWithControls'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWithControls />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "artists",
        element: <ArtistsPage />,
      },
      {
        path: "artworks",
        element: <ArtworksPage />,
      },
    ]
  },
])
