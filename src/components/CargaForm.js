import React from 'react';
import { useState, useEffect } from 'react';

export default function CargaForm() {
const [data, setData] = useState([]);


    const options  = {
        method: 'GET',
        headers:{
            'Authorization': 'Bearer eyJraWQiOiJURUpqLThwSWdTRFNJeDNnR19aUjVOT1FQRlJRQ1JQaWE0S0N2YkpqZ3VrIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnNUSGw5NDdyRHRBMEpXTnpkNGR4TmFaTldjZXROWm5iSkdMcXZEV0c0d00iLCJpc3MiOiJodHRwczovL3NpZ25pbi5qb2huZGVlcmUuY29tL29hdXRoMi9hdXM3OHRubGF5c01yYUZoQzF0NyIsImF1ZCI6ImNvbS5kZWVyZS5pc2cuYXhpb20iLCJpYXQiOjE2OTQxODcwNTgsImV4cCI6MTY5NDIzMDI1OCwiY2lkIjoiMG9hYW9iMHpjd0x2ZFJaaHc1ZDciLCJ1aWQiOiIwMHU3aXB2OTIxRGV5Y1pzTjVkNyIsInNjcCI6WyJhZzIiLCJhZzEiLCJmaWxlcyIsImFnMyIsIm9yZzEiLCJvcmcyIiwiZXEyIiwiam9icyIsImVxMSJdLCJhdXRoX3RpbWUiOjE2OTQxODcwNTYsInN1YiI6Ilg0ODg5MTFAdmRzcHJvZC5kZWVyZS5jb20iLCJpc2NzYyI6dHJ1ZSwidGllciI6IlBST0QiLCJjbmFtZSI6IkZvcmVzdExpbmsiLCJ1c2VyVHlwZSI6IkRlYWxlciBFbXBsb3llZSIsImNhcGlkIjoiOGQ0MTAzNDgtOWM4ZC00MDQ4LTgyMDgtYTgzYjAyMzBiNGEwIn0.Uhf378Ni9wW8vAk5cUzvCboIkPyGgSQjSPU6CtxhojNbGwJV2UhBHjevsMU9IqvHVS9oRHUxi0yLM2r0LYYIni98d6buXjqxLl6qbiPiAkpeqTv-IutUzBNyqeU7eGus2NnpJ-9qLNI0PYys7B2q3HBU7-d1ukh0SAD23WxQaToRz9Df7T2cLIqZPNNmvgqcncUoUu0B-6rAS5abUq5VgiMTNak9fUcOHQn7nlgzDv3No4CuE78iw0p1zKOeICaJjHDviBmRZgUI9UL6O8dO53VfDwNS4jt2_DYnRLMFZrLcTuLm3gAzOCzuecnR2KPM0b1VEToNPdS0M6bAaF1dlQ',
            'Accept': 'application/vnd.deere.axiom.v3+json',
            'Connection': 'keep-alive'
        
        }
    }
    
    fetch("https://partnerapi.deere.com/platform/organizations;start=174;count=174", options)
      .then (res => res.json())
      .then(response => {
        console.log(response)
     })
    

  return (
    <div className='App'>
        <p>Carga Datos</p>
        {data.map(record => (
            <div key={record.id}>{record.name},{record.username}</div>
        ))}
      
    </div>
  )
}
