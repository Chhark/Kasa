import AProposDatas from "../datas/A-propos_data.json"
import DropBox from "../components/DropBox"

function A_propos() {
    return(
        <div className="page-propos">
            <div className='img_banner2' >
            </div>
            {AProposDatas.map((Apropos)=>(
                <DropBox title={Apropos.Title} content={Apropos.Content} key={Apropos.Title}/>
            ))}
        </div>
    )
}
export default A_propos