import { LiveEditor, LiveError, LivePreview, LiveProvider, LiveProviderProps } from 'react-live'
import prettier from 'prettier/standalone'
import babylon from 'prettier/parser-babel'

import { Card } from '../card'
import { theme } from '../code-snippet/theme'

// import styles from './playground.module.css'
// import codeStyles from '../code-snippet/code-snippet.module.css'

export type PlaygroundProps = { code: string } & Pick<LiveProviderProps, 'language' | 'scope'>

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
    <Card className={'playground'}>
      <LiveProvider code={prettify(code)} lang={language} scope={scope} theme={theme}>
        <div className={'preview'}>
          <LivePreview />
          <LiveError className={'error'} />
        </div>
        <LiveEditor className={'code'} />
      </LiveProvider>
    </Card>
  )
}
