const Manager = require('../lib/Manager.js');

describe('Manager', () => {
    describe('getOfficeNumber', () => {
        it('should get the office number', () => {
            const manager = new Manager('Joe', 1, 'joe@outlook.com', 1);
            const officeNumber = manager.getOfficeNumber();
            expect(officeNumber).toEqual(1);
        });
    });

    describe('getRole', () => {
        it('should get the role of manager', () => {
            const manager = new Manager('Joe', 1, 'joe@outlook.com', 1);
            const role = manager.getRole();
            expect(role).toEqual('Manager');
        });
    });

    describe('getName', () => {
        it('should get the name of the manager', () => {
            const manager = new Manager('Joe', 1, 'joe@outlook.com', 1);
            const name = manager.getName();
            expect(name).toEqual('Joe');
        });
    });

    describe('getId', () => {
        it('should get the id of the manager', () => {
            const manager = new Manager('Joe', 1, 'joe@outlook.com', 1);
            const id = manager.getId();
            expect(id).toEqual(1);
        });
    });

    describe('getEmail', () => {
        it('should get the email of the manager', () => {
            const manager = new Manager('Joe', 1, 'joe@outlook.com', 1);
            const email = manager.getEmail();
            expect(email).toEqual('joe@outlook.com');
        });
    });
});