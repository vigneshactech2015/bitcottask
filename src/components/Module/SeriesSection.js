import React from 'react'
function SeriesSection(props) {
  return (
    <section className='main-section'>
{props.series.map((data,index)=>{
    return (
        <section key={index}>
        <img src={data.images.PosterArt.url} className="card" alt={data.title}/>
        <p className="series-title">{data.title}</p>
        </section>
        )
})}
</section>)
}

export default SeriesSection