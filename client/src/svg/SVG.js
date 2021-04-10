import React from 'react'
import { ReactComponent as Information } from './info-circle-solid.svg'
import { ReactComponent as Meh } from './meh-regular.svg'
import { ReactComponent as SmileIcon } from './smile-beam.svg'
import { ReactComponent as Minimize } from './compress-alt-solid.svg'
import {ReactComponent as Event} from './calendar-plus-regular.svg'
import {ReactComponent as Settings} from './cog-solid.svg'
import {ReactComponent as Mount} from './mount-fuji-svgrepo-com.svg'

export default function SVG(props) {
    var ret = <></>;

    if (props.icon === 'smile')
        ret = <SmileIcon height={props.height} width={props.width}></SmileIcon>;
    else if (props.icon === 'meh')
        ret = ret = <Meh height={props.height} width={props.width}></Meh>;
    else if (props.icon === 'information')
         ret = <Information height={props.height} width={props.width}></Information>;
    else if (props.icon === 'minimize')
         ret = <Minimize height={props.height} width={props.width}></Minimize>;
    else if (props.icon === 'event')
         ret = <Event height={props.height} width={props.width}></Event>;
    else if (props.icon === 'settings')
         ret = <Settings height={props.height} width={props.width}></Settings>;
    else if (props.icon === 'mount')
         ret = <Mount height={props.height} width={props.width}></Mount>;
         

    return (ret);
}