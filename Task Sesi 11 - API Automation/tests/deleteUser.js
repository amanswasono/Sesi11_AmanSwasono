const assert = require('assert');

describe('User Management - Delete User', function () {
    it('should successfully delete a user and return no content', async function () {
        const userId = 2; // ID user yang ingin dihapus

        const response = await fetch(`https://reqres.in/api/users/${userId}`, {
            method: "DELETE",
            headers: {
                "x-api-key": "reqres-free-v1"
            },
        });

        assert.strictEqual(response.status, 204, 'Expected status code 204 (No Content)');
    });
});
