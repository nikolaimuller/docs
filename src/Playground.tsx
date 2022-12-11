import { LiveEditor, LiveError, LivePreview, LiveProvider, LiveProviderProps } from 'react-live'
import prettier from 'prettier/standalone'
import babylon from 'prettier/parser-babel'

import { Card } from './Card'
import { CodeLanguage, CodeSnippetTheme } from './CodeSnippet'

export type PlaygroundProps = { code: string; language: CodeLanguage } & Pick<
  LiveProviderProps,
  'scope'
>

export const Playground: React.FC<PlaygroundProps> = ({ code, language, scope }) => {
  const prettify = (code: string): string => {
    return prettier
      .format(code, {
        parser: 'babel',
        plugins: [babylon],
        singleQuote: true,
      })
      .trim()
  }

  return (
    <Card>
      <LiveProvider code={prettify(code)} lang={language} scope={scope} theme={CodeSnippetTheme}>
        <div className="docs-p-[1rem]">
          <LivePreview />
          <LiveError className="docs-text-[#df4b40]" />
        </div>
        <LiveEditor className="docs-bg-neutral docs-p-[1rem] selection:docs-bg-[var(--color-neutral-hover)] [&::-webkit-scrollbar]:docs-h-2 [&::-webkit-scrollbar]:docs-w-2 [&::-webkit-scrollbar-thumb]:docs-rounded-full [&::-webkit-scrollbar-thumb]:docs-bg-neutral-hover" />
      </LiveProvider>
    </Card>
  )
}
