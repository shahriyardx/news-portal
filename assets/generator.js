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