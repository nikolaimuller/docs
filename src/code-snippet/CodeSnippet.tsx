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
    return prettier
      .format(code, {
        parser: 'babel',
        plugins: [babylon],
      })
      .trim()
  }

  return (
    <Card>
      <Highlight Prism={Prism} code={prettify(code)} language={language} theme={theme}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className={'code'}>
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
