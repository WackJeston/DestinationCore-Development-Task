
// Axios Function
const getData = function() {
  // Homepage
  axios({
    method: "get",
    url: "https://visit-melchester.destinationcoreone.com/home.json?token=BDFw4tCXJWiYslbVyzUdeOGDP5FBDL1t"
  })
  .then((response) => {
    // Homepage Main Data
    const homeMainData = response.data.data[0]
    getMainImage(homeMainData)
    getHomepageTitle(homeMainData)
    getHomepageSubtitle(homeMainData)

    // Homepage Section 1 Data
    const homepageContentBuilder = response.data.data[0].contentBuilder
    getSection1Title(homepageContentBuilder)
    getSection1Text(homepageContentBuilder)
    getSection1Img(homepageContentBuilder)
    getSection1Quote(homepageContentBuilder)
    getSection1QuoteAuthor(homepageContentBuilder)

    // Error Handling
  }, (error) => {
    console.log(error)
  })
}

// Run Function
getData()
