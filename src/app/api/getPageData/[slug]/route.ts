import { NextResponse } from 'next/server'

// export async function that gets the [slug] from the request and returns the data for the page

export async function GET({ url }: any) {
  const slug = url.split('/').slice(3)[2]

  if (slug === 'home') {
    const data = await import(`@data/homePage.json`)
    return NextResponse.json({
      status: 200,
      ...data,
    })
  }

  if (slug === 'band-names') {
    const data = await import(`@data/pages/bandNames.json`)
    return NextResponse.json({
      status: 200,
      ...data,
    })
  }

  if (slug === 'podcast-names') {
    const data = await import(`@data/pages/podcastNames.json`)
    return NextResponse.json({
      status: 200,
      ...data,
    })
  }

  if (slug === 'horse-names') {
    const data = await import(`@data/pages/horseNames.json`)
    return NextResponse.json({
      status: 200,
      ...data,
    })
  }

  if (slug === 'game-show-names') {
    const data = await import(`@data/pages/gameShowNames.json`)
    return NextResponse.json({
      status: 200,
      ...data,
    })
  }

  if (slug === 'wrestler-names') {
    const data = await import(`@data/pages/wrestlerNames.json`)
    return NextResponse.json({
      status: 200,
      ...data,
    })
  }

  if (slug === 'book-names') {
    const data = await import(`@data/pages/bookNames.json`)
    return NextResponse.json({
      status: 200,
      ...data,
    })
  }

  if (slug === 'tv-show-names') {
    const data = await import(`@data/pages/tvShowNames.json`)
    return NextResponse.json({
      status: 200,
      ...data,
    })
  }

  if (slug === 'other-stuff') {
    const data = await import(`@data/pages/otherStuff.json`)
    return NextResponse.json({
      status: 200,
      ...data,
    })
  }
}
