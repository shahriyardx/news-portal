const setHeadlinesPost = async () => {
  const posts = await getAllPosts()
  const headline_post = posts.sort((a, b) => b.total_view - a.total_view)[0]
  const headlineHtml = getHeadlinesHTML(headline_post)
  document.querySelector("#headlines").innerHTML = headlineHtml
}

const setLatestPosts = async () => {
  const latest = (await getAllPosts()).slice(1, 5)
  
  const container = document.getElementById("latest_news")
  container.innerHTML = ""

  for (let post of latest) {
    container.innerHTML += getLatestHtml(post)  
  }
}

const setPickAndTrendingPosts = async () => {
  const allPostgs = await getAllPosts()

  const todaysPick = allPostgs.filter(post => post.others_info.is_todays_pick || post.others_info.is_trending).slice(0, 3)
  const container = document.getElementById("pick_trending")
  container.innerHTML = ""
  
  for (let post of todaysPick) {
    container.innerHTML += getPickTrendingHtml(post)
  }
}

const setCategoryLinks = async () => {
  const container = document.getElementById("categories")
  const categories = await getCategories()

  categories.forEach((category) => {
    container.innerHTML += `<span class="cat_el" onclick="showCategory(this, ${category.category_id})">${category.category_name}<span>`
  })
}

const changeActiveLink = (current) => {
  const currentElement = current.textContent

  Array.from(current.parentElement.children).forEach((element) => {
    if (element.textContent == currentElement) {
      element.classList.add("active")
    } else {
      element.classList.remove("active")
    }
  })

  toggleSidebar("close")
}

const showHome = (element) => {
  
  changeActiveLink(element)
}

const showCategory = (element) => {
  // TODO: show posts of clicked category
  changeActiveLink(element)
}

const toggleSidebar = (action) => {
  const sidebar = document.getElementById("categories")

  if (action == "close") {
    sidebar.classList.add("-right-[100%]")
    sidebar.classList.remove("right-0") 
  } else {
    sidebar.classList.remove("-right-[100%]")
    sidebar.classList.add("right-0") 
  }
}

window.onload = () => {
  setCategoryLinks()
  setHeadlinesPost()
  setLatestPosts()
  setPickAndTrendingPosts()
}

