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

**Empowers the semantic web:** <a href="http://schema.org/" target="_blank">Schema.org</a> has become the standard vocabulary for the semantic web. This **Schema.org Adapter** gives developers a clear API to access the schema.org vocabulary in a simple way. 

**Supports external vocabularies:** The **Schema.org Adapter** is lightweight because it does NOT include the vocabulary data, instead it allows the user to input his needed local/remote vocabularies (JSON-LD or URL to JSON-LD). This gives the user the possibility to specify the that <a href="https://schema.org/docs/developers.html" target="_blank">version/part of Schema.org</a> he needs, and also to use <a href="https://github.com/semantifyit/schema-org-adapter/blob/master/docu/vocabulary.md" target="_blank">external vocabularies</a>.

**Clear data model:** The data model of the rdf-based, machine-readable version Schema.org is slightly adapted (see <a href="https://github.com/semantifyit/schema-org-adapter/blob/master/docu/algorithm.md" target="_blank">documentation</a> for details) to create the <a href="https://github.com/semantifyit/schema-org-adapter/blob/master/docu/dataModel.md" target="_blank">clear and pragmatic data model</a> of this **Schema.org Adapter**.

**Built-in reasoning:** The API of **Schema.org Adapter** offers functions and parameters to enable built-in reasoning on the used vocabulary-terms (e.g. resolution of properties, sub-classes, ranges, etc.)

## API

### SDOAdapter

## Acknowledgement

<div align="center">
<a href="https://semantify.it/" target="_blank"><h4>semantify.it</h4></a>
Made with &#10084; in Tirol!
</div>


