const api = async ({ url, method = "GET" }) => {
  return (
    await (
      await fetch(url, {
        method: method,
      })
    ).json()
  ).data
}

const getCategories = async () => {
  return (
    await api({
      url: "https://openapi.programming-hero.com/api/news/categories",
    })
  ).news_category
}

const getAllPosts = async (callback) => {
  const categories = await getCategories()
  const posts = []
  
  for (let category of categories) {
    const data = await api({
      url: `https://openapi.programming-hero.com/api/news/category/${category.category_id}`,
    })
  
    posts.push(...data)
  }

  if (callback) {
    callback(posts)
  }
  
  return posts 
}
