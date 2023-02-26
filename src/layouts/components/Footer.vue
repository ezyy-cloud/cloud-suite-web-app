<template>
  <div class="w-100 h-100 d-flex align-center justify-space-between">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
      Another <a
        href="https://ezyy.cloud"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1 me-1"
      >Ezyy</a>
      Cloud
    </span>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
      &copy;
      {{ new Date().getFullYear() }}
    </span>
  </div>
</template>
