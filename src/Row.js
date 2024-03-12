import Cell from "./Cell"

const Row = (item) => {
  return (
    <tr>
        {Object.entries(item).map(([key ,value]) =>{
            return(
                <Cell Key = {key}
                cellData = {JSON.stringify(value)}/>
            )
        })}
    </tr>
  )
}

export default Row