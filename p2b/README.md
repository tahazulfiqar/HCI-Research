## Running the app

Do the following to get started:

* Install [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) and [Allow-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)
* `cd` into `csc428/p2b` (this folder)
* Run `npm install`
* Run `npm start`
* If the previous command did not open a browser, type `localhost:3000` into your browser.
* Click on the Allow-Control-Allow-Origin plugin. Enable cross-origin resource sharing. Refresh the page, and if it still does not work, then restart your browser.
* Right-click anywhere on the page, and click `Inspect`
* In the list at the top (e.g. `Elements`, `Console`, etc.), look for `Redux` and click on it. This is Redux DevTools; it shows the state of the app at every interaction.
* Play with the app a bit, and observe how actions are added in the Redux DevTools interface.
* On Redux DevTools, click on the last action. Then, click on `Raw` to see the raw JSON blob of the app's state. The log for classification time is stored in `classifications.log` and it stores timestamps chronologically.

When it's time for the study:

* Make sure everything is working properly. 
* Have Redux DevTools open while they participate in the study.
* Run the training phase first, then refresh to select the test phase.
* **IMPORTANT**: After the test phase, **do not** refresh the page. This **will erase** the data that we need.
* On Redux DevTools, copy the `Raw` JSON, and paste and save it somewhere safe, like a document.