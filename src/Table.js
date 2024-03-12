import Row from "./Row"

const Table = (item) => {
  return (
    <div className='table-container'>
    <table>
        <tbody>
            {item.map(() => (
                <Row 
                key = {item.id}
                item = {item}/>
            ))}
        </tbody>
    </table>
    </div>
  )
}

export default Table