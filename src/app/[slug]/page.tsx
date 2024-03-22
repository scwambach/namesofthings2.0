import { PageBuilder } from '@components/global'
import { GlobalProps } from '@utils/types'
import { notFound } from 'next/navigation'

async function getData(slug: string) {
  const global = await fetch(`${process.env.SITE_URL}/api/getGlobalData`)
  const page = await fetch(`${process.env.SITE_URL}/api/getPageData/${slug}`)

  if (!page.ok) {
    return notFound()
  }

  const globalData = await global.json()
  const pageData = await page.json()

  return {
    globalData,
    pageData,
  }
}

export const revalidate = 0

export async function generateMetadata({
  params: { slug },
}: {
  params: {
    slug: string
  }
}) {
  const { globalData, pageData }: { globalData: GlobalProps; pageData: any } =
    await getData(slug)

  const ogImage = pageData.ogImage ? pageData.ogImage : globalData.siteImage
  const description = pageData.description || globalData.siteDescription

  return {
    title: pageData.title
      ? `${pageData.title} | ${globalData.siteTitle}`
      : globalData.siteTitle,
    description,
    openGraph: {
      images: [ogImage],
    },
    icons: {
      icon: '/favicon.svg',
    },
  }
}

export default async function Home({
  params: { slug },
}: {
  params: {
    slug: string
  }
}) {
  const { globalData, pageData }: { globalData: GlobalProps; pageData: any } =
    await getData(slug)

  return <PageBuilder pageData={pageData} globalData={globalData} />
}
