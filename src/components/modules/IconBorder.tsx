import { Flex } from '@components/utility'
import {
  Guitar,
  Horse,
  Microphone,
  Television,
  Trophy,
} from '@phosphor-icons/react/dist/ssr'
import { repeater } from '@utils/repeater'

export const IconBorder = () => {
  return (
    <div className="iconBorder">
      <Flex columnBreak="none" gap="none" className="inner">
        {repeater(
          60,
          <>
            <Horse size={40} weight="fill" />
            <Trophy size={40} weight="fill" />
            <Guitar size={40} weight="fill" />
            <Television size={40} weight="fill" />
            <Microphone size={40} weight="fill" />
          </>
        )}
      </Flex>
    </div>
  )
}
