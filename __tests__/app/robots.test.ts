import robots from '@/app/robots'

describe('robots', () => {
  it('has rules', () => {
    const robotsConfig = robots()
    expect(robotsConfig.rules).toBeDefined()
  })
})
