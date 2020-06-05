import React, {useContext} from 'react';
import {activeContContext} from '../contexts/activeContent';

export default function Home() {

    const cfData = useContext(activeContContext);

    return(
<div>

      {cfData.map(c => ( <article>
           <h1>{c.intro}</h1>
      <h2>{c.featured}</h2>
      <h2>{c.testimonials}</h2>
      <h2>{c.tipOfTheDay}</h2>
</article>
      ))}


</div>

    )


}