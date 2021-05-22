import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import chroma from 'chroma-js';
import ModalDefault from "../../modal/ModalDefault";

const Sidebar = () => {
    /**
     * @desc - Create State Static
     */

    const options = [
        {value: 'banyu_sari', label: 'Banyu Sari'},
        {value: 'batujaya', label: 'Batujaya'},
        {value: 'ciampel', label: 'Ciampel'},
        {value: 'cibuaya', label: 'Cibuaya'},
        {value: 'cikampek', label: 'Cikampek'},
        {value: 'cilamaya_kulon', label: 'Cilamaya Kulon'},
        {value: 'cilamaya_wetan', label: 'Cilamaya Wetan'},
        {value: 'cilebar', label: 'Cilebar'},
        {value: 'jatisari', label: 'Jatisari'},
        {value: 'jayakerta', label: 'Jayakerta'},
        {value: 'karawang_barat', label: 'Karawang Barat'},
        {value: 'karawang_timur', label: 'Karawang Timur'},
        {value: 'klari', label: 'Klari'},
        {value: 'kotabaru', label: 'Kotabaru'},
        {value: 'kutawaluya', label: 'Kutawaluya'},
        {value: 'lemahabang', label: 'Lemahabang'},
        {value: 'majalaya', label: 'Majalaya'},
        {value: 'pakisjaya', label: 'Pakisjaya'},
        {value: 'pangkalan', label: 'Pangkalan'},
        {value: 'pedes', label: 'Pedes'},
        {value: 'purwasari', label: 'Purwasari'},
        {value: 'rawamerta', label: 'Rawamerta'},
        {value: 'rengasdengklok', label: 'Rengas Dengklok'},
        {value: 'tegalwaru', label: 'Tegalwaru'},
        {value: 'talagasari', label: 'Talagasari'},
        {value: 'telukjambe_barat', label: 'Teluk Jambe Barat'},
        {value: 'telukjambe_timur', label: 'Teluk Jambe Timur'},
        {value: 'tempuran', label: 'Tempuran'},
        {value: 'tirtajaya', label: 'Tirtajaya'},
        {value: 'tirtamulya', label: 'Tirtamulya'},
    ]

    /**
     * @define - on Change
     */
    const [formdata, setFormdata] = useState({
        opt_booking: {
            min_harga: 0,
            max_harga: 0,
            location: []
        }
    })
    const onChange = (e) => {
        setFormdata({
            ...formdata,
            opt_booking: {
                ...formdata.opt_booking,
                [e.target.name]: e.target.value
            }
        })
    }

    const [loc_opt,setLoc_opt] = useState('')
    const [mapView,setMapView] = useState(false)
    const onChangeOpt = (e)=> {
        if (e.currentTarget.value !== loc_opt){
            setLoc_opt(e.currentTarget.value)
        }
    }
    const onClickBtnMap = ()=>{
        setMapView( !mapView)
    }


    return (
        <div className="sidebar search">
            <div className="sidebar-layout">
                <ul className="sidebar-layout__items">
                    <li className="sidebar-layout__items-item title">
                        <div className="sidebar-item__icon">
                            <i className={'mdi mdi-currency-usd'}/>
                        </div>
                        <div className="sidebar-item__title">
                            <p>Harga</p>
                        </div>
                        <ul className="sidebar-layout__items children">
                            <li className="sidebar-layout__items-item title">
                                <div className={"sidebar-item__input with-label"}>
                                    <label htmlFor="min_harga"><span>Min Harga</span></label>
                                    <input type="number" name="min_harga" max={10000000} min={0} autoComplete="off"
                                           spellCheck={"false"}/>
                                </div>
                            </li>
                            <li className="sidebar-layout__items-item title">
                                <div className={"sidebar-item__input with-label"}>
                                    <label htmlFor="max_harga"><span>Max Harga</span></label>
                                    <input type="number" name="max_harga" max={10000000} min={0}/>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-layout__items-item title">
                        <div className="sidebar-item__icon">
                            <i className={'mdi mdi-map-marker'}/>
                        </div>
                        <div className="sidebar-item__title">
                            <p>Location</p>
                        </div>
                        <ul className="sidebar-layout__items children">
                            <li className="sidebar-layout__items-item title">
                                <div className={"sidebar-item__input with-label radio"}>
                                    <div className={"flex"}>
                                        <input
                                            type="radio"
                                            name="opt_location"
                                            id="opt_location"
                                            value={"mark"}
                                            onChange={onChangeOpt}
                                            // checked={loc_opt === "mark" ?"false":"true"}
                                        />
                                        <label htmlFor="opt_location">Mark Map</label>
                                    </div>
                                    <div className={"flex"}>
                                        <input
                                            type="radio"
                                            name="opt_location"
                                            id="opt_location_name"
                                            value={"name"}
                                            onChange={onChangeOpt}
                                        />
                                        <label htmlFor="opt_location_name">Location Name</label>
                                    </div>
                                </div>
                            </li>
                            { loc_opt !== "" && loc_opt === "mark" && (
                                <li className="sidebar-layout__items-layout__items">
                                    <div className="sidebar-item__input">
                                        <div className={"flex"}>
                                            <button className={`btn btn-marked`} onClick={onClickBtnMap}>
                                                Open Map
                                            </button>
                                        </div>
                                    </div>
                                    {mapView && (<ModalDefault/>)}
                                </li>                            )}
                            { loc_opt !== "" && loc_opt === "name" && (
                                <li className="sidebar-layout__items-item title">
                                    <div className={"sidebar-item__input with-label"}>
                                        <Select
                                            defaultValue={[options[2], options[3]]}
                                            isMulti
                                            name="location"
                                            onChange={(val)=> {
                                                onChange({target: { name:'location', value: val }})
                                            }}
                                            options={options}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </div>

                                </li>
                            )}
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    )
}
Sidebar.propTypes = {}
const mapStateToProps = state => ({})
export default connect(mapStateToProps, {})(Sidebar)