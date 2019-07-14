const { promises: fs } = require("fs");

const sounds = {};
fs.readdir("./sounds").then(async (directories) => {
  await Promise.all(
    directories.map(async (directoryName) => {
      if (!directoryName.startsWith(".")) {
        sounds[directoryName] = [];
        const files = await fs.readdir(`./sounds/${directoryName}`);
        sounds[directoryName] = files.map((file) => ({
          file,
          name: file.split(".")[0]
        }));
      }
    })
  );
  console.log("done!");
  console.log(sounds);
  await fs.writeFile("sounds.json", JSON.stringify(sounds, null, 2), "utf-8");
});
