
import { useEffect, useState } from "react";
const Comentarios = () => {

    const comentarios = () => {
        (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://pets-8.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
            })();
      }

    useEffect(() => {
        comentarios();
      }, []);

    

  return (
    <div>
        <div id="disqus_thread" ></div>

        {comentarios()}
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        

    </div>

  )
}

export default Comentarios