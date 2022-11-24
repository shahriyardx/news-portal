const getHeadlinesHTML = (post) => {
  return `
  <div
  class="w-full aspect-[3/2] sm:aspect-[3/1.5] md:aspect-[3/1] relative rounded-lg overflow-hidden"
>
  <img
    class="w-full h-full object-cover"
    src="${post.image_url}"
  />

  <div
    class="absolute inset-0 bg-black/50 text-white p-5 flex flex-col justify-end"
  >
    <h1 class="text-2xl font-bold">
      ${post.title}
    </h1>
    <div class="flex items-center gap-5 text-sm mt-3">
      <span>${moment(post.published_date).fromNow()}</span>
      <span>CNN Indonesia</span>
    </div>
  </div>
</div>

<div class="p-5 flex items-center">
  <span
    class="text-orange-500 bg-orange-500/20 p-2 rounded-md text-sm"
    >Sports</span
  >

  <div class="flex items-center gap-5 ml-auto">
    <div class="flex items-center gap-1">
      <i class="bx bxs-bullseye"></i>
      <span>1.5M</span>
    </div>

    <div class="flex items-center gap-1">
      <i class="bx bx-message"></i>
      <span>5k</span>
    </div>

    <div class="flex items-center gap-1">
      <i class="bx bx-share-alt"></i>
      <span>15k</span>
    </div>
  </div>
</div> 
  `
}

const getLatestHtml = (post) => {
  return `
  <div>
    <img
      class="w-full aspect-[3/2] object-cover rounded-md"
      src="${post.image_url}"
    />
    <h2 class="text-xl font-semibold mt-3">
      ${post.title}
    </h2>
    <div class="flex items-center gap-5 text-xs mt-3 text-zinc-400">
      <span>2 Hours ago</span>
      <span>CNN Indonesia</span>
    </div>
  </div>
  `
}

const getPickTrendingHtml = (post) => {
  return `
  <div class="bg-white rounded-lg">
    <img
      class="w-full aspect-[3/2] object-cover rounded-lg"
      src="${post.image_url}"
    />
    <div class="p-5">
      <h2 class="text-xl font-semibold mt-3">
        ${post.title}
      </h2>
      <div
        class="flex items-center gap-5 text-xs mt-3 text-zinc-400"
      >
        <span>2 Hours ago</span>
        <span>CNN Indonesia</span>
      </div>
    </div>
  </div>
  `
}

const getPostHtml = (post) => {
  return `
    <article class="p-5 sm:p-7 grid grid-cols-5 gap-8 bg-white rounded-lg">
      <img src="${post.thumbnail_url}" class="h-full aspect-[1.5/2] object-cover rounded-md shadow-lg">

      <div class="col-span-4 flex flex-col">
        <div>
          <h1 class="text-3xl font-bold">${post.title}</h1>
          <p class="mt-3">${post.details.slice(0, 100)}</p>
        </div>

        <div class="mt-auto flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img src="${post.author.img}" class="w-12 h-12 rounded-full">
            
            <div>
              <p class="text-lg font-semibold">${post.author.name}</p>
              <p class="text-zinc-500">${moment(post.author.published_date).format("MMM DD, YYYY")}</p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <i class="bx bx-bullseye text-2xl"></i>
            <p>${post.total_view || 0}</p>
          </div>

          <div class="flex items-center gap-2 text-zinc-700">
            <i  class="text-2xl bx bxs-star"></i>
            <i  class="text-2xl bx bx-star"></i>
            <i  class="text-2xl bx bx-star"></i>
            <i  class="text-2xl bx bx-star"></i>
            <i  class="text-2xl bx bx-star"></i>
          </div>

          <div>
            <i class="text-5xl bx bx-right-arrow-alt text-indigo-600 cursor-pointer" onclick="showPostDetails('${post._id}')" ></i>
          </div>
        </div>
      </div>

    </article>
  `
}

const getPOstDetailshtml = (post) => {
  return `
    <h1 class="text-4xl font-bold mb-5">${post.title}</h1>

    <img src="${post.image_url}" alt="" class="w-full aspect-video rounded-md mb-10">

    <div>
      ${post.details}
    </div>

    <div class="flex items-center gap-2 mt-10">
      <img src="${post.author.img}" class="w-28 h-28 rounded-full">
      
      <div>
        <p class="text-3xl font-semibold mb-1">${post.author.name}</p>
        <p class="text-2xl text-zinc-500">${moment(post.author.published_date).format("MMM DD, YYYY")}</p>
      </div>
    </div>
  `
}