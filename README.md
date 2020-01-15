<h1 align="center">Schema.org Adapter</h1>

<h5 align="center">Fast, simple & flexible API for the Schema.org Vocabulary (and vocabulary extensions!) for Node and Browsers</h5>

<div align="center"><a href="http://standardjs.com"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" alt="Code style in StandardJS" /></a></div>

```javascript
const SDOAdapter = require('schema-org-adapter')

const mySDOAdapter = new SDOAdapter()

const urlLatestSDO = await mySDOAdapter.constructSDOVocabularyURL('latest', 'all-layers') 
// resolves to "https://raw.githubusercontent.com/schemaorg/schemaorg/master/data/releases/6.0/all-layers.jsonld" if 6.0 is the latest version
await mySDOAdapter.addVocabularies([urlLatestSDO])

let Hotel = mySDOAdapter.getClass('schema:Hotel')
Hotel.getProperties() // 117 -> ["schema:audience", "schema:checkinTime", "schema:availableLanguage", ...]
Hotel.getSuperClasses(false) //only direct superclasses: 1 -> ["schema:LodgingBusiness"]
Hotel.getSuperClasses() //5 -> ["schema:LodgingBusiness", "schema:LocalBusiness", "schema:Place", "schema:Organization", "schema:Thing"]

let address = mySDOAdapter.getProperty("schema:address")
address.getRanges() // 2 -> ["schema:PostalAddress", "schema:Text"]
address.getDomains(false) // only direct domains: 5 -> ["schema:Place", "schema:GeoCoordinates", "schema:GeoShape", "schema:Person", "schema:Organization"]
address.getDomains() // 229 -> ["schema:Place", "schema:Accommodation", "schema:TouristAttraction", ...]
```

## Installation

#### NPM

Install the npm package:

`npm install schema-org-adapter`

Require the package:

```javascript
const SDOAdapter = require('schema-org-adapter')
```

#### Browser

Script-include the bundled package in **/dist** or load via a cdn:

```html
<script src="https://cdn.jsdelivr.net/gh/semantifyit/schema-org-adapter/dist/schema-org-adapter.min.js"></script>
```

## Features
&#8984; **Empowers the semantic web:** <a href="http://schema.org/" target="_blank">Schema.org</a> has become the standard vocabulary for the semantic web. This **Schema.org Adapter** gives developers a clear API to access the schema.org vocabulary in a simple way. 

&#9733; **Clear data model:** The data model of the rdf-based, machine-readable version Schema.org is slightly adapted (see <a href="https://github.com/semantifyit/schema-org-adapter/blob/master/docu/algorithm.md" target="_blank">documentation</a> for details) to create the <a href="https://github.com/semantifyit/schema-org-adapter/blob/master/docu/dataModel.md" target="_blank">clear and pragmatic data model</a> of this **Schema.org Adapter**.

&#8633; **Supports external vocabularies:** The **Schema.org Adapter** is lightweight because it does NOT include the vocabulary data, instead it allows the user to input his needed local/remote vocabularies (JSON-LD or URL to JSON-LD). This gives the user the possibility to specify the <a href="https://schema.org/docs/developers.html" target="_blank">version/part of Schema.org</a> he needs, and also to use <a href="https://github.com/semantifyit/schema-org-adapter/blob/master/docu/vocabulary.md" target="_blank">external vocabularies</a>.

&#9851; **Built-in reasoning:** The API of **Schema.org Adapter** offers functions and parameters to enable built-in reasoning on the used vocabulary-terms (e.g. resolution of properties, sub-classes, ranges, etc.)

## API

#### JSDoc
Api documentation generated by JSDoc hosted at <a href="https://github.com/semantifyit/schema-org-adapter/blob/master/docu/api.md" target="_blank">GitHub</a>.

##### Examples

Check the examples for <a href="https://github.com/semantifyit/schema-org-adapter/blob/master/tests/dist-test-node.js" target="_blank">Node</a> and <a href="https://github.com/semantifyit/schema-org-adapter/blob/master/tests/dist-test-browser.html" target="_blank">Browser</a> on GitHub.

##### Use of filters

It is possible to filter the results of some functions by passing a filter object - The filter options can be: 
* "isSuperseded": boolean (e.g. `false` -> only vocabulary elements that are not superseded will be returned)
* "termType": string/Array (e.g. `['Property', 'Class']` -> only vocabulary elements that are properties or classes will be returned)
* "fromVocabulary": string/Array (e.g. `['http://schema.org/']` -> only vocabulary elements that come from a specific vocabulary will be returned (this may be interesting if you use additional <a href="https://github.com/semantifyit/schema-org-adapter/blob/master/docu/vocabulary.md" target="_blank">external vocabularies</a>))

```javascript
const SDOAdapter = require('schema-org-adapter')
const mySdoAdapter = new SDOAdapter()

//get list of classes that are NOT superseded
let listOfClasses = mySdoAdapter.getAllClasses({
  "isSuperseded": false
})
```

## Acknowledgement

<div align="center">
<h3><a href="https://semantify.it/" target="_blank">semantify.it</a></h3>
Made with &#10084;	 in Tirol!
</div>


