type Swatch = {
  name: string
  color: string
}

const ColorSwatch: React.FC<Swatch> = ({ name, color }) => {
  return (
    <div>
      <span className="docs-block docs-rounded-[var(--ui-radius)]" style={{ background: color }} />
      <p className="docs-mt-1 docs-text-sm docs-font-semibold">{name}</p>
    </div>
  )
}

type ColorPalleteProps = { title: string; swatches: Array<Swatch> }

const ColorPallete: React.FC<ColorPalleteProps> = ({ title, swatches }) => {
  return (
    <div>
      <h3 className="docs-mb-4 docs-text-lg docs-font-bold">{title}</h3>
      <div className="docs-grid docs-gap-2 docs-grid-flow-col">
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
    <div className="docs-flex docs-flex-col docs-gap-3">
      {palletes.map(({ title, swatches }) => (
        <ColorPallete key={title} title={title} swatches={swatches} />
      ))}
    </div>
  )
}
