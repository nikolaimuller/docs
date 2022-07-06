import Highlight, { Language, Prism } from 'prism-react-renderer'
import prettier from 'prettier/standalone'
import babylon from 'prettier/parser-babel'

import { Card } from '../card'

import { theme } from './theme'

export type CodeSnippetProps = {
  children: string
  language: Language
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ children: code, language }) => {
  const prettify = (code: string): string => {
    switch (language) {
      case 'tsx': {
        return prettier
          .format(code, {
            parser: 'babel',
            plugins: [babylon],
          })
          .trim()
      }
      default: {
        return code.trim()
      }
    }
  }

  return (
    <Card>
      <Highlight Prism={Prism} code={prettify(code)} language={language} theme={theme}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="docs-bg-neutral docs-p-[1rem] docs-font-code selection:docs-bg-[color:var(--color-neutral-hover)] selection:docs-text-inherit">
            {tokens.map((line, key) => (
              <div {...getLineProps({ line })} key={key}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token })} key={key} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Card>
  )
}

export const InlineCode: React.FC<{ children: string }> = ({ children }) => (
  <code className="docs-rounded-md docs-bg-neutral docs-p-1">{children}</code>
)
