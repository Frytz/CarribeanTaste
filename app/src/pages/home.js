import React, {useState} from 'react';

import {content} from '../data/content';


export default function Home(props) {

    const [ctContent] = useState(content);


    return(
<div>

      {ctContent.map(c => ( <article>
           <h1>{c.intro}</h1>
      <h2>{c.featured}</h2>
      <h2>{c.testimonials}</h2>
      <h2>{c.tipOfTheDay}</h2>
</article>
      ))}


</div>

    )


}