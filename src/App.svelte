<script>
  import sounds from "./sounds.json";

  const sections = Object.keys(sounds).map(section => ({
    title: section[0].toLocaleUpperCase() + section.slice(1),
    section
  }));

  console.log(sections);
  console.log(sounds["hits"]);

  function playSound(section, file) {
    const path = `sounds/${section}/${file}`;
    console.log("playing", { path, file });
  }
</script>

<style>
  .sound-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    border-radius: 4px;
    padding: 0.5em;
    height: 130px;
    width: 130px;
    cursor: pointer;
    margin: 0.5em;
  }
  .container {
    height: 100%;
    width: 100%;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .sound-button:hover {
    background: yellow;
    color: #000;
  }
</style>

<div class="container">
  {#each sections as { title, section }}
    <div>
      <h2 class="title">{title}</h2>
      <div class="sound-section">
        {#each sounds[section] as { file, name }}
          <div class="sound-button" on:click={() => playSound(section, file)}>
            <h4>{name}</h4>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
