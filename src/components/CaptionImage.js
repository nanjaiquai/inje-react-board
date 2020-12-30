import React from 'react';

export default function CaptionImage(props){
  console.log(props);
  return (
    <div>
      <img src={props.imgUrl} alt="" />
      <p>{props.caption}</p>
    </div>
  )
}