import Highlight, { Language, Prism, PrismTheme } from 'prism-react-renderer'
import prettier from 'prettier/standalone'
import babylon from 'prettier/parser-babel'

import { Card } from './Card'

export const CodeSnippetTheme: PrismTheme = {
  plain: {
    color: 'var(--color-code-01)',
    padding: '0',
  },
  styles: [
    {
      types: ['changed'],
      style: {
        color: 'rgb(162, 191, 252)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgba(239, 83, 80, 0.56)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['inserted', 'attr-name'],
      style: {
        color: 'var(--color-code-04)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['comment'],
      style: {
        color: 'var(--color-code-02)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string', 'url'],
      style: {
        color: 'var(--color-code-06)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'var(--color-code-08)',
      },
    },
    {
      types: ['number'],
      style: {
        color: 'var(--color-code-04)',
      },
    },
    {
      types: ['builtin', 'char', 'constant', 'function'],
      style: {
        color: 'var(--color-code-03)',
      },
    },
    {
      types: ['statement'],
      style: {
        color: 'var(--color-code-07)',
      },
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ['punctuation'],
      style: {
        color: 'var(--color-code-07)',
      },
    },
    {
      types: ['selector', 'doctype'],
      style: {
        color: 'var(--color-code-09)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: 'var(--color-code-05)',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: 'var(--color-code-09)',
      },
    },
    {
      types: ['tag', 'operator'],
      style: {
        color: 'var(--color-code-04)',
      },
    },
    {
      types: ['boolean'],
      style: {
        color: 'var(--color-code-04)',
      },
    },
    {
      types: ['property'],
      style: {
        color: 'var(--color-code-05)',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
  ],
}

export type CodeLanguage = Language

export type CodeSnippetProps = {
  children: string
  language: CodeLanguage
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
      <Highlight Prism={Prism} code={prettify(code)} language={language} theme={CodeSnippetTheme}>
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
