import { Banner, Cards } from '@components/blocks'
import { PageLayout } from '@components/global'
import { ShareButtons } from '@components/modules/ShareButtons'
import { TableOfContents } from '@components/modules/TableOfContents'
import { Container, Flex, Markdown, Spacer } from '@components/utility'
import { GlobalProps, PostDetailsProps } from '@utils/types'
import { notFound } from 'next/navigation'

async function getData() {
  const globalRes = await fetch(`${process.env.SITE_URL}/api/getGlobalData`)
  const blogRes = await fetch(`${process.env.SITE_URL}/api/getBlogPost`)

  if (!blogRes.ok) {
    return notFound()
  }

  const globalData: GlobalProps = await globalRes.json()
  const postData: PostDetailsProps = await blogRes.json()

  return { globalData, postData }
}

const oneDay = 60 * 60 * 24

export const revalidate = process.env.NODE_ENV === 'development' ? 0 : oneDay

export async function generateMetadata({}) {
  const globalData: any = await fetch(
    `${process.env.SITE_URL}/api/getGlobalData`
  )
  const postData: any = await fetch(`${process.env.SITE_URL}/api/getBlogPost`)

  const globalJson: GlobalProps = await globalData.json()
  const postJson: PostDetailsProps = await postData.json()
  const ogImage = postData.ogImage ? postData.ogImage : globalData.siteImage
  const description = postData.description || globalData.siteDescription

  return {
    title: `${postJson.title} | Blog | ${globalJson.siteTitle}`,
    description,
    openGraph: {
      images: [ogImage],
    },
    icons: {
      icon: '/favicon.svg',
    },
  }
}

export default async function Home() {
  const {
    postData,
    globalData,
  }: {
    globalData: GlobalProps
    postData: PostDetailsProps
  } = await getData()

  return (
    <PageLayout global={globalData} pageClasses="post">
      <Banner
        backgroundImage={postData.image}
        heading={postData.title}
        message={postData.summary}
        headingLevel={1}
        date={postData.publishedAt}
        authors={postData.authors}
        tags={postData.tags}
      />
      <Container padded className="bodyContainer">
        <ShareButtons title={postData.title} slug={postData.slug} />
        <Spacer size={2} />
        <Flex
          gap="lg"
          breakpoint="lg"
          columnBreak="lg"
          customLayout="one-quarter-three-quarters"
        >
          <TableOfContents targetId="postContent" />
          <Markdown componentId="postContent">{postData.content}</Markdown>
        </Flex>
      </Container>

      {postData.related && postData.related.length > 0 && (
        <Cards heading="Related Posts" items={postData.related} />
      )}
    </PageLayout>
  )
}
