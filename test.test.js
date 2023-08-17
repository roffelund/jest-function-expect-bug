it('should not explode', () => {
    const foo = () => {}
    const bar = () => {}
    expect(foo).toBe(bar)
})