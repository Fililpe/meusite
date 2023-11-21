class card extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())

    }

    build() {
        const cardRoot = document.createElement("div")
        cardRoot.setAttribute("class", "card")

        //imagem 
        const cardImage = document.createElement("div")
        cardImage.setAttribute("class", "card-image")

        const newsImg = document.createElement("img")
        newsImg.src = this.getAttribute ("photo") || "../assets/imgs/no-image.png"
        cardImage.appendChild(newsImg)
        //imagem 
        
        //titulo
        const categoryEl = document.createElement("div")
        categoryEl.setAttribute("class", "category")

        const spanCategory = document.createElement("span")
        spanCategory.textContent = this.getAttribute("title") || "title"
        categoryEl.appendChild(spanCategory)
        //titulo
        
        // cabeçalho
        const headingEl = document.createElement("div")        
        headingEl.setAttribute("class", "heading")

        const spanHeading = document.createElement("span")
        spanHeading.textContent = this.getAttribute("contet") || "undefined"
        headingEl.appendChild(spanHeading)
        // cabeçalho

        //autor
        const authorEl = document.createElement("div")
        authorEl.setAttribute("class", "author")

        const spanAuthor = document.createElement("span")
        spanAuthor.textContent = "By "
        
        authorEl.appendChild(spanAuthor)
        headingEl.appendChild(authorEl)
        //autor

        //name
        const spanName = document.createElement("span")
        spanName.setAttribute("class", "name")
        spanName.textContent = this.getAttribute("author") || "Anonymous"

        spanAuthor.appendChild(spanName)
        //name
        

        cardRoot.appendChild(cardImage) 
        cardRoot.appendChild(categoryEl)
        cardRoot.appendChild(headingEl)
        
        return cardRoot
        
    }

    styles() {
        const style = document.createElement("style")
        style.textContent = `
        body{
            background-color: #E8E8E8;
            font-family: Montserrat, arial;
        }
        
        .card {
            margin-right: 20px; 
            width: 190px;
            background: white;
            padding: .4em;
            border-radius: 6px;
        }
          
          .card-image {
            background-color: rgb(236, 236, 236);
            width: 100%;
            height: 130px;
            border-radius: 6px 6px 0 0;
            text-align: center;
            display: flex;
            align-items: center;
          }
        
        
          .card-image img {
            margin: 0 auto;
            display: block;
            max-width: 100%;
            max-height: 100%;
            object-fit: cover; 
        }
          
          .card-image:hover {
            transform: scale(0.98);
          }

          .card:last-child {
            margin-right: 0; 
        }
          
          .category {
            text-transform: uppercase;
            font-size: 0.7em;
            font-weight: 600;
            color: rgb(63, 121, 230);
            padding: 10px 7px 0;
          }
          
          .category:hover {
            cursor: pointer;
          }
          
          .heading {
            font-weight: 600;
            color: rgb(88, 87, 87);
            padding: 7px;
          }
          
          .heading:hover {
            cursor: pointer;
          }
          
          .author {
            color: gray;
            font-weight: 400;
            font-size: 11px;
            padding-top: 20px;
          }
          
          .name {
            font-weight: 600;
          }
          
          .name:hover {
            cursor: pointer;
          }
        `

        return style
    }
}



customElements.define("card-news", card)