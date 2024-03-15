import * as Block from '@components/blocks'
import * as Module from '@components/modules'
import { bodyFont } from '@utils/fonts'

export const BlockFactory = (props: any) => {
  return (
    <>
      {props.items?.map((object: any, index: number) => {
        const Component =
          object.blockType === 'module'
            ? Module[object._type as keyof typeof Module]
            : Block[object._type as keyof typeof Block]
        const uniqueId = `${object.blockType}_${object._type}_${index}`
        return (
          <Component
            {...object}
            componentId={uniqueId}
            key={uniqueId}
            className={bodyFont.className}
            info={object._type === 'ContactBlock' && props.global.contact}
          />
        )
      })}
    </>
  )
}
