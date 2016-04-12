<article>
  <h2><a href='{{ .Permalink }}'> {{ .Title }}</a></h2>
  <p>
    {{ .Description }} 
    <span class="date">{{ .Date.Format "January 2, 2006" }}</span></p>
  <ul class="categories">
    {{ range .Params.categories }}
      <li><a href="/categories/{{ . | urlize }}">{{ . }}</a></li>
    {{ end }}
  </ul>
</article>
