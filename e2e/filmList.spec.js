describe('FilmList', () => {

    beforeEach(function (done) {
        simulator.reloadReactNativeApp(done);
    });

    describe('when app starts', () => {
        it('should has item with testID ListView', () => {
            expect(element(by.id('ListView'))).toExist();
        });
        it('should has item with testID FilmItem-0', () => {
            expect(element(by.id('FilmItem-0'))).toExist();
        });
        it('should has item with testID FilmItem-3', () => {
            expect(element(by.id('FilmItem-3'))).toExist();
        });
        it('should has no item with testID FilmItem-4', () => {
            expect(element(by.id('FilmItem-4'))).toNotExist();
        });
    });

    describe('when scroll 200 pt down', () => {
        it('FilmItem-0 should not be visible', () => {
            expect(element(by.id('FilmItem-0'))).toBeVisible();
            element(by.id('ListView')).scroll(200, 'down');
            expect(element(by.id('FilmItem-0'))).toBeNotVisible();
        });
    })

});