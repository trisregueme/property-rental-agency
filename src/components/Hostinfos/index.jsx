function HostInfos( {infos} ) {
    const hostname = infos.name.split(" ")

    return (
        <div className="host-card">
            <div className="host-name">
                <span>{hostname[1]}</span>
                <span>{hostname[0]}</span>
            </div>
            <img src={infos.picture} alt={infos.name}></img>
        </div>
    )
}
export default HostInfos