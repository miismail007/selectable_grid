import React from 'react'

type SelectableGridtype = {
    rows: number,
    cols: number
}

function SelectableGrid({rows,cols} : SelectableGridtype) {
  return (
    <div className='grid' style={{"--rows": rows, "--cols": cols} as React.CSSProperties}>
        {Array.from({ length: rows * cols }, (_, i) => <div className={`box`} key={i}>{i + 1}</div>)}
    </div>
  )
}

export default SelectableGrid