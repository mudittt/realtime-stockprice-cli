#!/usr/bin/env node

const package = require('../package.json');
const { program } = require('commander');

// console.log('check is working');
// console.log(process.argv[2]);

program
    // .version('1.0.0')
    // .version(package.version)
    .command('yahoo', 'yahoo finance for everything')
    .parse(process.argv)

