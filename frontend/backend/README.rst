React Backend Endpoints
=======================

This is the documentation for the JSON API to support your React
frontend for EquipIndustry. The API is JSON REST, broken down into a few
main sections:

-  ```Authentication`` <#authentication>`__
-  ```Companies`` <#companies>`__
-  ```Products`` <#products>`__
-  ```Users`` <#users>`__

All requests (except for signup and login) will need an
``Authorization`` header with the user's session ID.

You receive this in the response to the ```signup`` <#signup>`__ and
```login`` <#login>`__ requests under the ``sessionId`` key.

Additionally, as this is a JSON API, you should be attaching a JSON
content type header as well. This is an example of the two header you
would be applying.

.. code:: javascript

    {
      "Authorization": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "Content-Type": "application/json"
    }

If you receive a non-200 response code. There should be a message in the
``error`` key of the JSON response body. If you find any problems with
this API, please fork this repo and open a PR.

--------------

Authentication
--------------

Signup
~~~~~~

**``POST``**\ ``/auth/signup``

.. code:: javascript

    // body
    {
      "name": "Elliot Alderson",
      "email": "elliot@evilcorp.com",
      "password": "mypassword",
      "passwordConfirmation": "mypassword"
    }

    // response
    {
      "sessionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    }

Login
~~~~~

**``POST``**\ ``/auth/login``

.. code:: javascript

    // body
    {
      "email": "elliot@evilcorp.com",
      "password": "mypassword"
    }

    // response
    {
      "sessionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    }

Logout (delete session)
~~~~~~~~~~~~~~~~~~~~~~~

**``DELETE``**\ ``/auth/logout``

.. code:: javascript

    // response
    200

--------------

Companies
---------

List Companies
~~~~~~~~~~~~~~

**``GET``**\ ``/companies``

.. code:: javascript

    // response
    [
      {
        id: 1,
        name: "My Company",
        ruc: "10987654320",
        website: "https://evilcorp.com"
      }
    ];

Create and Join Company
~~~~~~~~~~~~~~~~~~~~~~~

**``POST``**\ ``/companies/create_join``

.. code:: javascript

    // body
    {
      "name": "EvilCorp",
      "ruc": "10987654320"
    }

    // response
    {
      "id": 1,
      "name": "EvilCorp",
      "ruc": "10987654320"
    }

Join Company
~~~~~~~~~~~~

**``POST``**\ ``/companies/join``

.. code:: javascript

    // body
    {
      "companyId": 1
    }

    // response
    {
      "id": 1,
      "name": "EvilCorp",
      "ruc": "10987654320"
    }

Update Company
~~~~~~~~~~~~~~

**``PUT``**\ ``/companies/:id``

-  ``:id`` is the ID of the company to be updated.

.. code:: javascript

    // body
    {
      "name": "New Company", // optional
      "ruc": "10987654321"  // optional
    }

    // response
    200

Leave Company
~~~~~~~~~~~~~

**``POST``**\ ``/companies/leave``

--------------

Products
--------

List Products
~~~~~~~~~~~~~

**``GET``**\ ``/products``

.. code:: javascript

    // response
    [
      {
        id: 1,
        companyId: 1,
        name: "product 1",
        sku: "DP18-Bk-T",
        price: 100,
        discount: 10
      },
      {
        id: 2,
        companyId: 1,
        name: "product 2",
        sku: "DP18-Bk-T1",
        price: 100,
        discount: 10
      }
    ];

Create Product
~~~~~~~~~~~~~~

**``POST``**\ ``/products``

-  You can only create products for users within your company.

.. code:: javascript

    // body
    {
        "companyId": 1,
        "name": "product 2",
        "sku": "DP18-Bk-T1",
        "price": 100,
        "discount": 10
    }

    // response
    {
        "id": 3,
        "companyId": 1,
        "name": "product 2",
        "sku": "DP18-Bk-T1",
        "price": 100,
        "discount": 10
    }

Update Product
~~~~~~~~~~~~~~

**``PUT``**\ ``/products/:id``

-  ``:id`` is the ID of the product to be updated

.. code:: javascript

    // body
    {
        "name": "product 3",
        "sku": "DP18-Bk-T1",
        "price": 100,
        "discount": 10
    }

    // response
    {
        "id": 3,
        "name": "product 3",
        "sku": "DP18-Bk-T",
        "price": 100,
        "discount": 10
    }

Delete Product
~~~~~~~~~~~~~~

**``DELETE``**\ ``/products/:id``

-  ``:id`` is the ID of the product to be deleted

.. code:: javascript

    // response
    200

--------------

Users
-----

List Company Users
~~~~~~~~~~~~~~~~~~

**``GET``**\ ``/users``

.. code:: javascript

    // response
    [
      {
        "id": 1,
        "companyId": 1,
        "name": "Elliot Alderson",
        "email": "elliot@evilcorp.com",
      },
      {
        "id": 2,
        "companyId": 1,
        "name": "Tyrell Wellick",
        "email": "tyrell@evilcorp.com"
      }
    ];

Get User Information
~~~~~~~~~~~~~~~~~~~~

**``GET``**\ ``/users/me``

.. code:: javascript

    // response
    {
        "id": 1,
        "companyId": 1,
        "name": "Elliot Alderson",
        "email": "elliot@evilcorp.com",
    }

Update User Details
~~~~~~~~~~~~~~~~~~~

**``PUT``**\ ``/users/me``

.. code:: javascript

    // body
    {
      "name": "Not Elliot Alderson", // optional
      "email": "notelliot@evilcorp.com" // optional
    }

    // response
    {
      "id": 1,
      "companyId": 1,
      "name": "Not Elliot Alderson",
      "email": "notelliot@evilcorp.com"
    }

Change Password
~~~~~~~~~~~~~~~

**``PUT``**\ ``/users/me/change_password``

.. code:: javascript

    // body
    {
      "oldPassword": "opensesame",
      "newPassword": "opensesame123",
      "newPasswordConfirmation": "opensesame123"
    }

    // response
    200
