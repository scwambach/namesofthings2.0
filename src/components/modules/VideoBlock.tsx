'use client'
import { VideoBlockProps } from '@utils/types'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Play } from '@phosphor-icons/react/dist/ssr'
import { Box, Flex, Heading, Markdown } from '@components/utility'
import { colors } from '@utils/settings'

export const VideoBlock = ({
  className,
  componentId,
  copy,
  poster,
  testId,
  title,
  url,
}: VideoBlockProps) => {
  const [hasWindow, setHasWindow] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  return (
    <Flex
      componentId={componentId}
      direction="column"
      gap="xxs"
      alignItems="stretch"
      className={`videoBlock${className ? ` ${className}` : ''}`}
      testId={testId}
    >
      <Box>
        {hasWindow && (
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            playIcon={<Play size={80} color={colors.white} weight="fill" />}
            light={poster?.src}
            controls
            onClickPreview={() => {
              setIsPlaying(true)
            }}
            playing={isPlaying}
          />
        )}
      </Box>
      {title ||
        (copy && (
          <Flex direction="column" gap="micro" className="info">
            {title && (
              <Heading level={2} nonHeadingElement="p">
                {title}
              </Heading>
            )}
            {copy && <Markdown>{copy}</Markdown>}
          </Flex>
        ))}
    </Flex>
  )
}
