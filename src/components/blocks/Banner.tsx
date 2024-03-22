import {
  Avatar,
  Breadcrumbs,
  Button,
  ImageObject,
  Tag,
} from '@components/modules'
import { Container, Flex, Grid, Heading } from '@components/utility'
import { compileAuthorNames } from '@utils/compileAuthorNames'
import { parseMarkdownToHTML } from '@utils/parseMarkdownToHTML'
import { BannerProps } from '@utils/types'
import dayjs from 'dayjs'

export const Banner = ({
  authors,
  backgroundImage,
  bgColor = 'blue',
  boxBgColor = 'white',
  className,
  componentId,
  contained,
  containedWidth = 'narrow',
  crumbs,
  date,
  foregroundMedia,
  heading,
  headingLevel = 2,
  links,
  message,
  micro,
  overlap,
  style,
  subheading,
  tags,
  testId,
}: BannerProps) => {
  const content = (alone: boolean) => (
    <>
      <Flex
        className={alone ? 'innerContent' : undefined}
        justifyContent={alone ? 'flex-start' : 'center'}
        alignItems={alone ? 'flex-start' : 'center'}
      >
        <div>
          {crumbs && (crumbs.items || crumbs.current) && (
            <Breadcrumbs current={crumbs.current} crumbs={crumbs.items} />
          )}
          {tags && tags.length > 0 && (
            <Flex columnBreak="none" gap="xxs" className="tags">
              {tags.map((tag, index) => (
                <Tag key={tag.label + index} {...tag} />
              ))}
            </Flex>
          )}
          {date && <p className="date">{dayjs(date).format('MMM DD, YYYY')}</p>}

          <Heading testId="banner-heading" level={headingLevel}>
            {heading}
          </Heading>
          {subheading && (
            <p className="subheading">
              <strong>{subheading}</strong>
            </p>
          )}
          {message && (
            <div
              data-testid="banner-message"
              dangerouslySetInnerHTML={{
                __html: parseMarkdownToHTML(message),
              }}
            />
          )}
          {links && (
            <div className="links">
              {links.map((link, index) => (
                <Button key={index} {...link} />
              ))}
            </div>
          )}
          {authors && (
            <Flex
              gap="xxs"
              columnBreak="md"
              className={`authors${authors.length > 1 ? ' multiple' : ''}`}
              alignItems="center"
            >
              <Flex
                gap="none"
                className={`avatars`}
                alignItems="flex-start"
                columnBreak="none"
              >
                {authors.map((author, index) => (
                  <Flex
                    key={author.firstName + author.lastName + index}
                    gap="none"
                    columnBreak="none"
                    className="author"
                  >
                    <Avatar {...author} size={3} />
                  </Flex>
                ))}
              </Flex>
              {<p className="authorNames">{compileAuthorNames(authors)}</p>}
            </Flex>
          )}
        </div>
      </Flex>
    </>
  )

  return (
    <section
      id={componentId}
      className={`banner ${bgColor}${contained && overlap ? ' overlap' : ''}${
        contained ? ' contained' : ''
      }${className ? ` ${className}` : ''}${
        backgroundImage ? ' has-image' : ''
      }${contained && micro ? ' micro' : ''}`}
      data-testid={testId}
      style={style}
    >
      {!contained && backgroundImage && (
        <ImageObject
          {...backgroundImage}
          isBackground
          testId="banner-image"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      )}
      <Container containerClass={contained ? containedWidth : undefined}>
        <div
          className={`inner${contained && boxBgColor && !backgroundImage ? ` ${boxBgColor}` : ''}`}
        >
          {contained && backgroundImage && (
            <ImageObject
              {...backgroundImage}
              isBackground
              testId="banner-image"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          )}

          {foregroundMedia ? (
            <Grid columns={2} gap="lg">
              {content(false)}
            </Grid>
          ) : (
            content(true)
          )}
        </div>
      </Container>
    </section>
  )
}
