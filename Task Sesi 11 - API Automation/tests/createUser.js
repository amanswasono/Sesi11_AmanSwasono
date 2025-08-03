const assert = require('assert');

describe('User Management - Create New User', function () {
    it('should successfully create a user and return user data', async function () {

        // Definisikan variable diawal test
        const name = "Aman swasono";
        const job = "QA Automation"

        const response = await fetch('https://reqres.in/api/users', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "x-api-key": "reqres-free-v1"
            },
            body: JSON.stringify({name, job}), // ambil variable 
        });
        
        const data = await response.json();

        assert.strictEqual(response.status, 201, 'Expected status code 201 (Created)');
        assert.strictEqual(data.name, name, 'Expected name to match');
        assert.strictEqual(data.job, job, 'Expected job to match');
        assert.ok(data.id, 'Expected respon to contain user id');
        assert.ok(data.createdAt, 'Expected respon to contain creation timestamp');

    })
});