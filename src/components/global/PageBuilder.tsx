import { BlockFactory } from '@components/utility/BlockFactory'
import { PageLayout } from './PageLayout'

export const PageBuilder = ({
  pageData,
  globalData,
}: {
  pageData: any
  globalData: any
}) => {
  return (
    <PageLayout global={globalData}>
      <BlockFactory items={pageData.pageComponents} global={globalData} />
    </PageLayout>
  )
}
