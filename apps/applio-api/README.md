# Applio API Documentation

All requests require a token included in the `Authorization` header for authentication.

## Endpoints

### 1. Retrieve Entries
Fetches a paginated list of entries, with optional filters by `algorithm` and `tags`.

**Endpoint:**  
`GET /models/`

**Headers:**
- **Authorization**: Token (required)
- **Parameters:**
  - `page` *(optional)*: Integer indicating the page number. Default: `1`.
  - `perPage` *(optional)*: Integer indicating the number of items per page. Default: `10`.
  - `algorithm` *(optional)*: String to filter by a specific algorithm.
  - `tags` *(optional)*: String to filter by specific tags.
  - `order` *(optional)*: String to order the results by.

**Response:**
- **200 OK**
  - Returns an array of entry objects.
    ```json
    [
      {
        // Entry data
      }
    ]
    ```
- **404 Not Found**
  - No results found.
    ```json
    {
      "message": "No results found."
    }
    ```
- **4XX Error**
  - For other client-side errors.
    ```json
    {
      "message": "Error message"
    }
    ```

---

### 2. Search Entries by Name
Fetches a list of entries filtered by `name`, with additional filters for `algorithm` and `tags` if needed.

**Endpoint:**  
`GET /models/search`

**Headers:**
- **Authorization**: Token (required)
- **Parameters:**
  - `name` *(required)*: String to search by entry name.
  - `page` *(optional)*: Integer indicating the page number. Default: `1`.
  - `perPage` *(optional)*: Integer indicating the number of items per page. Default: `10`.
  - `algorithm` *(optional)*: String to filter by a specific algorithm.
  - `tags` *(optional)*: String to filter by specific tags.
  - `order` *(optional)*: String to order the results by.

**Response:**
- **200 OK**
  - Returns an array of entry objects matching the name filter.
    ```json
    [
      {
        // Entry data
      }
    ]
    ```
- **400 Bad Request**
  - Indicates that the `name` parameter is missing.
    ```json
    {
      "message": "Name is required."
    }
    ```
- **404 Not Found**
  - No results found for the given filters.
    ```json
    {
      "message": "No results found."
    }
    ```
- **4XX Error**
  - For other client-side errors.
    ```json
    {
      "message": "Error message"
    }
    ```
