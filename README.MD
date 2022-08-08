# Introduction

BDD UI is a framework for frontend developers that helps to build applications with Behaviour Driven Development. BDD helps the team to create features with their behaviour in mind.

A typical BDD includes a story and the developer starts with the behaviour described in the story. First he writes all the behaviour(features) which is bound to fail then he develops inorder to satisfy the usage described.

## Structure

```
./BDD
├── cucumber-json(generated)
│   └── example.cucumber.json
├── e2e
│   ├── feature
│   │   └── example.feature
│   └── step_definitions
│       ├── common
│       │   └── common.steps.js
│       └── example
│           └── example.steps.js
├── fixtures
├── plugins
│   ├── index.js
│   └── multiple-cucumber-reporter.js
├── reports(generated)
│   └── index.html
├── screenshots(generated)
│   └── example.feature
│       ├── Example Test -- Truthly value is true (failed) (attempt 2).png
├── support
│   ├── commands.js
│   └── e2e.js
└── videos(generated)
    └── example.feature.mp4
```

The folders which are marked as `(generated)` are created when we run a test. Some are also created when a test fails such as videos & screenshots dir.

The features are written in Gherkin syntax. Learn about it more in the cucumberjs docs.

## Usage

All the features should be created in the `/BDD/e2e/feature` directory. The features should end with `.feature` extension.

All the steps implementation should be written in `step_definition`. The common steps are inside of `step_definition/common/` which can be used in all `.feature` files but other folders in step_definitions can only be used for that feature.
Example: The steps inside of `step_definition/example/..` can only be consumed by `feature/example.feature`. The step_definition should have a folder with the name of the feature.

The fixtures are a way to share common data between various feature files & steps. Whenever possible also prefer fixtures instead of cucumber datatable.

Common syntax can be used inside of `support/commands`.

You can view the entire report from the `reports/index.html`.
