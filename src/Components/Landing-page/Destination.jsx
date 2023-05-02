import React from 'react'

const Destination = () => {
  return (
    <>
        <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
            <div class="transform scale-110 -rotate-6">
                <img src="https://images.pexels.com/photos/13467879/pexels-photo-13467879.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" loading="lazy"/>
            </div>
            <div class="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                <img src="https://images.pexels.com/photos/13467879/pexels-photo-13467879.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" loading="lazy"/>
            </div>
            <div class="transform scale-150 translate-y-11">
                <img src="https://images.pexels.com/photos/13467879/pexels-photo-13467879.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" loading="lazy"/>
            </div>
            <div class="transform translate-y-24">
                <img src="https://images.pexels.com/photos/13467879/pexels-photo-13467879.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" loading="lazy"/>
            </div>
            <div class="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
                <img src="https://images.pexels.com/photos/13467879/pexels-photo-13467879.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" loading="lazy"/>
            </div>
        </div>
    </>
  )
}

export default Destination