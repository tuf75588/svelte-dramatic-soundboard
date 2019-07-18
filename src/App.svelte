<script>
  import sounds from "./sounds.json";

  const sections = Object.keys(sounds).map(section => {
    sounds[section].forEach(sound => {
      sound.key = "x";
      console.log(sound);
    });
    return {
      title: section[0].toLocaleUpperCase() + section.slice(1),
      section
    };
  });

  console.log(sections);
  console.log(sounds["hits"]);
  const colors = ["#3DDC97", "#FF8C42", "#E87EA1", "#FFD046", "#C45AB3"];
  const audio = new Audio();
  function playSound(section, file) {
    const path = `sounds/${section}/${file}`;
    audio.src = path;
    audio.play();
  }
</script>

<style>
  .sound-button {
    position: relative;
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    outline: 1px solid #ff4141;
    padding: 1.5em;
    height: 10vw;
    width: 10vw;
    cursor: pointer;
    margin: 0.25em;
    font-size: 2vw;
    color: #fff200;
    box-shadow: 3px 3px 3px #ff4141;
    transition: background 0.25s linear, color 0.25s linear,
      box-shadow 0.15s linear;
  }
  .container {
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .sound-button:hover {
    background: #fff200;
    color: #000 !important;
  }
  .sound-button:active {
    transition: translate(5px, 5px);
    box-shadow: none;
  }
  .section-title {
    position: absolute;
    bottom: 1vw;
  }
</style>

<div class="container">
  {#each sections as { title, section }}
    {#each sounds[section] as { file, name }, i}
      <div
        class="sound-button"
        on:mousedown={() => playSound(section, file)}
        style={`color: ${colors[i % colors.length]}`}>
        <h4>{name}</h4>
        <small class="section-title">{section}</small>
      </div>
    {/each}
  {/each}
</div>
