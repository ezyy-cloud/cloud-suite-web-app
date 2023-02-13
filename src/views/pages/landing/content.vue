<template>
  <section class="content">
    <section class="text">
      <h2>
        Accelerating your <br />digital growth with
        <strong id="brand-name">Cloud Suite</strong>
      </h2>
      <p>
        Unleash the full potential of your digital presence with Cloud Suite.
        We are a digital agency providing expert digital marketing services and
        a proprietary digital asset management tool. Transform your online
        strategy and achieve your business goals with us.
      </p>
      <VListItem elevation="2" to="solutions" class="button">Learn More</VListItem>
    </section>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="css" scoped>
.content section {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 51%;
}

.text {
  padding-left: 99px;
}

.text h2 {
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 0.4px;
  line-height: 5.4rem;
}

.text h2 strong {
  /* color: #266E3F; */
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: -3.5px;
  transition: color 1.5s ease;
}

.text p {
  font-size: 1rem;
  margin-bottom: 20px;
  margin-top: 3px;
  width: 36.6vw;
}
.button {
  color: #28243d;
  background-color: #01ff12;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 20px;
}
</style>
