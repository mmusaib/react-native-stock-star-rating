import React from 'react';
import { Text } from 'react-native';
import * as Maker from './maker';


const FilledStar = ({size, color}) => {
    return( <Text style={{fontSize: size, color: color}}>{Maker.filledStar()}</Text> )
}

const EmptyStar = ({size,color}) => {
    return( <Text style={{fontSize: size, color: color}}>{Maker.emptyStar()}</Text> )
}


export {
    FilledStar, EmptyStar
};