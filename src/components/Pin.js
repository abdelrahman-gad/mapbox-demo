import React, { PureComponent } from 'react';
const ICON='M255,0C155.55,0,76.5,79.05,76.5,178.5C76.5,311.1,255,510,255,510s178.5-198.9,178.5-331.5C433.5,79.05,354.45,0,255,0z     M255,242.25c-35.7,0-63.75-28.05-63.75-63.75s28.05-63.75,63.75-63.75s63.75,28.05,63.75,63.75S290.7,242.25,255,242.25z';
const pinStyle={
    cursor:'pointer',
    fill:'#d00',
    stroke:'none'
};
export default class CityPin extends PureComponent{

render(){
    const {size=20,onClick}=this.props;
return (
    <svg 
    height={size} viewBox='0 0 24 24'
    style={{...pinStyle,transform:`translate(${-size/2}px,${-size}px)`}}
    onClick={onClick}
    
    >
        <path d={ICON} />

    </svg>
);
}


}