import "./NotFound.css"

function NotFound() {
  return (
    <div>
<h1>404 Error Page</h1>
<p class="zoom-area"><b>Oops!</b> You must  be lost. </p>
<section c
         ass="error-container">
  <span class="four"><span class="screen-reader-text">4</span></span>
  <span class="zero"><span class="screen-reader-text">0</span></span>
  <span class="four"><span class="screen-reader-text">4</span></span>
</section>
<div class="link-container">
  <a target="_blank" href="/" class="more-link">Visit the homepage</a>
</div>  
    </div>
  )
}

export default NotFound