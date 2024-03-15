import { Banner, Cards } from '@components/blocks'
import { PageLayout } from '@components/global'
import { BlogRollProps, GlobalProps } from '@utils/types'

async function getData() {
  const globalRes = await fetch(`${process.env.SITE_URL}/api/getGlobalData`)
  const globalData = await globalRes.json()

  const blogRes = await fetch(`${process.env.SITE_URL}/api/getBlogRoll`)
  const blogData: BlogRollProps = await blogRes.json()

  return { globalData, blogData }
}

const oneDay = 60 * 60 * 24

export const revalidate = process.env.NODE_ENV === 'development' ? 0 : oneDay

export async function generateMetadata({}) {
  const globalData = await fetch(`${process.env.SITE_URL}/api/getGlobalData`)
  const globalJson: GlobalProps = await globalData.json()

  return {
    title: `Blog | ${globalJson.siteTitle}`,
    description: globalJson.siteDescription,
    openGraph: {
      images: [globalJson.siteImage],
    },
    icons: {
      icon: '/favicon.svg',
    },
  }
}

export default async function Home() {
  const {
    blogData,
    globalData,
  }: {
    globalData: GlobalProps
    blogData: BlogRollProps
  } = await getData()

  const firstPost = blogData.posts[0]
  const allOtherPosts = blogData.posts.slice(1)

  return (
    <PageLayout global={globalData}>
      <Banner
        {...firstPost}
        backgroundImage={firstPost.image}
        heading={firstPost.title}
        message={firstPost.description}
        headingLevel={1}
      />
      <Cards
        heading="Blog Posts"
        items={allOtherPosts}
        level={2}
        paginated
        itemsPerPage={12}
      />
    </PageLayout>
  )
}
