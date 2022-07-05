import { MDXProvider } from '@mdx-js/react'
import { DocsContext, DocsContextProps } from '@storybook/addon-docs/blocks'
import { useDarkMode } from 'storybook-dark-mode'

import {
  Link,
  PageTitle,
  Page,
  Subtitle,
  Playground,
  DocsProvider,
  SectionTitle,
  Paragraph,
  PropsTable,
  Chapters,
  CodeSnippet,
  CodeSnippetProps,
  List,
  ListItem,
} from '../../../../src'

import { lightColors, darkColors } from '../../src/theme'

const Code: React.FC<{ className: string } & CodeSnippetProps> = ({ className, ...props }) => {
  const match = /language-(\w+)/.exec(className || '')

  return <CodeSnippet language={match[1]} {...props} />
}

const defaultComponents = {
  h1: PageTitle,
  h2: SectionTitle,
  h3: Subtitle,
  p: Paragraph,
  a: Link,
  pre: ({ children }) => children,
  code: Code,
  ul: List,
  li: ListItem,
  Playground,
  PropsTable,
  Chapters,
}

export const DocsContainer: React.FC<{ context: DocsContextProps; children: React.ReactNode }> = ({
  context,
  children,
}) => {
  const { id: storyId, parameters = {} } = context || {}
  const { docs = {} } = parameters

  const allComponents = { ...defaultComponents, ...docs.components }

  return (
    <DocsContext.Provider value={context}>
      <MDXProvider components={allComponents}>
        <DocsProvider
          themes={{
            light: {
              'color-background-primary': lightColors.background,
              'color-background-secondary': lightColors.neutral,
              'color-text-primary': '#000000',
              'color-text-secondary': '#686868',
              'color-neutral': lightColors.neutral,
              'color-neutral-hover': '#0000001a',
            },
            dark: {
              'color-background-primary': darkColors.background,
              'color-background-secondary': darkColors.neutral,
              'color-text-primary': '#eaeaea',
              'color-text-secondary': '#8a8a8a',
              'color-neutral': darkColors.neutral,
              'color-neutral-hover': '#ffffff21',
            },
          }}
          currentTheme={useDarkMode() ? 'dark' : 'light'}
        >
          <Page>{children}</Page>
        </DocsProvider>
      </MDXProvider>
    </DocsContext.Provider>
  )
}
