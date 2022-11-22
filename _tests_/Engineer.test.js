const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getGithub', () => {
        it('should get the github link', () => {
            const engineer = new Engineer('Tom', 1, 'tom@outlook.com', 'tomsGitHub');
            const github = engineer.getGithub();

            expect(github).toEqual("tomsGitHub");
        });
    });

    describe('getRole', () => {
        it('should get the engineer role', () => {
            const engineer = new Engineer('Derek', 1, 'derek@outlook.com', 'dereksGitHub');
            const role = engineer.getRole();

            expect(role).toEqual("Engineer");
        });
    });
})