<template>
  <div>
    <Logos mb-6 />
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />

    <h1 class="text-3xl font-bold underline bg-blue-800">
      Hello world!
    </h1>
  </div>
</template>
