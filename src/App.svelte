<script>
  import sounds from "./sounds.json";
  console.log(sounds);
  const sections = Object.keys(sounds).map(section => ({
    title: section[0].toLocaleUpperCase() + section.slice(1),
    section
  }));

  console.log(sections);
  console.log(sounds["hits"]);
</script>

<style>
  h1 {
    color: purple;
  }
  .sound-button {
    display: inline-block;
  }
  .container {
    height: 100%;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title {
    text-align: center;
  }
</style>

<div class="container">
  {#each sections as { title, section }}
    <div>
      <h2 class="title">{title}</h2>
      {#each sounds[section] as { title, name }}
        <div class="sound-button">
          <h4>{name}</h4>
        </div>
      {/each}
    </div>
  {/each}
</div>
