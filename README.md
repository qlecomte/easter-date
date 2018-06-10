# easter-date

Calculate Easter date for Gregorian and Julian calendars

## Getting Started

### Installing

To install this library, you need to use NPM.

```
npm install easter-date
```

### Using this library

```
const easter = require('easter-date')

let easterDate = easter(2018) // Will return Date("2018-04-01")
let easterDate = easter(new Date("2018-02-03")) // Will return Date("2018-04-01")
```

You can return the date as a string. (format: YYYY-MM-DD)
```
let easterString = easter(2018, true) // Will return "2018-04-01"
```

## Running the tests

Once you cloned the repository, you can run the tests with
```
npm run test
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/qlecomte/easter-date/tags). 

## Author

**Quentin Lecomte** - [qlecomte](https://github.com/qlecomte)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details