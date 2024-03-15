'use client'
import { Button } from '@components/modules'
import { SectionHeading } from '@components/modules'
import { Box, Container, Flex } from '@components/utility'
import { IconSelector } from '@components/utility'
import { TabsProps } from '@utils/types'
import { useState } from 'react'

export const Tabs = ({
  className,
  componentId,
  container,
  heading,
  items,
  level,
  subheading,
  testId,
  theme = 'primary',
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <section
      id={componentId}
      data-testid={testId}
      className={`tabs${className ? ` ${className}` : ''}`}
    >
      <Container containerClass={container}>
        {heading && (
          <SectionHeading
            heading={heading}
            level={level}
            subheading={subheading}
          />
        )}

        <Button
          className={`toggle ${theme}${menuOpen ? ' open' : ''}`}
          unstyled
          style={{ width: '100%' }}
          onClick={() => {
            setMenuOpen(!menuOpen)
          }}
        >
          <Flex
            columnBreak="none"
            gap="none"
            justifyContent="space-between"
            alignItems="center"
            style={{ width: '100%' }}
          >
            <Flex columnBreak="none" gap="xxs" alignItems="center">
              <IconSelector icon="List" size={22} />
              <span>{items[activeTab].label}</span>
            </Flex>
            <IconSelector className="indicator" icon="CaretDown" size={22} />
          </Flex>
        </Button>
        <Flex
          elementTag="ul"
          className={`unstyled${menuOpen ? ' open' : ''}`}
          gap="micro"
        >
          {items.map((item, index) => (
            <li key={index} className="item">
              <Button
                theme={theme}
                onClick={() => {
                  setActiveTab(index)
                  setMenuOpen(false)
                }}
                className={activeTab === index ? 'active' : ''}
              >
                {item.label}
              </Button>
            </li>
          ))}
        </Flex>
        <Box shadow={2} className="panel">
          {items[activeTab].content}
        </Box>
      </Container>
    </section>
  )
}
