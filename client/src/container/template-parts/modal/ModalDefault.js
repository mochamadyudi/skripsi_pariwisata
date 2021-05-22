import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import GoogleMapReact from 'google-map-react';
import Lottie from 'react-lottie'

const AnyReactComponent = ({ lat, lng }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: require('../../../assets/lottie/bouncy-marker-map.json'),
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return(
        <div className="map-marker" lat={lat} lng={lng}>
            <Lottie options={defaultOptions}
                    height={60}
                    width={60}
                    isStopped={false}
                    isPaused={false}/>
        </div>

    );
}

const ModalDefault = ()=> {

    const [coords, setCoords] = useState({
        center: [],
        zoom:12,
        draggable: false,
        lat:0,
        lng:0
    })

    const [load,setLoad] = useState(true)

    useEffect(()=> {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((pos)=>{
                setCoords({
                    ...coords,
                    center: [pos.coords.latitude, pos.coords.longitude ],
                    lat: pos.coords.latitude,
                    lng:pos.coords.longitude
                })
                setLoad(false)
            })
        }else{
            navigator.geolocation.getCurrentPosition()
        }
    },[navigator])

    const onCircleInteraction = (childKey, childProps, mouse)=> {
        // function is just a stub to test callbacks
        setCoords({
            ...coords,
            draggable: false,
            lat:mouse.lat,
            lng: mouse.lng
        })

    }
    const onCircleInteraction3 = (childKey, childProps, mouse)=> {
        setCoords({
            ...coords,
            draggable: true
        })

    }

    const onChange = ({center,zoom})=> {
        setCoords({
            ...coords,
            center:center,
            zoom:zoom
        })
    }
    return(
        <div className="modal popup">
            <div className="modal-popup__layout">
                <div className="modal-popup__layout-header">
                    <div className="popup-title">
                        <i className="mdi mdi-map-marker"/>
                        <h2 className={"popup-title"}>Maps Place</h2>
                    </div>
                    <button className="btn">
                        <i className="mdi mdi-close"/>
                    </button>
                </div>
                <div className="modal-popup__layout-content">
                    {!load && (
                        <GoogleMapReact
                            draggable={coords.draggable}
                            bootstrapURLKeys={{ key: "AIzaSyBCkv_KHX_MQhE0ghPBv3K7jmohNdHXoo0"/* YOUR KEY HERE */ }}
                            defaultCenter={coords}
                            defaultZoom={coords.zoom}
                            onChange={onChange}
                            onChildMouseDown={onCircleInteraction}
                            onChildMouseUp={onCircleInteraction3}
                            onChildMouseMove={onCircleInteraction}
                            onChildClick={() => console.log('child click')}
                            onClick={()=> console.log('map click')}
                        >
                            <AnyReactComponent
                                lat={coords.lat}
                                lng={coords.lng}

                            />
                        </GoogleMapReact>
                    )}
                </div>
            </div>
            <div className="modal-popup__bg-close"></div>
        </div>
    )
}

ModalDefault.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(ModalDefault)