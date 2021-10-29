
// Homepage Main Image Function
function getMainImage(data){
  const mainImage = data.mainImage
  const landingZone = document.querySelector("#landing-zone")
  landingZone.style.backgroundImage = `url("${mainImage}")`
}

// Homepage Title Function
function getHomepageTitle(data){
  const homepageTitle = data.title
  const h1Little = homepageTitle.substr(0,10)
  const h1White = homepageTitle.substr(11,6)
  const h1BrandColour = homepageTitle.substr(17,10)
  const h1LittleElement = document.querySelector("#welcome")
  const h1WhiteElement = document.querySelector("#non-brand-colour")
  const h1BrandColourElement = document.querySelector("#brand-colour")
  h1LittleElement.innerHTML = h1Little
  h1WhiteElement.innerHTML = h1White
  h1BrandColourElement.innerHTML = h1BrandColour
}

// Homepage Subtitle Function
function getHomepageSubtitle(data){
  const homepageSubtitle = data.subtitle
  const subtitleElement = document.querySelector("#subtitle")
  subtitleElement.innerHTML = homepageSubtitle
}

// Homepage Section 1 Title Function
function getSection1Title(data){
  const section1Title = data[0].content.text
  const section1TitleElement = document.querySelector("#section-1-title")
  section1TitleElement.innerHTML = section1Title
}

// Homepage Section 1 Text Function
function getSection1Text(data){
  const section1Text = data[1].content.textContent
  const section1TextElement = document.querySelector("#section-1-text")
  section1TextElement.innerHTML = section1Text
}

// Homepage Section 1 Img Function
function getSection1Img(data){
  const section1Img = data[1].content.image
  const section1ImgElement = document.querySelector("#section-1-img")
  section1ImgElement.src = section1Img
}

// Homepage Section 1 Img Function
function getSection1Quote(data){
  const section1Quote = data[2].content.quoteText
  const section1QuoteElement = document.querySelector("#section-1-quote")
  section1QuoteElement.innerHTML = section1Quote
}

// Homepage Section 1 Img Function
function getSection1QuoteAuthor(data){
  const section1QuoteAuthor = data[2].content.quoteSource
  const section1QuoteAuthorElement = document.querySelector("#section-1-quote-author")
  section1QuoteAuthorElement.innerHTML = section1QuoteAuthor
}
