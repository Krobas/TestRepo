// This is the main Node.js source code file of your actor.
// It is referenced from the "scripts" section of the package.json file,
// so that it can be started by running "npm start".

// Import Apify SDK. For more information, see https://sdk.apify.com/
const Apify = require('apify');


Apify.main(async () => {
    // Get input of the actor.
    // If you'd like to have your input checked and have Apify display
    // a user interface for it, add INPUT_SCHEMA.json file to your actor.
    // For more information, see https://docs.apify.com/actors/development/input-schema
    //const input = await Apify.getInput();
    //await Apify.setValue('OUTPUT', {input});
    const input = "KBSTESTX";
    
    //pushing to default dataset
  
    
    //named datasets
    let namedDataset = await Apify.openDataset ('example');
    await namedDataset .pushData({input});
    let data = await namedDataset.getData();

    console.log(data);
    //await namedDataset.pushData({input});

});
