import React from 'react';
import {Character} from 'react-renai';

const sprite = (emotion) => <div className='charatme-container'><img src={`images/sue/${emotion}.png`} alt={`${emotion} sue`} /></div>

const Sue = (props) => {
  const emotions = [
    {
      emotion: 'neutral',
      sprite: sprite('neutral')
    },
    {
      emotion: 'cringe',
      sprite: sprite('cringe')
    },
    {
      emotion: 'excited',
      sprite: sprite('excited')
    },
    {
      emotion: 'surprised',
      sprite: sprite('surprised')
    },
    {
      emotion: 'sad',
      sprite: sprite('sad')
    },
    {
      emotion: 'sleepy',
      sprite: sprite('sleepy')
    },
  ]
  return (<Character emotions={emotions} {...props} />)
}

export default Sue;