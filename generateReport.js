const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: './reports',
  reportPath: './reports/html-report',
  reportName: 'Playwright BDD Report',
  pageTitle: 'Automation Execution Report'
});

console.log('HTML report generated successfully');