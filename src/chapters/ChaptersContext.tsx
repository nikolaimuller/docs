import * as React from 'react'

type Chapter = {
  id: string
  title: string
}

export type ChaptersContextProps = {
  chapters: Array<Chapter>
  registerChapter: (payload: Chapter) => void
  unregisterChapter: (id: string) => void
}

export const ChaptersContext = React.createContext<ChaptersContextProps>({
  chapters: [],
  registerChapter: () => null,
  unregisterChapter: () => null,
})

export const WithChapters: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [chapters, setChapters] = React.useState<Array<Chapter>>([])

  const registerChapter = React.useCallback((payload: Chapter) => {
    setChapters((prev) => [...prev, payload])
  }, [])

  const unregisterChapter = React.useCallback((id: string) => {
    setChapters((prev) => [...prev.filter((chapter) => chapter.id !== id)])
  }, [])

  return (
    <ChaptersContext.Provider value={{ chapters, registerChapter, unregisterChapter }}>
      {children}
    </ChaptersContext.Provider>
  )
}

export const useChapters = (): ChaptersContextProps => React.useContext(ChaptersContext)
