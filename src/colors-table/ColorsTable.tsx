type Swatch = {
  name: string
  color: string
}

const ColorSwatch: React.FC<Swatch> = ({ name, color }) => {
  return (
    <div className={'color-item'}>
      <span className={'color-swatch'} style={{ background: color }} />
      <p className={'color-swatch-label'}>{name}</p>
    </div>
  )
}

type ColorPalleteProps = { title: string; swatches: Array<Swatch> }

const ColorPallete: React.FC<ColorPalleteProps> = ({ title, swatches }) => {
  return (
    <div>
      <h3 className={'pallete-title'}>{title}</h3>
      <div className={'pallete-grid'}>
        {swatches.map(({ name, color }) => (
          <ColorSwatch key={name} name={name} color={color} />
        ))}
      </div>
    </div>
  )
}

export type ColorsTableProps = {
  palletes: Array<{ title: string; swatches: Array<Swatch> }>
}

export const ColorsTable: React.FC<ColorsTableProps> = ({ palletes }) => {
  return (
    <div className={'colors-table'}>
      {palletes.map(({ title, swatches }) => (
        <ColorPallete key={title} title={title} swatches={swatches} />
      ))}
    </div>
  )
}
