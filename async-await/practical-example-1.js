const TEN_SECONDS = 10 * 1000;
const TWO_SECONDS = 2 * 1000;

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRecords() {
  // Exemple: 'SELECT * FROM TABLE' from database
  return timeout(TEN_SECONDS).then(() => {
    return ['first', 'second', 'third'];
  });
}

function processRecord(record) {
  // Process a single record from database
  new Promise((resolve, reject) => {
    (async () => {
      await timeout(TWO_SECONDS);
      resolve(record);
    })();
  }).then((record) => {
    console.log(`${record} resolved!`);
  })
}

async function run() {
  while (true) {
    console.log(`Getting records...`)
    let records = await getRecords();

    console.log(`Iterate records... `)
    for (let i = 0; i < records.length; i++) {
      processRecord(records[i]);
    }
    console.log(`End of iterate records...`)
  }
}

run();

/**
 * [Output]

 Getting records...
 Iterate records...
 End of iterate records...
 Getting records...
 first resolved!
 second resolved!
 third resolved!
 Iterate records...
 End of iterate records...
 Getting records...
 first resolved!
 second resolved!
 third resolved!
 ...

 */
