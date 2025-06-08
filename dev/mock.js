export default function getMock() {
  return {
    tests: [],
    fn() {
      const test = { isCalled: false }
      this.tests.push(test)
      return () => (test.isCalled = true)
    },
    isAllHasBeenCalled() {
      const res =
        this.tests.map(t => t.isCalled).filter(t => t).length ===
        this.tests.length
      this.tests = []
      return res
    },
  }
}
