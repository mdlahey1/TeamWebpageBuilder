const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getSchool', () => {
        it('should get the name of the school', () => {
            const intern = new Intern('Indiana', 1, 'Indiana@outlook.com', 'Indiana University');
            const school = intern.getSchool();

            expect(school).toEqual('Indiana University');
        });
    });

    describe('getRole', () => {
        it('should get the intern role', () => {
            const intern = new Intern('Bill', 1, 'bill@outlook.com', 'Harvard University');
            const role = intern.getRole();

            expect(role).toEqual("Intern");
        });
    });
})