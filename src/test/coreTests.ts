import HarvestTests from './core/HarvestTests'
import UserTests from './core/UserTests'
import ProjectsTests from './core/ProjectsTests'
import UnitTest from './UnitTestInterface'

async function runTestsAndReturnFailures(tests: UnitTest[]): Promise<string[]> {
  const testTotalCount = tests.length
  const testsFailed: string[] = []

  for (let i = 0; i < testTotalCount; i++) {
    const didPassTest = await tests[i].test()
    if (!didPassTest) testsFailed.push(tests[i].name)
  }
  return testsFailed
}

async function init(tests: UnitTest[]) {
  const failedTestsResults = await runTestsAndReturnFailures(tests) 
  if (failedTestsResults.length === 0) {
    console.log('\x1b[32m%s\x1b[0m', 'All Tests Passed!!')
  } else {
    console.log(`\x1b[31mFailed ${failedTestsResults.length} tests.\x1b[0m`)
    failedTestsResults.forEach((test) => {
      console.log(`\x1b[33m${test}\x1b[0m`)
    })
  }
}

const testsArray: any = [
  HarvestTests,
  UserTests,
  ProjectsTests
]

init(testsArray.flat())