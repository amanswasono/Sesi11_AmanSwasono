const assert = require('assert');

describe('User Management - Get list Of Users', function () {
    const page = 2; // Ganti untuk halaman lain

    it(`should return a paginated list of users for page ${page}`, async function () {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1' 
            }
        });

        const data = await response.json();

        // Assertions
        assert.strictEqual(response.status, 200, 'Expected status code 200');
        assert.strictEqual(data.page, page, `Expected to be on page ${page}`);
        assert.ok(Array.isArray(data.data), 'Expected data to be an array');
        assert.ok(data.data.length > 0, 'Expected at least one user in the list');
    });
});
