const assert = require('assert');

describe('User Management - Update Existing User', function () {
    it('should successfully update a user and return updated data', async function () {
        const userId = 2; // ID user yang ingin diupdate
        const updatedName = "Aman Swasono Updated";
        const updatedJob = "Senior QA Engineer";

        const response = await fetch(`https://reqres.in/api/users/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "reqres-free-v1"
            },
            body: JSON.stringify({ name: updatedName, job: updatedJob }),
        });

        const data = await response.json();

        assert.strictEqual(response.status, 200, 'Expected status code 200 (OK)');
        assert.strictEqual(data.name, updatedName, 'Expected updated name to match');
        assert.strictEqual(data.job, updatedJob, 'Expected updated job to match');
        assert.ok(data.updatedAt, 'Expected response to contain updated timestamp');
    });
});
