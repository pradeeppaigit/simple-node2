
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const docker_username = process.env.DOCKER_USERNAME;

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log(docker_username);
    await sleep(5000);
  }
}

main();
