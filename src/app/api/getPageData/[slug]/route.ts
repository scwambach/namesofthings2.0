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

  if (slug === 'about') {
    const data = await import(`@data/aboutPage.json`)

    return NextResponse.json({
      status: 200,
      ...data,
    })
  }

  if (slug === 'team') {
    const data = await import(`@data/teamPage.json`)
    return NextResponse.json({
      status: 200,
      ...data,
    })
  }

  if (slug === 'contact') {
    const data = await import(`@data/contactPage.json`)
    return NextResponse.json({
      status: 200,
      ...data,
    })
  }
}
