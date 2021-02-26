
const Procedures = ()=> {
    const procedures = [
        "Deep Cleaning",
        "Filling",
        "Crown",
        "Root Canal",
        "Oral Surgery"
    ]

    // map function to get an array of li items
    // with each procedure
    const procedureList = procedures.map((procedure, index)=> {
        return <li key={index}>{procedure}</li>
    })

    return (
        <div>
            <h1>Procedures</h1>
            <ul>
                {procedureList}
            </ul>
        </div>
    )
}

export default Procedures