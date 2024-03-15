'use client'
import { Box, Flex, Heading } from '@components/utility'
import { EventProps } from '@utils/types'
import {
  ImageObject,
  GalleryModal,
  Button,
  LinkObject,
} from '@components/modules'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { headingFont } from '@utils/fonts'
import { convertTime } from '@utils/convertTime'

export const Event = ({
  className,
  componentId,
  date,
  doorsOpenTime,
  endTime,
  links,
  location,
  poster,
  startTime,
  testId,
  title,
}: EventProps) => {
  const [posterOpen, setPosterOpen] = useState(false)
  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPosterOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
  }, [])

  const isDateThisYear = dayjs(date).isSame(new Date(), 'year')

  const timeString = () => {
    const mainTime =
      startTime && endTime ? (
        <>
          <strong>Event time:</strong>{' '}
          {convertTime(startTime).toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
          })}{' '}
          -{' '}
          {convertTime(endTime).toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
          })}
        </>
      ) : (
        <>
          <strong>Event Starts at </strong>
          {convertTime(startTime).toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
          })}
        </>
      )
    return mainTime
  }

  return (
    <Box
      componentId={componentId}
      testId={testId}
      className={`event${className ? ` ${className}` : ''}`}
    >
      <Flex
        alignItems="flex-start"
        gap={poster ? 'xxs' : 'sm'}
        justifyContent="space-between"
      >
        <Flex
          alignItems="flex-start"
          gap={poster ? 'xxs' : 'sm'}
          className="details"
        >
          <Box radius={4} className="date">
            <span>{dayjs(date).format('MMM')}</span>
            <Heading level={3} nonHeadingElement="p">
              {dayjs(date).format('DD')}
            </Heading>
            {!isDateThisYear && <span>{dayjs(date).format('YYYY')}</span>}
          </Box>
          <Flex gap="xxs" alignItems="stretch" fill className="info">
            {poster && (
              <Box overflow className="poster">
                <Button
                  unstyled
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  onClick={() => {
                    setPosterOpen(!posterOpen)
                  }}
                >
                  <span className={headingFont.className}>See Full Image</span>
                  <ImageObject
                    isBackground
                    {...poster}
                    width={undefined}
                    height={undefined}
                    alt={`Poster for ${title}`}
                  />
                </Button>
                <GalleryModal
                  items={[poster]}
                  setActiveIndex={() => {}}
                  isModalOpen={posterOpen}
                  setIsModalOpen={setPosterOpen}
                  activeIndex={0}
                  controls={false}
                />
              </Box>
            )}
            <div>
              <Heading level={4} nonHeadingElement="p">
                {title}
              </Heading>
              {location && (
                <>
                  <p>{location.name}</p>
                  {location.address && (
                    <LinkObject
                      href={`https://www.google.com/maps/place/${location.address}`}
                    >
                      <small>{location.address}</small>
                    </LinkObject>
                  )}
                </>
              )}
              <div className="times">
                <p>
                  <small>{timeString()}</small>
                </p>
                {doorsOpenTime && (
                  <p>
                    <small>
                      <strong>Doors open at </strong>
                      {convertTime(doorsOpenTime).toLocaleTimeString([], {
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                    </small>
                  </p>
                )}
              </div>
            </div>
          </Flex>
        </Flex>
        {links && links.length > 0 && (
          <Flex
            className="links"
            gap="xs"
            columnBreak="xxs"
            justifyContent="flex-end"
          >
            {links.map((link) => (
              <Button
                type="link"
                small
                key={link.label}
                href={link.href}
                label={link.label}
              />
            ))}
          </Flex>
        )}
      </Flex>
    </Box>
  )
}
